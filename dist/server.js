"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_router_1 = __importDefault(require("./employee_router"));
const loggermiddleware_1 = require("./loggermiddleware");
const processtimemiddle_1 = require("./processtimemiddle");
const server = (0, express_1.default)();
let port = 3000;
server.use(express_1.default.json());
server.use(loggermiddleware_1.loggerMiddleware);
server.use(processtimemiddle_1.processTimeMiddleware);
server.use('/employees', employee_router_1.default);
server.get('/', (req, res) => {
    res.send("From home");
});
server.listen(port, () => {
    console.log("listening on", port);
});
//# sourceMappingURL=server.js.map