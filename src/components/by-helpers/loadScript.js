export function hasScript(url) {
  const scriptsArr = Array.from(document.getElementsByTagName('script'));
  let has = false;
  for (let i = 0, len = scriptsArr.length; i < len; i += 1) {
    has = scriptsArr[i].src.replace('http:', 'https:') === url.replace('http:', 'https:');
    if (has) {
      break;
    }
  }
  return has;
}

// name 当前资源名称
export const loadScript = ({
  url, async, name, ...options
}) => new Promise((resolve) => {
  if (hasScript(url)) resolve({ name });
  const body = document.getElementsByTagName('body')[0];
  const script = document.createElement('script');
  script.async = !!async;
  script.src = url;
  Object.assign(script, options);
  body.appendChild(script);
  // 这里ie不支持onload事件，若未来支持IE需要修改
  script.onload = () => {
    resolve({ name });
  };
});
