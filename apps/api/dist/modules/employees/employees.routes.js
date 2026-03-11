"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeesRouter = void 0;
// employees.routes.ts
const express_1 = require("express");
const employees_controller_1 = require("./employees.controller");
exports.employeesRouter = (0, express_1.Router)();
exports.employeesRouter.get('/', employees_controller_1.searchEmployees);
//# sourceMappingURL=employees.routes.js.map