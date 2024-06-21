"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    findAll() {
        return this.getRepository().find();
    }
    findOne(id) {
        return this.getRepository().findOne({ where: id });
    }
    save(entity) {
        return this.getRepository().save(entity);
    }
    saveMany(entities) {
        return this.getRepository().save(entities);
    }
    count(options) {
        return this.getRepository().count(options);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=service.commons.js.map