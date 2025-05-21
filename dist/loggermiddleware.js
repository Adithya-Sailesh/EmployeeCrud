"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const loggerMiddleware = (req, res, next) => {
    res.on("finish", () => {
        const statuscode = res.statusCode;
        console.log(`${new Date().toISOString()}${req.method} ${req.originalUrl} statuscode= ${statuscode}`);
    });
    next();
};
exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=loggermiddleware.js.map