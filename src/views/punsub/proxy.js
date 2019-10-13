import React from 'react';
import {Button} from 'antd';
import {log} from '@/utils/proxy'

export default class Proxy extends React.Component{
    constructor(props){
        super(props);
    }
    @log
    test(args){
      
    }
    render(){
        return (
            <div>
                es6 proxy
                <Button type="primary" onClick={() => this.test(111)}>点击</Button> 
            </div>
        )
    }
}