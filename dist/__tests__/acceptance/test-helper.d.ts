import { ConnectingDotsApp } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: ConnectingDotsApp;
    client: Client;
}
