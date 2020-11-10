export const openFun = ({callback,destroy}) => {
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