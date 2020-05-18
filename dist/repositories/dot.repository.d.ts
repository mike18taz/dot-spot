import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Dot, DotRelations } from '../models';
export declare class DotRepository extends DefaultCrudRepository<Dot, typeof Dot.prototype.id, DotRelations> {
    constructor(dataSource: DbDataSource);
}
