"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDataSrc = void 0;
var typeorm_1 = require("typeorm");
var FileDataSrc = /** @class */ (function () {
    function FileDataSrc() {
        this.is_secure = false;
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: "id" }),
        __metadata("design:type", String)
    ], FileDataSrc.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name" }),
        __metadata("design:type", String)
    ], FileDataSrc.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "mimetype" }),
        __metadata("design:type", String)
    ], FileDataSrc.prototype, "mimetype", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "is_secure" }),
        __metadata("design:type", Boolean)
    ], FileDataSrc.prototype, "is_secure", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "data" }),
        __metadata("design:type", String)
    ], FileDataSrc.prototype, "data", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "ref" }),
        __metadata("design:type", String)
    ], FileDataSrc.prototype, "ref", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "ref_type" }),
        __metadata("design:type", String)
    ], FileDataSrc.prototype, "ref_type", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "url" }),
        __metadata("design:type", String)
    ], FileDataSrc.prototype, "url", void 0);
    FileDataSrc = __decorate([
        (0, typeorm_1.Entity)("file_data")
    ], FileDataSrc);
    return FileDataSrc;
}());
exports.FileDataSrc = FileDataSrc;
