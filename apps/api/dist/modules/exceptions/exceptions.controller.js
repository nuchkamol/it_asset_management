"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExceptions = getExceptions;
exports.getException = getException;
exports.getExceptionAssignees = getExceptionAssignees;
exports.postAssign = postAssign;
exports.postRevoke = postRevoke;
const pagination_1 = require("../../utils/pagination");
const exceptions_service_1 = require("./exceptions.service");
async function getExceptions(req, res) {
    const { pageIndex, pageSize } = (0, pagination_1.parsePaging)(req.query);
    const { col, desc } = (0, pagination_1.parseSort)(req.query, ['exception_id', 'name', 'risk_level', 'created_at'], 'exception_id:desc');
    const out = await (0, exceptions_service_1.listExceptions)({
        search: req.query.search?.toString(),
        risk: req.query.risk ?? undefined,
        categoryId: req.query.categoryId ? Number(req.query.categoryId) : undefined,
        isActive: typeof req.query.isActive === 'string' ? req.query.isActive === 'true' : undefined,
        sort: { col, desc },
        pageIndex,
        pageSize
    });
    res.json(out);
}
async function getException(req, res) {
    const id = Number(req.params.id);
    const data = await (0, exceptions_service_1.getExceptionById)(id);
    if (!data)
        return res.status(404).json({ error: 'Exception not found' });
    res.json(data);
}
async function getExceptionAssignees(req, res) {
    const id = Number(req.params.id);
    const { pageIndex, pageSize } = (0, pagination_1.parsePaging)(req.query);
    const out = await (0, exceptions_service_1.listAssigneesByException)(id, pageIndex, pageSize);
    res.json(out);
}
async function postAssign(req, res) {
    const id = Number(req.params.id);
    const body = req.body;
    if (!Array.isArray(body.empCodes) || body.empCodes.length === 0) {
        return res.status(400).json({ error: 'empCodes[] is required' });
    }
    const out = await (0, exceptions_service_1.assignExceptionToEmployees)(id, body.empCodes, body.assignedBy);
    res.status(201).json(out);
}
async function postRevoke(req, res) {
    const id = Number(req.params.id);
    const body = req.body;
    if (!Array.isArray(body.empCodes) || body.empCodes.length === 0) {
        return res.status(400).json({ error: 'empCodes[] is required' });
    }
    const out = await (0, exceptions_service_1.revokeAssignments)(id, body.empCodes, body.revokedBy, body.reason);
    res.json(out);
}
//# sourceMappingURL=exceptions.controller.js.map