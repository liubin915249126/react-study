import * as React from 'react';

export default function usePatchElement() {
  const [elements, setElements] = React.useState([]);

  function patchElement(element) {
    // append a new element to elements (and create a new ref)
    setElements(originElements => [...originElements, element]);

    // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect
    return () => {
      setElements(originElements => originElements.filter(ele => ele !== element));
    };
  }

  return [elements, patchElement];
}
