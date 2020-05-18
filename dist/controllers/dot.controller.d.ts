import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Dot } from '../models';
import { DotRepository } from '../repositories';
export declare class DotController {
    dotRepository: DotRepository;
    constructor(dotRepository: DotRepository);
    create(dot: Omit<Dot, 'id'>): Promise<Dot>;
    count(where?: Where<Dot>): Promise<Count>;
    find(filter?: Filter<Dot>): Promise<Dot[]>;
    updateAll(dot: Dot, where?: Where<Dot>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Dot>): Promise<Dot>;
    updateById(id: number, dot: Dot): Promise<void>;
    replaceById(id: number, dot: Dot): Promise<void>;
    deleteById(id: number): Promise<void>;
}
