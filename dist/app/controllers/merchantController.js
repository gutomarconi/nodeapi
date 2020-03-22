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
 * Get all merchants
 *
 * @param req
 * @param res
 * @returns {Promise<*|void>}
 */
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rows = yield query_js_1.default.execute('SELECT * FROM public.merchant');
        if (!rows[0]) {
            return res.status(404).send('There are no Merchants');
        }
        return res.status(200).send(rows);
    }
    catch (error) {
        return res.status(500).send('Request Failed');
    }
});
exports.getAll = getAll;
/**
 * Get merchant by id
 *
 * @param req
 * @param res
 * @returns {Promise<*|void>}
 */
const getMerchant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rows = yield query_js_1.default.execute('SELECT * FROM public.merchant  WHERE id =' + req.params.id);
        if (!rows[0]) {
            return res.status(404).send('Merchant does not exist!');
        }
        return res.status(200).send(rows);
    }
    catch (error) {
        return res.status(500).send('Request Failed');
    }
});
exports.getMerchant = getMerchant;
//# sourceMappingURL=merchantController.js.map