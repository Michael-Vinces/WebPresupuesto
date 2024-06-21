import { BaseService } from './service.commons';
export declare abstract class BaseController<T> {
    abstract getService(): BaseService<T>;
    findOne(id: any): Promise<T>;
    save(entity: T): Promise<T>;
    saveMany(entities: T[]): Promise<T[]>;
}
