"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const port = 8000;
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins
};
app.use((0, morgan_1.default)());
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.post('/', (req, res) => {
    res.json("'text': 'pls work bro i want to sleep'");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
