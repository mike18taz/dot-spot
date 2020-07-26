"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'mdb',
    connector: 'mongodb',
    url: 'mongodb+srv://mike:regis123@cluster0.hvb6j.gcp.mongodb.net/dotspot?authSource=admin&retryWrites=true&w=majority',
    //host: 'cluster0.hvb6j.gcp.mongodb.net',
    //port: 27016,
    user: 'mike',
    password: 'regis123',
    database: 'dotspot',
    protocol: 'mongodb+srv',
    useNewUrlParser: true,
    useUnifiedTopology: true
};
//mongodb+srv://mike:<password>@cluster0.hvb6j.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority
//url: 'mongodb://localhost:27017/dotspot',
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MdbDataSource = class MdbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MdbDataSource.dataSourceName = 'mdb';
MdbDataSource.defaultConfig = config;
MdbDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.mdb', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MdbDataSource);
exports.MdbDataSource = MdbDataSource;
//# sourceMappingURL=mdb.datasource.js.map