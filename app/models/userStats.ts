import { getGeneralTransactions } from "./transactions";
import { IPurchases, IUserStats } from "../types/types";

/**
 * Get history of purchases with comparision between the given user and all others.
 *
 * @param userPurchases
 * @param request
 * @returns {Promise<[]>}
 */
const getHistory = async (userPurchases: IPurchases[], request) => {
    const merchantsIds = getMerchantsIds(userPurchases);
    const othersPurchases: IPurchases[] = await getGeneralTransactions(
        request.params.id,
        merchantsIds,
        request.query.startDate,
        request.query.endDate,
    );
    return generate(userPurchases, othersPurchases);
};

/**
 * Get merchants Ids for the given user to filter the others purchase
 *
 * @param purchases
 *
 * @returns {[]}
 */
const getMerchantsIds = (purchases: IPurchases[]): number[] => {
    let merchants = [];
    purchases.map((transaction) => {
        merchants.push(transaction.merchant_id);
    });
    return merchants;
};

/**
 * Generate the result array
 *
 * @param userPurchases
 * @param othersPurchases
 *
 * @returns {[]}
 */
const generate = (userPurchases: IPurchases[], othersPurchases: IPurchases[]): IUserStats[] => {
    let result = [];
    userPurchases.map((transaction) => {
        const average: number = getAverageSpent(othersPurchases, transaction.merchant_id);
        const percentile: number = getPercentile(parseFloat(transaction.amount), average);
        result.push({
            merchantId: transaction.merchant_id,
            userSpent: parseFloat(transaction.amount).toFixed(2),
            generalAverage: parseFloat(average.toFixed(2)),
            percentile: percentile
        })
    });
    return result;
};

/**
 * Get the average spent by the others users for the given merchant
 *
 * @param othersPurchases
 * @param merchantId
 * @returns {number|*}
 */
const getAverageSpent = (othersPurchases: IPurchases[], merchantId: number): number => {
    const average = othersPurchases.filter(merchant => {
        return merchant.merchant_id === merchantId
    }).map(merchant => parseFloat(merchant.amount));
    if (average.length === 0) {
        return 0;
    }
    return average[0];
};

/**
 * Get percentile that represents how much the given user spent regarding the others users average.
 *
 * @param userAmount
 * @param average
 *
 * @returns {string|number}
 */
const getPercentile = (userAmount: number, average: number): number => {
    if (average === 0) {
        return 100;
    }
    return parseFloat(((userAmount / average - 1) * 100).toFixed(2));
};

export {
    getHistory,
}
