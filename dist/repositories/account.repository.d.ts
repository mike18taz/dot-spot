import { DefaultCrudRepository } from '@loopback/repository';
import { Account, AccountRelations } from '../models';
import { MdbDataSource } from '../datasources';
export declare class AccountRepository extends DefaultCrudRepository<Account, typeof Account.prototype.id, AccountRelations> {
    constructor(dataSource: MdbDataSource);
}
