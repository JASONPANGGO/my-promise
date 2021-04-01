"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPromise = void 0;
var MyPromise = /** @class */ (function () {
    function MyPromise(executor) {
        var _this = this;
        this.status = "PENDING";
        this.resolve = function (result) {
            if (_this.status !== "PENDING")
                return _this;
            _this.status = "FULLFILLED";
            _this.result = result;
            return _this;
        };
        this.reject = function (reason) {
            if (_this.status !== "PENDING")
                return _this;
            _this.status = "REJECTED";
            _this.reason = reason;
            return _this;
        };
        if (executor)
            executor(this.resolve, this.reject);
    }
    MyPromise.resolve = function (result) {
        var promise = new MyPromise();
    };
    MyPromise.prototype.then = function (onfullfilled, onrejected) {
        if (this.status !== "FULLFILLED")
            return this;
        if (onfullfilled) {
            onfullfilled(this.result);
        }
        if (onrejected) {
            onrejected(this.reason);
        }
        return this;
    };
    MyPromise.prototype.catch = function (onrejected) {
        if (this.status !== "REJECTED")
            return this;
        onrejected(this.reason);
        return this;
    };
    MyPromise.prototype.deferred = function () {
        var ret = {};
        ret.promise = new MyPromise(function (resolve, reject) {
            ret.resolve = resolve;
            ret.reject = reject;
        });
        return ret;
    };
    return MyPromise;
}());
exports.MyPromise = MyPromise;
