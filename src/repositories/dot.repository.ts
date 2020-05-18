import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Dot, DotRelations} from '../models';

export class DotRepository extends DefaultCrudRepository<
  Dot,
  typeof Dot.prototype.id,
  DotRelations
  > {
  constructor(
    @inject('datasources.mdb') dataSource: DbDataSource,
  ) {
    super(Dot, dataSource);
  }
}
