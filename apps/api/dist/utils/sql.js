"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whereBuilder = whereBuilder;
function whereBuilder() {
    const parts = [];
    const params = [];
    const add = (clause, value) => {
        if (value === undefined || value === null || value === '')
            return;
        params.push(value);
        parts.push(clause.replace(/\$(\d+)/g, () => `$${params.length}`));
    };
    return {
        add,
        build: () => ({
            sql: parts.length ? `WHERE ${parts.join(' AND ')}` : '',
            params
        })
    };
}
//# sourceMappingURL=sql.js.map