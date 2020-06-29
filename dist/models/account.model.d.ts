import { Entity } from '@loopback/repository';
export declare class Account extends Entity {
    firstName: string;
    lastName: string;
    id?: number;
    constructor(data?: Partial<Account>);
}
export interface AccountRelations {
}
export declare type AccountWithRelations = Account & AccountRelations;
