import React from "react";
import { Button } from "antd";

export default class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      val: {
        info: {
          name: "old",
        },
      },
    };
  }
  handleClick() {
    this.setState(
      {
        val: {
          ...this.state.val,
          info: {
            name: "new",
          },
        },
      },
      () => {
        console.log("111", this.state.val);
      }
    );
  }
  render() {
    console.log("render");
    return (
      <div>
        {this.state.val.info.name}
        <Button type="primary" onClick={() => this.handleClick()}>
          state测试
        </Button>
      </div>
    );
  }
}
