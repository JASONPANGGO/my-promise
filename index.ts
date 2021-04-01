export class MyPromise {
  private status: "PENDING" | "FULLFILLED" | "REJECTED" = "PENDING";
  private result: any;
  private reason: any;

  constructor(executor?: Function) {
    if (executor) executor(this.resolve, this.reject);
  }

  public static resolve(result: any) {
    const promise: MyPromise = new MyPromise();
  }

  private resolve = (result): MyPromise => {
    if (this.status !== "PENDING") return this;
    this.status = "FULLFILLED";
    this.result = result;
    return this;
  };

  private reject = (reason) => {
    if (this.status !== "PENDING") return this;
    this.status = "REJECTED";
    this.reason = reason;
    return this;
  };

  public then(onfullfilled?: Function, onrejected?: Function) {
    if (this.status !== "FULLFILLED") return this;
    if (onfullfilled) {
      onfullfilled(this.result);
    }
    if (onrejected) {
      onrejected(this.reason);
    }
    return this;
  }

  public catch(onrejected?: Function) {
    if (this.status !== "REJECTED") return this;
    onrejected(this.reason);
    return this;
  }

  public static deferred: Function
}
