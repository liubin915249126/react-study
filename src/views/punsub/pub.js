import React from 'react';
import {Button} from 'antd';

import store from '@/pub-sub/store';

export default class Pub extends React.Component{
    constructor(props){
        super(props);
    }
    pub(){
        store.dispatch('addBook',{bookid: 203});
    }
    render(){
        return (
            <div>
                <Button onClick={() => { this.pub()}}>发布</Button>
            </div>
        )
    }
}