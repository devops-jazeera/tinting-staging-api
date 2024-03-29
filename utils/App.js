"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var jwt = __importStar(require("jsonwebtoken"));
var Handlebars = __importStar(require("handlebars"));
var nodemailer_1 = require("nodemailer");
var Config = __importStar(require("./Config"));
var Log_1 = require("./Log");
var bcryptjs_1 = require("bcryptjs");
var RawQuery_1 = require("../app/common/RawQuery");
var Props_1 = require("../constants/Props");
var randomstring_1 = require("randomstring");
var dns = require("dns").promises;
var App = /** @class */ (function () {
    function App() {
    }
    App.UniqueCode = function () {
        var time = new Date().getTime();
        if (this.uniqueId == time) {
            while (new Date().getTime() < 1 + time) { }
            time = new Date().getTime();
        }
        this.uniqueId = time;
        return time.toString(36).toUpperCase();
    };
    App.UniqueNumber = function () {
        var time = new Date().getTime();
        if (this.uniqueId == time) {
            while (new Date().getTime() < 1 + time) { }
            time = new Date().getTime();
        }
        this.uniqueId = time;
        return time.toString(36).toUpperCase();
    };
    App.convertUTCDateToLocalDate = function (date, timezoneoffset) {
        var dateString = "";
        // console.log(date.getTimezoneOffset(), timezoneoffset)
        // console.log(date.getTimezoneOffset() + "" !== timezoneoffset)
        // if (date.getTimezoneOffset() + "" !== timezoneoffset) {
        if (timezoneoffset) {
            var diffseconds = timezoneoffset * 60;
            var hours = parseInt(diffseconds / 3600 + "");
            var minutes = (diffseconds / 60) % 60;
            var seconds = diffseconds % 60;
            var yearOrg = date.getFullYear();
            var dateOrg = date.getDate();
            var hoursOrg = date.getHours();
            var minutesOrg = date.getMinutes();
            var secondsOrg = date.getSeconds();
            date.setDate(dateOrg);
            date.setYear(yearOrg);
            date.setHours(hoursOrg - hours);
            date.setMinutes(minutesOrg - minutes);
            date.setSeconds(secondsOrg - seconds);
        }
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hr = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        month < "10" ? (month = "0" + month) : null;
        day < "10" ? (day = "0" + day) : null;
        hr < "10" ? (hr = "0" + hr) : null;
        min < "10" ? (min = "0" + min) : null;
        sec < "10" ? (sec = "0" + sec) : null;
        dateString += date.getFullYear() + "/" + month + "/" + day + " " + hr + ":" + min + ":" + sec;
        // console.log("dateString===========>", dateString)
        return dateString;
    };
    App.uuidv4 = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    App.UniqueID = function (name, type) {
        var str = "";
        if (type) {
            str = type + "_" + name;
        }
        else {
            str = name + "_" + App.UniqueNumber();
        }
        str = str.replace(App.NON_ALPHA_NUMARIC, "_");
        str = str.substr(0, 128);
        return str.toUpperCase();
    };
    App.DateNow = function () {
        var d1 = new Date();
        var d3 = new Date(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds(), d1.getUTCMilliseconds());
        return d3.toISOString();
    };
    App.Send = function (req, res, promise) {
        var respObj = {};
        promise
            .then(function (data) {
            respObj.status = 1;
            respObj.data = data;
            res.jsonp(respObj);
        })
            .catch(function (err) {
            Log_1.log.info(err);
            respObj.status = 0;
            respObj.error = err;
            res.jsonp(respObj);
        });
    };
    App.HtmlRender = function (fileName, data) {
        var source = path.join(__dirname, "/../assets/templates/" + fileName + ".html");
        // log.info("Html Source: " + source);
        source = fs.readFileSync(source, "utf8");
        var template = Handlebars.compile(source);
        data = JSON.parse(JSON.stringify(data));
        var result = template(data);
        // log.info(result);
        return result;
    };
    // public static Print(template: any, res: any, promise: any) {
    //   promise
    //     .then((data: any) => {
    //       template = path.join(
    //         __dirname,
    //         "/../../docs/templates/" + template + ".html"
    //       );
    //       template = fs.readFileSync(template, "utf8");
    //       data = JSON.parse(JSON.stringify(data));
    //       //log.info(data.data);
    //       jsreport
    //         .render({
    //           template: {
    //             engine: "handlebars",
    //             content: template,
    //             recipe: "html"
    //           },
    //           data: data.data
    //         })
    //         .then((out: any) => {
    //           log.info(out.stream);
    //           out.stream.pipe(res);
    //         })
    //         .catch((err: any) => {
    //           var respObj: any = {};
    //           log.info(err);
    //           respObj.status = 0;
    //           respObj.error = err;
    //           res.jsonp(respObj);
    //         });
    //     })
    //     .catch((err: any) => {
    //       var respObj: any = {};
    //       log.info(err);
    //       respObj.status = 0;
    //       respObj.error = err;
    //       res.jsonp(respObj);
    //     });
    // }
    App.EncodeJWT = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RawQuery_1.RawQuery.ConstData("TOKEN")];
                    case 1:
                        token = _a.sent();
                        Props_1.Props._TOKEN = token.token;
                        Props_1.Props.EXPIRE_TIME = token.expiresAt;
                        return [2 /*return*/, jwt.sign(data, Props_1.Props._TOKEN, { expiresIn: Props_1.Props.EXPIRE_TIME })];
                }
            });
        });
    };
    App.DecodeJWT = function (token) {
        if (token && token != null && token != "null") {
            try {
                var baseAuth = Buffer.from(token, "base64");
                if (baseAuth && baseAuth.length < 100) {
                    baseAuth = baseAuth.toString();
                    var _a = baseAuth.split(":"), user = _a[0], password = _a[1];
                    // console.log(token, user, password, Config.baseAuth);
                    if (user && password && user == Config.baseAuth.user && password == Config.baseAuth.password) {
                        return {
                            identity: {
                                id: Config.baseAuth.user,
                                vid: "own",
                                baseAuth: true,
                            },
                        };
                    }
                    else {
                        throw { name: "error", message: "Token is not valid" };
                    }
                }
                else {
                    token = token.includes(" ") ? token.replace("jwt ", "").replace("JWT ", "") : token;
                    var userInfo_1 = jwt.verify(token, Props_1.Props._TOKEN);
                    return userInfo_1;
                }
            }
            catch (err) {
                Log_1.log.error("--------- token error ------------->");
                Log_1.log.error(err);
                Log_1.log.error("<--------- token error -------------");
                return err;
            }
        }
        else {
            return null;
        }
    };
    App.generateOTP = function (otpLength) {
        var digits = "0123456789";
        // var otpLength = 6;
        var otp = "";
        for (var i = 1; i <= otpLength; i++) {
            var index = Math.floor(Math.random() * digits.length);
            otp = otp + digits[index];
        }
        return otp;
    };
    App.CreateEmailAccount = function () {
        if (!this.transport) {
            console.log(Config.mailOptions);
            this.transport = (0, nodemailer_1.createTransport)({
                host: Config.mailOptions.host,
                port: Config.mailOptions.port,
                secure: true,
                service: "gmail",
                requireTLS: false,
                auth: {
                    user: Config.mailOptions.user,
                    pass: Config.mailOptions.pass,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });
        }
        return this.transport;
    };
    App.ValildateUserAccess = function (data, baseAuth) {
        // log.info(data);
        console.log(data);
        if (data) {
            if (data.name && data.message && data.name.lowercase().indexOf("error") > -1) {
                return false;
            }
            else {
                if (data.baseAuth != null) {
                    if (data.baseAuth == true && baseAuth == true) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return true;
                }
            }
        }
        else {
            return false;
        }
    };
    App.ValildateBaseAuth = function (data, baseAuth) {
        console.log("Base Authorization ", data);
        if (data) {
            if (data.name && data.message && data.name.lowercase().indexOf("error") > -1) {
                return false;
            }
            else {
                if (data.baseAuth != null) {
                    if (data.baseAuth == true && baseAuth == true) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return true;
                }
            }
        }
        else {
            return false;
        }
    };
    App.DaysBack = function (date, backValue, isDays) {
        if (isDays === void 0) { isDays = true; }
        date = new Date(date);
        if (isDays) {
            date.setDate(date.getDate() - backValue);
        }
        else {
            date.setMilliseconds(date.getMilliseconds() - backValue);
        }
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
        return date;
    };
    App.DaysDiff = function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        var diff = (t2 - t1) / (24 * 3600 * 1000);
        return parseInt(diff);
    };
    App.SyncMinDiff = function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        var diff = (t2 - t1) / (3600 * 1000);
        console.log(diff);
        return parseInt(diff);
    };
    App.RefreshJWT = function (data) {
        return jwt.sign(data, Config.jwtOtions.token, { expiresIn: Config.jwtOtions.expiresIn });
    };
    App.PrintLog = function (routerName, routerType, sessionInfo) {
        Log_1.log.info("".concat(new Date().toISOString(), " : ").concat(routerName, " :  ").concat(routerType, " : ").concat(JSON.stringify(sessionInfo)));
    };
    App.HashSync = function (data) {
        return (0, bcryptjs_1.hashSync)(data, 8);
    };
    App.HashCompareSync = function (param1, param2) {
        return (0, bcryptjs_1.compareSync)(param1, param2);
    };
    App.ArrayJoin = function (items, attr) {
        var attrs = [];
        console.log(items);
        items.forEach(function (element) {
            attrs.push(element[attr]);
        });
        return attrs.join(",");
    };
    App.SendMail = function (to, subject, htmlPage, renderData) {
        return __awaiter(this, void 0, void 0, function () {
            var transporter, Options;
            var _this = this;
            return __generator(this, function (_a) {
                transporter = App.CreateEmailAccount();
                Options = {
                    from: Config.mailOptions.from,
                    to: to,
                    subject: subject,
                    html: App.HtmlRender(htmlPage, {
                        data: renderData,
                    }),
                };
                return [2 /*return*/, new Promise(function (reslove, reject) {
                        transporter.sendMail(Options, function (err, info) {
                            console.log(info);
                            if (err) {
                                reject(err);
                            }
                            transporter.close();
                            _this.transport = null;
                            reslove({
                                message: "Mail sent successfully",
                            });
                        });
                    })];
            });
        });
    };
    App.unflatten = function (arr) {
        var tree = [];
        var mappedArr = {};
        var arrElem;
        var mappedElem;
        // First map the nodes of the array to an object -> create a hash table.
        for (var i = 0, len = arr.length; i < len; i++) {
            arrElem = arr[i];
            mappedArr[arrElem.id] = arrElem;
            mappedArr[arrElem.id]["children"] = [];
        }
        for (var id in mappedArr) {
            if (mappedArr.hasOwnProperty(id)) {
                mappedElem = mappedArr[id];
                // If the element is not at the root level, add it to its parent array of children.
                if (mappedElem.parentId) {
                    mappedArr[mappedElem["parentId"]]["children"].push(mappedElem);
                }
                // If the element is at the root level, add it to first level elements array.
                else {
                    tree.push(mappedElem);
                }
            }
        }
        return tree;
    };
    App.Sleep = function (millseconds) {
        App.SystemSleep(millseconds);
    };
    App.checkInternet = function () {
        return dns
            .lookup("google.com")
            .then(function () { return true; })
            .catch(function () { return false; });
    };
    App.getMacAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var address;
            return __generator(this, function (_a) {
                try {
                    address = require("address");
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            address(function (err, addrs) {
                                if (addrs && addrs.mac) {
                                    console.log(addrs.ip, addrs.ipv6, addrs.mac);
                                    // '192.168.0.2', 'fe80::7aca:39ff:feb0:e67d', '78:ca:39:b0:e6:7d'
                                    resolve(addrs.mac);
                                }
                                else {
                                    resolve("Not Found Mac Address");
                                }
                            });
                        })];
                }
                catch (err) {
                    return [2 /*return*/, Promise.resolve("Not Found Mac Address")];
                }
                return [2 /*return*/];
            });
        });
    };
    App.getItemNamesInSalesLines = function (salesLines, dao) {
        return __awaiter(this, void 0, void 0, function () {
            var itemIds, itemNames_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemIds = salesLines.map(function (line) { return line.itemid; });
                        if (!(itemIds.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, dao.findByItemIds(itemIds)];
                    case 1:
                        itemNames_1 = _a.sent();
                        salesLines.forEach(function (line, index) {
                            var name = itemNames_1.find(function (item) { return item.code == line.itemid; });
                            if (name) {
                                salesLines[index] = __assign(__assign({}, salesLines[index]), name);
                            }
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    App.RandomString = function (length, charset) {
        return (0, randomstring_1.generate)({ length: length, charset: charset });
    };
    App.uniqueId = 0;
    App.TOKEN_MESSAGE = "Please enter the token.";
    App.SAVED_SUCCESSFULLY = "Saved Successfully.";
    App.REMOVED_SUCCESSFULLY = "Removed Successfully.";
    App.INVALID_DATA = "Please enter valid data.";
    App.NON_ALPHA_NUMARIC = /[^\w\s]/g;
    App.transport = null;
    App.SystemSleep = require("system-sleep");
    App.generatePassword = function (passwordLength, useUpperCase, useNumbers, useSpecialChars) {
        if (passwordLength === void 0) { passwordLength = 7; }
        if (useUpperCase === void 0) { useUpperCase = true; }
        if (useNumbers === void 0) { useNumbers = true; }
        if (useSpecialChars === void 0) { useSpecialChars = true; }
        var chars = "abcdefghijklmnopqrstuvwxyz";
        var numberChars = "0123456789";
        var specialChars = '!"$%^&*()@';
        var usableChars = chars +
            (useUpperCase ? chars.toUpperCase() : "") +
            (useNumbers ? numberChars : "") +
            (useSpecialChars ? specialChars : "");
        var generatedPassword = "";
        for (var i = 0; i <= passwordLength; i++) {
            generatedPassword += usableChars[Math.floor(Math.random() * usableChars.length)];
        }
        return generatedPassword;
    };
    return App;
}());
exports.App = App;
