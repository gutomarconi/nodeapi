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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_js_1 = __importDefault(require("../db/query.js"));
/**
 * Constant with From Clause for query the DB
 *
 * @type {string}
 */
const fromClause = " FROM public.transactions ";
/**
 * Constant with Date filter for query the DB
 * if the user give start and/or end date we want to filter transactions by that.
 *
 * @type {string}
 * @return string
 */
function dateFilter(startDate, endDate) {
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
const groupBy = "GROUP BY merchant_id";
/**
 * Get transactions by user
 *
 * @param request
 * @returns {Promise<string|*>}
 */
const getTransactionsByUser = (request) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rows = yield query_js_1.default.execute("SELECT merchant_id, sum(amount) as amount " +
            fromClause +
            "WHERE user_id = " + request.params.id +
            dateFilter(request.query.startDate, request.query.endDate) +
            groupBy);
        return rows;
    }
    catch (error) {
        throw 'Request Failed';
    }
});
exports.getTransactionsByUser = getTransactionsByUser;
/**
 * Get General transactions for all other users for the user merchants ids.
 *
 * @param userId
 * @param merchantsIds
 * @param startDate
 * @param endDate
 * @returns {Promise<string|*>}
 */
const getGeneralTransactions = (userId, merchantsIds, startDate, endDate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rows = yield query_js_1.default.execute("SELECT merchant_id, (sum(amount) / count(user_id)) as amount " +
            fromClause +
            "WHERE user_id <> " + userId +
            dateFilter(startDate, endDate) +
            " AND merchant_id in (" + merchantsIds.join(",") + ") " +
            groupBy);
        return rows;
    }
    catch (error) {
        throw 'Request Failed';
    }
});
exports.getGeneralTransactions = getGeneralTransactions;
//# sourceMappingURL=transactions.js.map