import { AbortController, AbortSignal } from "../lib/abort-controller";

const abortControllers = []

if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
  // These are necessary to make sure that we get correct output for:
  // Object.prototype.toString.call(new AbortController())
  AbortController.prototype[Symbol.toStringTag] = "AbortController";
  AbortSignal.prototype[Symbol.toStringTag] = "AbortSignal";
}
const realFetch = fetch;
const abortableFetch = (input, init) => {
  console.log('input',input)
  const abortController = new AbortController();
  abortControllers.push(abortController)
  // console.log(2222,abortController,abortControllers)
  if (abortController) {
    const abortError = new Error("Aborted");
    abortError.name = "AbortError";
    abortError.isAborted = true;

    // Return early if already aborted, thus avoiding making an HTTP request
    if (abortController.aborted) {
      return Promise.reject(abortError);
    }
    // Turn an event into a promise, reject it once `abort` is dispatched
    const cancellation = new Promise((resolve, reject) => {
      abortController.signal.addEventListener(
        "abort",
        () => {
          console.log(1111,'abort')
          resolve({
            status:"401"
          });
        },
        { once: true }
      );
    });

    // delete init.signal;

    // Return the fastest promise (don't need to wait for request to finish)
    return Promise.race([cancellation, realFetch(input, init)]).then((res)=>{
      console.log('res',res)
      return Promise.resolve(res)
    }).catch((err)=>{
      console.log('err',err)
    });
  }

  // return realFetch(input, init);
};

export { abortableFetch, abortControllers };
