import { useRef } from 'react';

const useDomRoot = (domId) => {
  const domRoot = useRef(null);

  if (domRoot.current) return domRoot.current;

  let container = document.querySelector(`#${domId}`);

  if (container) return container;

  container = document.createElement('div');
  container.id = domId;
  document.body.append(container);
  domRoot.current = container;

  return domRoot.current;
};

export default useDomRoot;
