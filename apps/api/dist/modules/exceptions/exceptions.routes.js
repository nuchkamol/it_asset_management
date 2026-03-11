"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionsRouter = void 0;
const express_1 = require("express");
const exceptions_controller_1 = require("./exceptions.controller");
exports.exceptionsRouter = (0, express_1.Router)();
// List + search + pagination + sorting
exports.exceptionsRouter.get('/', exceptions_controller_1.getExceptions);
// Detail
exports.exceptionsRouter.get('/:id', exceptions_controller_1.getException);
// Assignees (tab)
exports.exceptionsRouter.get('/:id/assignees', exceptions_controller_1.getExceptionAssignees);
// Assign to employees (multiple)
exports.exceptionsRouter.post('/:id/assign', exceptions_controller_1.postAssign);
// Revoke assignments (multiple)
exports.exceptionsRouter.post('/:id/revoke', exceptions_controller_1.postRevoke);
//# sourceMappingURL=exceptions.routes.js.map