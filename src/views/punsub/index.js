import React from 'react';

import Pub from './Pub'
import Sub from './Sub'

export default class PubSub extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
              <Pub></Pub>
              <Sub></Sub>
            </div>
        )
    }
}