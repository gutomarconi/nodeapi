"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes = __importStar(require("./app/routes"));
dotenv_1.default.config();
const port = process.env.PORT || 3009;
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/api', routes.usersRoute);
app.use('/api', routes.transactionsRoute);
app.use('/api', routes.merchantRoute);
app.use('/api', routes.userStatsRoute);
app.use('/', (req, res) => res.send("Home Page"));
app.listen(port).on('listening', () => {
    console.log(`🚀 are live on ${port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map