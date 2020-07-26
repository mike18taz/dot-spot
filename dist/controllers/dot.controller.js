"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
/*
If there are particular API that you want to make it available to everyone without authentication,
you can add @authenticate.skip() before that function.
See https://loopback.io/doc/en/lb4/Decorators_authenticate.html for more details.
*/
let DotController = class DotController {
    constructor(dotRepository) {
        this.dotRepository = dotRepository;
    }
    async create(dots) {
        return this.dotRepository.createAll(dots);
    }
    async count(where) {
        return this.dotRepository.count(where);
    }
    async find(filter) {
        return this.dotRepository.find(filter);
    }
    async updateAll(dot, where) {
        return this.dotRepository.updateAll(dot, where);
    }
    async findById(id, filter) {
        return this.dotRepository.findById(id, filter);
    }
    async updateById(id, dot) {
        await this.dotRepository.updateById(id, dot);
    }
    async replaceById(id, dot) {
        await this.dotRepository.replaceById(id, dot);
    }
    async deleteById(id) {
        await this.dotRepository.deleteById(id);
    }
    async findByCategory(category, filter) {
        return this.dotRepository.find({ where: { category: category } });
    }
};
tslib_1.__decorate([
    rest_1.post('/dots', {
        responses: {
            '200': {
                description: 'Dot model instance',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Dot, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Dot, { includeRelations: true }),
                },
            },
        }
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", Promise)
], DotController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/dots/count', {
        responses: {
            '200': {
                description: 'Dot model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Dot)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DotController.prototype, "count", null);
tslib_1.__decorate([
    authentication_1.authenticate.skip(),
    rest_1.get('/dots', {
        responses: {
            '200': {
                description: 'Array of Dot model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Dot, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Dot)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DotController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/dots', {
        responses: {
            '200': {
                description: 'Dot PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Dot, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Dot)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Dot, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DotController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/dots/{id}', {
        responses: {
            '200': {
                description: 'Dot model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Dot, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Dot, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DotController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/dots/{id}', {
        responses: {
            '204': {
                description: 'Dot PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Dot, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Dot]),
    tslib_1.__metadata("design:returntype", Promise)
], DotController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/dots/{id}', {
        responses: {
            '204': {
                description: 'Dot PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Dot]),
    tslib_1.__metadata("design:returntype", Promise)
], DotController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/dots/{id}', {
        responses: {
            '204': {
                description: 'Dot DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], DotController.prototype, "deleteById", null);
tslib_1.__decorate([
    authentication_1.authenticate.skip(),
    rest_1.get('/dots/category/{category}', {
        responses: {
            '200': {
                description: 'Array of Dot model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Dot, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('category')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Dot)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DotController.prototype, "findByCategory", null);
DotController = tslib_1.__decorate([
    authentication_1.authenticate('jwt'),
    tslib_1.__param(0, repository_1.repository(repositories_1.DotRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DotRepository])
], DotController);
exports.DotController = DotController;
//# sourceMappingURL=dot.controller.js.map