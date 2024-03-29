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
exports.MenuLink = void 0;
var typeorm_1 = require("typeorm");
var MenuLink = /** @class */ (function () {
    function MenuLink() {
    }
    MenuLink_1 = MenuLink;
    var MenuLink_1;
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: "id" }),
        __metadata("design:type", String)
    ], MenuLink.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name" }),
        __metadata("design:type", String)
    ], MenuLink.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name_ar" }),
        __metadata("design:type", String)
    ], MenuLink.prototype, "name_a", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "link" }),
        __metadata("design:type", String)
    ], MenuLink.prototype, "link", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "icon" }),
        __metadata("design:type", String)
    ], MenuLink.prototype, "icon", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "active" }),
        __metadata("design:type", Boolean)
    ], MenuLink.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_by" }),
        __metadata("design:type", String)
    ], MenuLink.prototype, "updated_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], MenuLink.prototype, "updated_on", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "parent_id" }),
        __metadata("design:type", String)
    ], MenuLink.prototype, "parent_id", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: "parent_id" }),
        (0, typeorm_1.ManyToOne)(function (type) { return MenuLink_1; }),
        __metadata("design:type", MenuLink)
    ], MenuLink.prototype, "parent", void 0);
    MenuLink = MenuLink_1 = __decorate([
        (0, typeorm_1.Entity)("menu_link")
    ], MenuLink);
    return MenuLink;
}());
exports.MenuLink = MenuLink;
