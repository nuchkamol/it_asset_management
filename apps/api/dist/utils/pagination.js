"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePaging = parsePaging;
exports.parseSort = parseSort;
function parsePaging(q) {
    const pageIndex = Math.max(0, Number(q.pageIndex ?? 0));
    const pageSize = Math.min(200, Math.max(1, Number(q.pageSize ?? 10)));
    const offset = pageIndex * pageSize;
    return { pageIndex, pageSize, offset, limit: pageSize };
}
function parseSort(q, allow, defaultSort = 'exception_id:desc') {
    const raw = q.sort ?? defaultSort;
    const [id, dir] = String(raw).split(':');
    const col = allow.includes(id) ? id : defaultSort.split(':')[0];
    const desc = String(dir).toLowerCase() === 'desc';
    return { col, desc };
}
//# sourceMappingURL=pagination.js.map