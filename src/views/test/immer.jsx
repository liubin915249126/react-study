import React from 'react';
import { Button } from 'antd';
import { produce } from 'immer'
import { shallowEqual } from '@/utils/utils'

export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            done: false,
            val: {
              name: 'old'
            },
          };
    }
    handleClick(){
        const newState = produce(this.state, (draft) => {
            draft.val.name = 'new';
        });
        console.log(newState, this.state, shallowEqual(newState, this.state))
        console.log(newState.val === this.state.val)
        this.setState(newState);  
    }
    render(){
        console.log('render')
        return (
            <div>
               {this.state.val.name}  
               <Button type="primary" onClick={()=>this.handleClick()}>immer测试</Button>
            </div>
        )
    }
}