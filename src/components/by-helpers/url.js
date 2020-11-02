export const getQueryParams = (location = {}) => {
  const { search } = location;
  if (!search) return {};

  return search.slice(1).split('&').reduce((prev, cur) => {
    const [key, value] = cur.split('=');
    return { ...prev, [key]: decodeURIComponent(value) };
  }, {});
};

export const getUrlObject = (urlStr) => {
  let urlObject;
  try {
    urlObject = new URL(urlStr);
  } catch (err) {
    // eslint-disable-next-line
    console.warn(err);
  }

  return urlObject;
};

export const getMainDomainName = (domain = '') => domain.split('.').slice(-2).join('.');

export const isFromInternalByMainDomain = (hostnameA = '', hostnameB = '') => {
  const domainA = getMainDomainName(hostnameA);
  const domainB = getMainDomainName(hostnameB);
  if (domainA === domainB) return true;
  return false;
};
