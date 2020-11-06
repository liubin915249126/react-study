import React from "react";
import { Upload,Icon } from "antd";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default class UploadCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
    };
  }
  beforeUpload = (file) => {
    // Get this url from response in real world.
    getBase64(file, (imageUrl) =>
      this.setState({
        imageUrl,
      })
    );
  };
  onRemove() {
    this.setState({
      imageUrl: "",
    });
  }
  render() {
    const { imageUrl } = this.state;
    return (
      <>
        {imageUrl ? (
          <div className="img-wrap">
            <Icon type="delete" onClick={() => this.onRemove()} />
            <img src={imageUrl} />
          </div>  
        ) : (
          <Upload
            maxCount={1}
            onRemove={this.onRemove}
            beforeUpload={this.beforeUpload}
          >
            <div className="uploader">
              <div>
                <div>+</div>
                <div>上传</div>
              </div>
            </div>
          </Upload>
        )}

        <div>支持jpg,jpeg,png,大小不超过5M,尺寸宽1920</div>
      </>
    );
  }
}
