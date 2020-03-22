"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transactions_1 = require("../models/transactions");
const userStats_1 = require("../models/userStats");
/**
 * Get transactions by the user and built the stats
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getUserStats = (req, res) => {
    try {
        transactions_1.getTransactionsByUser(req)
            .then((response) => response)
            .then((transactions) => {
            if (transactions.length > 0) {
                userStats_1.getHistory(transactions, req)
                    .then((stats) => {
                    console.log(stats);
                    res.send(stats);
                });
            }
            else {
                return res.status(200).send('User with no purchases for the given period!');
            }
        });
    }
    catch (error) {
        return res.status(500).send('Request Failed');
    }
};
exports.getUserStats = getUserStats;
//# sourceMappingURL=userStats.js.map