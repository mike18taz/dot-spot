import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class MdbDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        url: string;
        user: string;
        password: string;
        database: string;
        useNewUrlParser: boolean;
        useUnifiedTopology: boolean;
    };
    constructor(dsConfig?: object);
}
