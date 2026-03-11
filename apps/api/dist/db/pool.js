"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const env_1 = require("../config/env");
exports.pool = new pg_1.Pool({
    host: env_1.env.PGHOST,
    port: env_1.env.PGPORT,
    database: env_1.env.PGDATABASE,
    user: env_1.env.PGUSER,
    password: env_1.env.PGPASSWORD,
    max: 10,
    idleTimeoutMillis: 30_000
});
//# sourceMappingURL=pool.js.map