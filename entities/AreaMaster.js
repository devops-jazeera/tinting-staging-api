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
exports.AreaMaster = void 0;
var typeorm_1 = require("typeorm");
var CountryMaster_1 = require("./CountryMaster");
var AreaMaster = /** @class */ (function () {
    function AreaMaster() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: "id" }),
        __metadata("design:type", String)
    ], AreaMaster.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "country_id" }),
        __metadata("design:type", String)
    ], AreaMaster.prototype, "country_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "region_name" }),
        __metadata("design:type", String)
    ], AreaMaster.prototype, "region_name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "region_name_ar" }),
        __metadata("design:type", String)
    ], AreaMaster.prototype, "region_name_ar", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "city" }),
        __metadata("design:type", String)
    ], AreaMaster.prototype, "city", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "city_ar" }),
        __metadata("design:type", String)
    ], AreaMaster.prototype, "city_ar", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "district" }),
        __metadata("design:type", String)
    ], AreaMaster.prototype, "district", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "district_ar" }),
        __metadata("design:type", String)
    ], AreaMaster.prototype, "district_ar", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "vid" }),
        __metadata("design:type", String)
    ], AreaMaster.prototype, "vid", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "active" }),
        __metadata("design:type", Boolean)
    ], AreaMaster.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_by" }),
        __metadata("design:type", String)
    ], AreaMaster.prototype, "updated_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], AreaMaster.prototype, "inserted_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], AreaMaster.prototype, "updated_on", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: "country_id" }),
        (0, typeorm_1.ManyToOne)(function (type) { return CountryMaster_1.CountryMaster; }, function (country) { return country.areaCountryMaster; }),
        __metadata("design:type", CountryMaster_1.CountryMaster)
    ], AreaMaster.prototype, "countryMaster", void 0);
    AreaMaster = __decorate([
        (0, typeorm_1.Entity)("area_master")
    ], AreaMaster);
    return AreaMaster;
}());
exports.AreaMaster = AreaMaster;
