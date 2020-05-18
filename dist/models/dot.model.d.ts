import { Entity } from '@loopback/repository';
export declare class Dot extends Entity {
    id?: number;
    name: string;
    category: string;
    subcat?: string;
    description?: string;
    [prop: string]: any;
    constructor(data?: Partial<Dot>);
}
export interface DotRelations {
}
export declare type DotWithRelations = Dot & DotRelations;
