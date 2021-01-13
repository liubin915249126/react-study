import React, { useState } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import RenderContent from "./renderContent";
import RenderModal from "../ByModal/renderModal";

const modalContainers = [];
const destroyFns = [];
let uuid = 0;

const Confirm = ({props}) => {
  const { innerClass, isPortal, ...others } = props || {};
  uuid += 1;
  const confirmProps = {
    cancelText: "取消",
    confirmText: "确认",
    ...others,
    showConfirm: true,
    showCancel: true,
    showClose: true,
    showFoot: true,
  };
  const div = document.createElement("div");
  document.body.appendChild(div);
  modalContainers.push(div);
  const destroy = () => {
    const currentIndex = modalContainers.findIndex(
      (container) => container === div
    );
    const currentDiv = modalContainers.splice(currentIndex, 1)[0];
    if (!currentDiv) {
      return;
    }
    ReactDOM.unmountComponentAtNode(currentDiv);
    if (currentDiv && currentDiv.parentNode) {
      currentDiv.parentNode.removeChild(currentDiv);
    }
  };
  destroyFns.push(destroy);
  const containerClass = classNames("by-dialog", innerClass);
  const modal = (
    <RenderModal
      key={`modal-${uuid}`}
      innerClass={containerClass}
      open={true}
      {...others}
    >
      <RenderContent
        destroy={() => {
          destroy();
        }}
        {...confirmProps}
      />
    </RenderModal>
  );
  if(isPortal){
    return ReactDOM.createPortal(modal, div);
  }
  ReactDOM.render(modal, div);
};

export const destroyAll = () => {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};

export default Confirm;