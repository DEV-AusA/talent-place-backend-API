"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerGlobal = void 0;
const loggerGlobal = (req, res, next) => {
    const currentDate = new Date();
    console.log(`Ejecutando metodo ${req.method} en la ruta ${req.url} con fecha y hora local: ${currentDate.toLocaleString()}`);
    next();
};
exports.loggerGlobal = loggerGlobal;
//# sourceMappingURL=logger.middleware.js.map