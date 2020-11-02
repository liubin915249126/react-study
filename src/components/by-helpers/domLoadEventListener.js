const domLoadEventListener = (callback) => {
  if (typeof callback !== 'function') return;
  if (document.readyState === 'complete') {
    callback();
  } else {
    window.addEventListener('load', callback, false);
  }
};

export default domLoadEventListener;
