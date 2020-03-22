"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pool_1 = __importDefault(require("./pool"));
exports.default = {
    /**
     * Execute the given query
     *
     * @param {object} query
     *
     * @returns {object} object
     */
    execute(query) {
        return new Promise((resolve, reject) => {
            pool_1.default.query(query)
                .then((res) => {
                resolve(res.rows);
            })
                .catch((err) => {
                reject(err);
            });
        });
    },
};
//# sourceMappingURL=query.js.map