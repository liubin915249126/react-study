import React from 'react';
import {MobxTest} from './mobxtest';
import {MobxDispatch} from './mobxdispatch';

class MobxIndex extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div className="mobxwrap">
            <MobxTest />
            <MobxDispatch />
        </div>)
    }
}
export default MobxIndex