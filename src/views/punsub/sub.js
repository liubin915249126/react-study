import React from 'react';

import store from '@/pub-sub/store';

export default class Sub extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookList: []
        }
    }
    componentDidMount(){
        store.events.subscribe('stateChange', (params) => {
            this.setState({
              bookList: params.bookList
            });
        });
    }
    render(){
        const {bookList} = this.state;
        return (
            <div>
              订阅  
              {bookList.map((book=><div>{book.bookid}</div>))}
            </div>
        )
    }
}