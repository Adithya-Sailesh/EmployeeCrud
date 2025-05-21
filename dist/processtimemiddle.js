"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processTimeMiddleware = void 0;
const processTimeMiddleware = (req, res, next) => {
    let time1 = Number(new Date());
    res.on(("finish"), () => {
        let time2 = Number(new Date());
        console.log(` time taken ${time2 - time1}`);
    });
    next();
};
exports.processTimeMiddleware = processTimeMiddleware;
//# sourceMappingURL=processtimemiddle.js.map