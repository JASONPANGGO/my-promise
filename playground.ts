import { MyPromise } from "./index";
console.log("------ MyPromise -------");

const p = new MyPromise((resolve, reject) => {
  reject(2);
})
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });

console.log("------ Promise -----");

const q = new Promise((resolve, reject) => {
  reject(2);
})
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
