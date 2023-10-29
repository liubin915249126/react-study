import React, { useState, useEffect } from 'react'
import { Button } from 'antd'

const Hook = () => {
  const [data, setData] = useState(1)
  let timer
  useEffect(() => {
    timer = setInterval(() => {
      console.log(111, data)
    }, 1000)
    return () => clearInterval(timer)
  }, [data])
  return (
    <div>
      <Button
        onClick={() => {
          setData(2)
        }}
      >
        change
      </Button>
    </div>
  )
}

export default Hook
