import React from 'react';
import {Row,Col} from 'antd'

import Pub from './Pub'
import Sub from './Sub'
import Proxy from './proxy'

export default class PubSub extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Row>
              <Col span="8">
                <Pub></Pub>
                <Sub></Sub>
              </Col>
              <Col span="8">
                <Proxy/>
              </Col>
            </Row>
        )
    }
}