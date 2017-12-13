import React from 'react';

class Tooltip extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props)
    }
    componentWillReceiveProps(nextProps){
       
    }
    render(){
        return this.props.children
    }
}
export default Tooltip;