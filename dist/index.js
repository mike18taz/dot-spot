"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.ConnectingDotsApp = void 0;
const application_1 = require("./application");
Object.defineProperty(exports, "ConnectingDotsApp", { enumerable: true, get: function () { return application_1.ConnectingDotsApp; } });
async function main(options = {}) {
    const app = new application_1.ConnectingDotsApp(options);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map