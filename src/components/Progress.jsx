import React from 'react';

import './progress.less';
class Progress extends React.Component{
   constructor(props){
       super(props)
   }
   render(){
       return (<div className="progress-wrap">
           <svg viewBox="0 0 100 100">
               <path className="ant-progress-circle-trail" 
                    d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" 
                    stroke="#f3f3f3" strokeWidth="6" fillOpacity="0" 
                    ></path>
               <path className="ant-progress-circle-path" 
                    d="M 50,50 m 0,-47 a 47,47 0 1 0 0,94 a 47,47 0 1 0 0,-94" 
                    strokeLinecap="round" stroke="#108ee9" strokeWidth="6" fillOpacity="0" 
                    ></path>
            </svg >
           <span className="progress-text">0%</span>
        </div >)
   }
}
export { Progress}