import React, { useState } from 'react';

import usePatchElement from './patchElements';
import Confirm from './confirm'

const useModal = () => {
  const [elements, patchElement] = usePatchElement([]);
  const render = (props) => {
    patchElement(Confirm({...props,isPortal:true}))
  }
  return [elements, render];
};

export default useModal;
