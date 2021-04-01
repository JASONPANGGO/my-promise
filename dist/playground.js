"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
console.log("------ MyPromise -------");
var p = new index_1.MyPromise(function (resolve, reject) {
    reject(2);
})
    .then(function (res) {
    console.log(res);
})
    .catch(function (res) {
    console.log(res);
});
console.log("------ Promise -----");
var q = new Promise(function (resolve, reject) {
    reject(2);
})
    .then(function (res) {
    console.log(res);
})
    .catch(function (res) {
    console.log(res);
});
