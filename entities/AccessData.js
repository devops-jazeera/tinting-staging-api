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
exports.AccessData = void 0;
var typeorm_1 = require("typeorm");
var AccessData = /** @class */ (function () {
    function AccessData() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: "name" }),
        __metadata("design:type", String)
    ], AccessData.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "code" }),
        __metadata("design:type", String)
    ], AccessData.prototype, "code", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "data" }),
        __metadata("design:type", String)
    ], AccessData.prototype, "data", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "val" }),
        __metadata("design:type", String)
    ], AccessData.prototype, "val", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "active" }),
        __metadata("design:type", Boolean)
    ], AccessData.prototype, "active", void 0);
    AccessData = __decorate([
        (0, typeorm_1.Entity)("access_data")
    ], AccessData);
    return AccessData;
}());
exports.AccessData = AccessData;
