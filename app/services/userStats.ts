import { getTransactionsByUser } from "../models/transactions";
import { getHistory } from "../models/userStats";
import { IPurchases, IUserStats } from "../types/types";

/**
 * Get transactions by the user and built the stats
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getUserStats = (req, res) => {
    try {
        getTransactionsByUser(req)
        .then((transactions: IPurchases[]) => {
            if (transactions.length > 0) {
                getHistory(transactions, req)
                .then((stats: IUserStats[]) => {
                    res.status(200).send(stats);
                })
            } else {
                return res.status(200).send('User with no purchases for the given period!');
            }
        })
    } catch (error) {
        return res.status(500).send('Request Failed');
    }
};

export {
    getUserStats,
}