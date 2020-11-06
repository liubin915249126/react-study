import React from "react";
import UploadComponent from "./Upload.jsx";
import "./index.less";

export default class UploadTest extends React.Component {
  render() {
    return (
        <div className="uploadTest">
          <div className="upload-inner">
            <div>优惠列表主图</div>  
            <UploadComponent />
          </div>
          <div className="upload-inner">
            <div>优惠列表背景图</div>  
            <UploadComponent />
          </div>
        </div>
      );
  }
};