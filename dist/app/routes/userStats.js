"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userStats_1 = require("../services/userStats");
const router = express_1.default.Router();
router.get('/userstats/:id', userStats_1.getUserStats);
exports.default = router;
//# sourceMappingURL=userStats.js.map