import promisesAplusTests from "promises-aplus-tests";
import { MyPromise } from "../index";

MyPromise.deferred = function () {
  const ret: any = {};
  ret.promise = new MyPromise(function (resolve, reject) {
    ret.resolve = resolve;
    ret.reject = reject;
  });
  return ret;
};

promisesAplusTests(MyPromise, (err) => {
  console.log(err);
});
