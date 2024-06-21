import { FindManyOptions, Repository } from 'typeorm';
export declare abstract class BaseService<T> {
    abstract getRepository(): Repository<T>;
    findAll(): Promise<T[]>;
    findOne(id: any): Promise<T>;
    save(entity: T): Promise<T>;
    saveMany(entities: T[]): Promise<T[]>;
    count(options?: FindManyOptions<T>): Promise<number>;
}
