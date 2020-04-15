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
const getUserStats = async (req: any, res: any): Promise<void> => {
    try {
        const transactions: IPurchases[] = await getTransactionsByUser(req);
        if (transactions.length > 0) {
            const stats: IUserStats[] = await getHistory(transactions, req)
            res.status(200).send(stats);
         } else {
            return res.status(200).send('User with no purchases for the given period!');
         }
    } catch (error) {
        return res.status(500).send('Request Failed');
    }
};

export {
    getUserStats,
}