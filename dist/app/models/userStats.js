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
const transactions_1 = require("./transactions");
/**
 * Get history of purchases with comparision between the given user and all others.
 *
 * @param userPurchases
 * @param request
 * @returns {Promise<[]>}
 */
const getHistory = (userPurchases, request) => __awaiter(void 0, void 0, void 0, function* () {
    const merchantsIds = getMerchantsIds(userPurchases);
    const othersPurchases = yield transactions_1.getGeneralTransactions(request.params.id, merchantsIds, request.query.startDate, request.query.endDate);
    return generate(userPurchases, othersPurchases);
});
exports.getHistory = getHistory;
/**
 * Get merchants Ids for the given user to filter the others purchase
 *
 * @param purchases
 *
 * @returns {[]}
 */
const getMerchantsIds = (purchases) => {
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
const generate = (userPurchases, othersPurchases) => {
    let result = [];
    userPurchases.map((transaction) => {
        const average = getAverageSpent(othersPurchases, transaction.merchant_id);
        const percentile = getPercentile(parseFloat(transaction.amount), average);
        result.push({
            merchantId: transaction.merchant_id,
            userSpent: parseFloat(transaction.amount).toFixed(2),
            generalAverage: parseFloat(average.toFixed(2)),
            percentile: percentile
        });
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
const getAverageSpent = (othersPurchases, merchantId) => {
    const average = othersPurchases.filter(merchant => {
        return merchant.merchant_id === merchantId;
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
const getPercentile = (userAmount, average) => {
    if (average === 0) {
        return 100;
    }
    return parseFloat(((userAmount / average - 1) * 100).toFixed(2));
};
//# sourceMappingURL=userStats.js.map