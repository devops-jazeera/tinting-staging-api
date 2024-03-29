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
exports.SyncDdl = void 0;
var typeorm_1 = require("typeorm");
var SyncDdl = /** @class */ (function () {
    function SyncDdl() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: "id" }),
        __metadata("design:type", String)
    ], SyncDdl.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "summary" }),
        __metadata("design:type", String)
    ], SyncDdl.prototype, "summary", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], SyncDdl.prototype, "updated_on", void 0);
    SyncDdl = __decorate([
        (0, typeorm_1.Entity)("sync_ddl")
    ], SyncDdl);
    return SyncDdl;
}());
exports.SyncDdl = SyncDdl;
