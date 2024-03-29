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
exports.ChannelMaster = void 0;
var typeorm_1 = require("typeorm");
var ChannelMaster = /** @class */ (function () {
    function ChannelMaster() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: "id" }),
        __metadata("design:type", String)
    ], ChannelMaster.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name_en" }),
        __metadata("design:type", String)
    ], ChannelMaster.prototype, "name_en", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name_ar" }),
        __metadata("design:type", String)
    ], ChannelMaster.prototype, "name_ar", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "vendor_id" }),
        __metadata("design:type", String)
    ], ChannelMaster.prototype, "vendor_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "active" }),
        __metadata("design:type", Boolean)
    ], ChannelMaster.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "created_by" }),
        __metadata("design:type", String)
    ], ChannelMaster.prototype, "created_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "created_on" }),
        __metadata("design:type", Date)
    ], ChannelMaster.prototype, "created_on", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_by" }),
        __metadata("design:type", String)
    ], ChannelMaster.prototype, "updated_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], ChannelMaster.prototype, "updated_on", void 0);
    ChannelMaster = __decorate([
        (0, typeorm_1.Entity)({ name: "channel_master" })
    ], ChannelMaster);
    return ChannelMaster;
}());
exports.ChannelMaster = ChannelMaster;
