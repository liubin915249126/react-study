const  modalProps = require ('../ByModal');


function destroy() {
    const container = modalProps.container;
    debugger;
    ReactDom.unmountComponentAtNode(container);
    if (container && container.parentNode) {
        container.parentNode.removeChild(container);
    }
    return null;
  }


export const openFun = (callback)=>{
    if (!!callback
    && (typeof callback === 'object' || typeof callback === 'function')) {
      const promiseResult = callback() || {};
      if (typeof promiseResult.then === 'function') {
        promiseResult.finally(() => {
          destroy();
        });
      } else {
        destroy();
      }
    } else {
      destroy();
    }
  }