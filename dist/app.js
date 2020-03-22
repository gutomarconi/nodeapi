"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./app/routes");
dotenv_1.default.config();
const port = process.env.PORT || 3009;
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/api', routes_1.usersRoute);
app.use('/api', routes_1.transactionsRoute);
app.use('/api', routes_1.merchantRoute);
app.use('/api', routes_1.userStatsRoute);
app.use('/', (req, res) => res.send("Home Page"));
app.listen(port).on('listening', () => {
    console.log(`🚀 are live on ${port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map