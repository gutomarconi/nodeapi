import query from "../db/query.js";
import { IPurchases } from "../types/types"

/**
 * Constant with From Clause for query the DB
 *
 * @type {string}
 */
const fromClause: string = " FROM public.transactions ";

/**
 * Constant with Date filter for query the DB
 * if the user give start and/or end date we want to filter transactions by that.
 *
 * @type {string}
 * @return string
 */
function dateFilter (startDate?: string, endDate?: string): string {
    if (startDate === undefined && endDate === undefined) {
        return " ";
    }
    let filter = "";
    if (startDate !== undefined) {
        filter = filter + " AND date >= '" + startDate + "' ";
    }
    if (endDate !== undefined) {
        filter = filter + " AND date <= '" + endDate + "' ";
    }
    return filter;
}

/**
 * Constant with Group by clause for query the DB
 *
 * @type {string}
 */
const groupBy: string = "GROUP BY merchant_id";

/**
 * Get transactions by user
 *
 * @param request
 *
 * @returns {Promise<IPurchases[]>}
 */
const getTransactionsByUser = async (request): Promise<IPurchases[]> => {
    try {
        const rows = await query.execute(
            "SELECT merchant_id, sum(amount) as amount " +
            fromClause +
            "WHERE user_id = " + request.params.id +
            dateFilter(request.query.startDate, request.query.endDate) +
            groupBy
        );
        return rows;
    } catch (error) {
        throw 'Request Failed';
    }
};

/**
 * Get General transactions for all other users for the user merchants ids.
 *
 * @param userId
 * @param merchantsIds
 * @param startDate
 * @param endDate
 *
 * @returns {Promise<IPurchases[]>}
 */
const getGeneralTransactions = async (
    userId: number,
    merchantsIds: number[],
    startDate: string,
    endDate: string
): Promise<IPurchases[]> => {
    try {
        const rows = await query.execute(
            "SELECT merchant_id, (sum(amount) / count(user_id)) as amount " +
            fromClause +
            "WHERE user_id <> " + userId +
            dateFilter(startDate, endDate) +
            " AND merchant_id in (" + merchantsIds.join(",") + ") " +
            groupBy
        );
        return rows;
    } catch (error) {
        throw 'Request Failed';
    }
};

export {
    getTransactionsByUser,
    getGeneralTransactions,
};
