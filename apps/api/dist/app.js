"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
// app.ts
const express_1 = __importDefault(require("express"));
const error_1 = require("./middlewares/error");
const notFound_1 = require("./middlewares/notFound");
const exceptions_routes_1 = require("./modules/exceptions/exceptions.routes");
const employees_routes_1 = require("./modules/employees/employees.routes");
function createApp() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json({ limit: '1mb' }));
    app.get('/health', (_req, res) => res.json({ ok: true }));
    app.use('/api/exceptions', exceptions_routes_1.exceptionsRouter);
    app.use('/api/employees', employees_routes_1.employeesRouter);
    app.use(notFound_1.notFound);
    app.use(error_1.errorHandler);
    return app;
}
//# sourceMappingURL=app.js.map