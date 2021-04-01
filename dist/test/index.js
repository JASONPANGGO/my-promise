"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_aplus_tests_1 = __importDefault(require("promises-aplus-tests"));
var index_1 = require("../index");
promises_aplus_tests_1.default(index_1.MyPromise, function (err) {
    console.log(err);
});
