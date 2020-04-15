"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const getUserStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactions = yield transactions_1.getTransactionsByUser(req);
        if (transactions.length > 0) {
            const stats = yield userStats_1.getHistory(transactions, req);
            res.status(200).send(stats);
        }
        else {
            return res.status(200).send('User with no purchases for the given period!');
        }
    }
    catch (error) {
        return res.status(500).send('Request Failed');
    }
});
exports.getUserStats = getUserStats;
//# sourceMappingURL=userStats.js.map