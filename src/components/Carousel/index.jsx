import React, { useRef, useState } from 'react'
require('./index.less')

const Carousel = ({ num = 3 }) => {
  const sliderListRef = useRef()
  const timerRef = useRef()
  const curIndex = useRef(0)
  const moveTo = (index) => {
    if (sliderListRef.current) {
      sliderListRef.current.style.transform = `translateX(-${index * 500}px)`
      sliderListRef.current.style.transition = '.5s'
      curIndex.current = index
    }
  }
  const prevClick = () => {
    if (curIndex.current === 0) {
      sliderListRef.current.style.transition = 'none'
      sliderListRef.current.style.transform = `translateX(-${
        curIndex.current * 500
      }px)`
      sliderListRef.current.clientHeight
      moveTo(num - 1)
    } else {
      moveTo(curIndex.current - 1)
    }
  }
  const nextClick = () => {
    if (curIndex.current === num - 1) {
      sliderListRef.current.style.transition = 'none'
      sliderListRef.current.style.transform = 'translateX(500px)'
      sliderListRef.current.clientHeight
      moveTo(0)
    } else {
      moveTo(curIndex.current + 1)
    }
  }
  return (
    <div className="container">
      <div className="slider">
        <div
          className="sliderWrap"
          style={{ width: `${(num + 1) * 500}px` }}
          ref={sliderListRef}
        >
          {new Array(num).fill(null).map((item, index) => (
            <div>{index + 1}</div>
          ))}
          <div>1</div>
        </div>
      </div>
      <div className="left" onClick={prevClick}>
        left
      </div>
      <div className="right" onClick={nextClick}>
        right
      </div>
      <div className="dots">
        {new Array(num).fill(null).map((item, index) => (
          <div onClick={() => moveTo(index)}>{index + 1}</div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
