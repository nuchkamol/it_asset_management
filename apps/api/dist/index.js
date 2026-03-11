"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const app_1 = require("./app");
const env_1 = require("./config/env");
const app = (0, app_1.createApp)();
app.listen(env_1.env.PORT, () => {
    console.log(`Exceptions API listening on :${env_1.env.PORT} (${env_1.env.NODE_ENV})`);
});
//# sourceMappingURL=index.js.map