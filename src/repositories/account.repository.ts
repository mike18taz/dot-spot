import {DefaultCrudRepository} from '@loopback/repository';
import {Account, AccountRelations} from '../models';
import {MdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AccountRepository extends DefaultCrudRepository<
  Account,
  typeof Account.prototype.id,
  AccountRelations
> {
  constructor(
    @inject('datasources.mdb') dataSource: MdbDataSource,
  ) {
    super(Account, dataSource);
  }
}
