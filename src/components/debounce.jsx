import React, { useState } from 'react'

const Debounce = () => {
  const [value, setValue] = useState('')

  const changeValue = (e, flag) => {
    if (flag) {
      let timer
      clearTimeout(timer)
      timer = setTimeout(() => {
        console.log(222, e, flag)
        setValue(e.target.value)
      }, 500)
    }
  }

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          changeValue(e, true)
        }}
      />
      {`${value}dddd`}
    </div>
  )
}

export default Debounce
