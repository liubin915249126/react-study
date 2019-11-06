export default class Emitter {
    constructor() {
      this.listeners = {};
    }
    dispatchEvent = (type, params) => {
      const handlers = this.listeners[type] || [];
      for(const handler of handlers) {
        handler(params);
      }
    }
    addEventListener = (type, handler) => {
      const handlers = this.listeners[type] || (this.listeners[type] = []);
      handlers.push(handler);
    }
    removeEventListener = (type, handler) => {
      const handlers = this.listeners[type] || [];
      const idx = handlers.indexOf(handler);
      if(idx !== -1) {
        handlers.splice(idx, 1);
      }
      if(handlers.length === 0) {
        delete this.listeners[type];
      }
    }
  }
  