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
  handleClick1(){
    new Promise((resolve, reject) =>{
      resolve()
    }).then(()=>{
      this.setState({done:true})
      console.log(111, this.state.done)
    }).then(()=>{
      console.log(222, this.state.done)
    })
  }
  render() {
    console.log("render");
    return (
      <div>
        {this.state.val.info.name}
        <Button type="primary" onClick={() => this.handleClick()}>
          state测试
        </Button>
        <Button type="primary" onClick={() => this.handleClick1()}>
          setSync
        </Button>
      </div>
    );
  }
}
