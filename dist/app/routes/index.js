"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
exports.usersRoute = user_1.default;
const transactions_1 = __importDefault(require("./transactions"));
exports.transactionsRoute = transactions_1.default;
const merchant_1 = __importDefault(require("./merchant"));
exports.merchantRoute = merchant_1.default;
const userStats_1 = __importDefault(require("./userStats"));
exports.userStatsRoute = userStats_1.default;
//# sourceMappingURL=index.js.map