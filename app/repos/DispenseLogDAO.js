"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var BasesMaster_1 = require("../../entities/BasesMaster");
var DatabaseMaster_1 = require("../../entities/DatabaseMaster");
var Dealer_1 = require("../../entities/Dealer");
var DispenseLog_1 = require("../../entities/DispenseLog");
var DispenseLogDAO = /** @class */ (function () {
    function DispenseLogDAO() {
        this.dao = typeorm_1.getRepository(DispenseLog_1.DispenseLog);
    }
    DispenseLogDAO.prototype.search = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.find({
                            where: { syncstatus: 0 },
                            take: 100,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DispenseLogDAO.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = typeorm_1.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 12, 14, 16]);
                        if (!data.base) return [3 /*break*/, 5];
                        return [4 /*yield*/, queryRunner.manager.getRepository(BasesMaster_1.BasesMaster).save(data.base)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!data.dbMaster) return [3 /*break*/, 7];
                        return [4 /*yield*/, queryRunner.manager.getRepository(DatabaseMaster_1.DatabaseMaster).save(data.dbMaster)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        if (!data.dealer) return [3 /*break*/, 9];
                        return [4 /*yield*/, queryRunner.manager.getRepository(Dealer_1.Dealer).save(data.dealer)];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [4 /*yield*/, queryRunner.manager.getRepository(DispenseLog_1.DispenseLog).save(data)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 11:
                        _a.sent();
                        return [3 /*break*/, 16];
                    case 12:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 13:
                        _a.sent();
                        return [3 /*break*/, 16];
                    case 14: return [4 /*yield*/, queryRunner.release()];
                    case 15:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    DispenseLogDAO.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.findOne(id, {
                            join: {
                                alias: "dispenseLog",
                                innerJoinAndSelect: {},
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DispenseLogDAO.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.delete(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DispenseLogDAO.prototype.findOne = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.findOne(data, {
                            join: {
                                alias: "dispenseLog",
                                innerJoinAndSelect: {},
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return DispenseLogDAO;
}());
exports.DispenseLogDAO = DispenseLogDAO;
Object.seal(DispenseLogDAO);
