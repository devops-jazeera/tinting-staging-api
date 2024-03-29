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
exports.SyncSource = void 0;
var typeorm_1 = require("typeorm");
var SyncSource = /** @class */ (function () {
    function SyncSource() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: "id" }),
        __metadata("design:type", String)
    ], SyncSource.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name" }),
        __metadata("design:type", String)
    ], SyncSource.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "host" }),
        __metadata("design:type", String)
    ], SyncSource.prototype, "host", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "port" }),
        __metadata("design:type", String)
    ], SyncSource.prototype, "port", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "username" }),
        __metadata("design:type", String)
    ], SyncSource.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "password" }),
        __metadata("design:type", String)
    ], SyncSource.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "db" }),
        __metadata("design:type", String)
    ], SyncSource.prototype, "db", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "sync_ddl" }),
        __metadata("design:type", String)
    ], SyncSource.prototype, "sync_ddl", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_by" }),
        __metadata("design:type", String)
    ], SyncSource.prototype, "updated_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], SyncSource.prototype, "updated_on", void 0);
    SyncSource = __decorate([
        (0, typeorm_1.Entity)("sync_source")
    ], SyncSource);
    return SyncSource;
}());
exports.SyncSource = SyncSource;
