import React from 'react';
import PopperJS from 'popper.js';
import styles from './index.less'

const Popover = ()=>{
  const init = ()=>{ 
    new PopperJS(
        document.querySelector('#reference'),
        document.querySelector('#wrap'), 
        {modifiers: {
            offset: { offset: '0, 10' },
        },placement: 'top'},
    )
  }  
  React.useEffect(()=>{
    init()
  },[]) 
  return <div className='by-popover__container'>
    <div id="reference">
      reference
    </div>
    <div id="wrap">
      <div className="by-popover__arrow" x-arrow />
      <div className="inner">
        wrap
      </div>
    </div>
  </div>
}

export default Popover