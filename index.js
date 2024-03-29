"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AppExpress_1 = __importDefault(require("./apex/AppExpress"));
var typeorm_1 = require("typeorm");
var Config = __importStar(require("./utils/Config"));
var Log_1 = require("./utils/Log");
//import { main } from "./sync";
var http = require("http");
var Store_1 = require("./utils/Store");
var SysService_1 = require("./SysService");
var SyncMainService_1 = require("./app/task/SyncMainService");
var port = 5002;
var TINTING_STORE_ID = process.env ? process.env.TINTING_STORE_ID : null;
var count = 0;
Config.setEnvConfig();
process.env.TZ = "UTC";
var conn = null;
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    var appExpress, express, httpServer, CallSync, lastSyncDate, diff, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                Log_1.log.info(JSON.stringify(Config.dbOptions));
                if (!(!conn || !conn.isConnected)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, typeorm_1.createConnection)(Config.dbOptions)];
            case 1:
                // WatcherInit();
                conn = _a.sent();
                Log_1.log.debug("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                return [4 /*yield*/, Config.DbEnvConfig()];
            case 2:
                _a.sent();
                Log_1.log.debug("DbEnvConfig Completed");
                Log_1.log.debug("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                _a.label = 3;
            case 3:
                Log_1.log.debug(" ************************************** " + conn.isConnected);
                if (conn && conn.isConnected) {
                    appExpress = new AppExpress_1.default();
                    express = appExpress.express;
                    httpServer = http.Server(express);
                    // const io = require("socket.io")(httpServer);
                    // io.on("connection", function(socket: any) {
                    //   console.log("Client connected!");
                    //   socket.on("message", function(data: any) {
                    //     console.log("Sending update!");
                    //     socket.emit("update", "Working!");
                    //   });
                    // });
                    express.use("/api", function (req, res, next) {
                        // if (TINTING_STORE_ID) {
                        //   let diff = syncTimeDiff();
                        //   log.warn("sync Time Diff:", diff);
                        //   if (diff > 5) {
                        //     log.error("----->: sync time start : " + diff);
                        //     sync();
                        //   }
                        // }
                        next();
                    });
                    httpServer.listen(port, function (err) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (err) {
                                Log_1.log.error(err);
                                throw err;
                            }
                            console.log("\n        ***********************************************\n                server is listening on ".concat(port, "\n        ***********************************************\n"));
                            return [2 /*return*/, Log_1.log.log("info", "\n                    ***********************************************\n                            server is listening on ".concat(port, "\n                    ***********************************************\n          "))];
                        });
                    }); });
                    try {
                        CallSync = function () { return __awaiter(void 0, void 0, void 0, function () {
                            var syncData;
                            return __generator(this, function (_a) {
                                try {
                                    syncData = new SyncMainService_1.SyncMainService();
                                    // await syncData.runSync();
                                    // }
                                }
                                catch (err) {
                                    Log_1.log.error("SyncService  Error: ");
                                    Log_1.log.error(err);
                                }
                                return [2 /*return*/];
                            });
                        }); };
                        if (TINTING_STORE_ID) {
                            CallSync();
                        }
                        Log_1.log.info("TINTING_STORE_ID: ".concat(TINTING_STORE_ID));
                        if (TINTING_STORE_ID) {
                            lastSyncDate = null;
                            diff = null;
                            (0, Store_1.StoreInIt)();
                            // sync();
                            // const updateService = new UpdateService();
                            // updateService.initializeUpdater();
                        }
                    }
                    catch (error) {
                        Log_1.log.error("Sync Error");
                        Log_1.log.error(error);
                    }
                }
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                Log_1.log.error(error_1);
                setTimeout(function () {
                    if (count <= 5) {
                        count += 1;
                        Log_1.log.error("================ " + count);
                        run();
                    }
                    else {
                        Log_1.log.error(error_1);
                    }
                }, 5000);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
run();
// var sync = async () => {
//   const child_process = require("child_process");
//   const fs = require("fs");
//   let syncFileUpdate = `${__dirname}/update.ts`;
//   syncFileUpdate = fs.existsSync(syncFileUpdate) ? `${__dirname}/update.ts` : `${__dirname}/update.js`;
//   child_process.fork(syncFileUpdate);
//   log.warn("syncFileUpdate:", syncFileUpdate);
//   // let macAddress = {
//   //   systemAddress: await App.getMacAddress(),
//   //   storeId: TINTING_STORE_ID,
//   //   selectAddress: await SysService.SelectedMacAddress(TINTING_STORE_ID, log),
//   // };
//   // console.log(JSON.stringify(macAddress));
//   // log.warn(JSON.stringify(macAddress));
// };
var syncTimeDiff = function () {
    try {
        var lastSyncDate = (0, Store_1.getItem)("syncdate", "index -> cron");
        Log_1.log.warn("Last sync time: ", lastSyncDate);
        lastSyncDate = new Date(lastSyncDate);
        var diff = (new Date().getTime() - lastSyncDate.getTime()) / 60000;
        return diff;
    }
    catch (error) {
        Log_1.log.error(error);
        (0, Store_1.StoreInIt)();
        return 0;
    }
};
process.on("uncaughtException", function (err) {
    Log_1.log.error("Caught exception: " + err);
    setTimeout(function () {
        if (count <= 5) {
            count += 1;
            Log_1.log.error("================ " + count);
            run();
        }
        else {
            Log_1.log.error("======= ERROR STORE ID ========= " + TINTING_STORE_ID);
            if (TINTING_STORE_ID) {
                try {
                    Log_1.log.error("======= ERROR ========= ");
                    var errorObj = err;
                    Log_1.log.error(JSON.stringify(errorObj));
                    Log_1.log.error("ERROR-CODE :: " + errorObj.code);
                    Log_1.log.error("======== ERROR ======== ");
                    if (errorObj && errorObj.code == "57P03") {
                        SysService_1.SysService.ResetService(Log_1.log);
                    }
                }
                catch (error) {
                    Log_1.log.error("======= CATCH ERROR ========= ");
                    Log_1.log.error(error);
                }
            }
            Log_1.log.error(err);
        }
    }, 5000);
});
