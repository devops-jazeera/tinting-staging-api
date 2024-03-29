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
exports.SyncTable = void 0;
var typeorm_1 = require("typeorm");
var SyncSource_1 = require("./SyncSource");
var SyncTable = /** @class */ (function () {
    function SyncTable() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: "id" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "map_table" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "map_table", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "map_pk" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "map_pk", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "sync_column" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "sync_column", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "cond" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "cond", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "last_update" }),
        __metadata("design:type", Date)
    ], SyncTable.prototype, "last_update", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "active" }),
        __metadata("design:type", Boolean)
    ], SyncTable.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "priority" }),
        __metadata("design:type", Number)
    ], SyncTable.prototype, "priority", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "group_on" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "group_on", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_by" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "updated_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], SyncTable.prototype, "updated_on", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: "source_id" }),
        (0, typeorm_1.ManyToOne)(function (type) { return SyncSource_1.SyncSource; }),
        __metadata("design:type", SyncSource_1.SyncSource)
    ], SyncTable.prototype, "source", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: "target_id" }),
        (0, typeorm_1.ManyToOne)(function (type) { return SyncSource_1.SyncSource; }),
        __metadata("design:type", SyncSource_1.SyncSource)
    ], SyncTable.prototype, "target", void 0);
    SyncTable = __decorate([
        (0, typeorm_1.Entity)("sync_table")
    ], SyncTable);
    return SyncTable;
}());
exports.SyncTable = SyncTable;
