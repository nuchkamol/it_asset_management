"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchEmployees = searchEmployees;
const pool_1 = require("../../db/pool");
const pagination_1 = require("../../utils/pagination");
async function searchEmployees(req, res) {
    const q = req.query.q?.toString() ?? '';
    const { pageIndex, pageSize } = (0, pagination_1.parsePaging)(req.query);
    const where = q ? `WHERE lower(name_th) LIKE lower('%' || $1 || '%') 
                        OR lower(surname_th) LIKE lower('%' || $1 || '%')
                        OR emp_code LIKE '%' || $1 || '%'` : '';
    const params = q ? [q] : [];
    const itemsSql = `
    SELECT emp_code, name_th, surname_th, department_name
    FROM public."07_employee"
    ${where}
    ORDER BY emp_code ASC
    LIMIT $${params.length + 1} OFFSET $${params.length + 2}
  `;
    const countSql = `
    SELECT COUNT(*)::int AS total
    FROM public."07_employee" ${where}
  `;
    const [itemsRes, countRes] = await Promise.all([
        pool_1.pool.query(itemsSql, [...params, pageSize, pageIndex * pageSize]),
        pool_1.pool.query(countSql, params)
    ]);
    res.json({ items: itemsRes.rows, total: countRes.rows[0].total });
}
//# sourceMappingURL=employees.controller.js.map