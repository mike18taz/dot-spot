"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dot = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Dot = class Dot extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: false,
    }),
    tslib_1.__metadata("design:type", Number)
], Dot.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Dot.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Dot.prototype, "category", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Dot.prototype, "subcat", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Dot.prototype, "description", void 0);
Dot = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Dot);
exports.Dot = Dot;
//# sourceMappingURL=dot.model.js.map