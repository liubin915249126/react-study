import Emitter from './emitter'
class AbortSignal extends Emitter {
    constructor() {
      super();
      this.aborted = false;
    }
    toString() {
      return '[AbortSignal]';
    }
  }
  
  class AbortController {
    constructor() {
    //   super();
      this.signal = new AbortSignal();
    }
    abort() {
      this.signal.aborted = true;
      this.signal.dispatchEvent('abort');
    };
    toString() {
      return '[AbortController]';
    }
  }
export {AbortController,AbortSignal}