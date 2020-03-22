"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const merchantController_1 = require("../controllers/merchantController");
const router = express_1.default.Router();
router.get('/merchant/', merchantController_1.getAll);
router.get('/merchant/:id', merchantController_1.getMerchant);
exports.default = router;
//# sourceMappingURL=merchant.js.map