import React, { useState, useEffect, useCallback } from 'react'

import './index.less'

const Wordle = ({ testValue }) => {
  const [input, setInput] = useState({})
  const [curRow, setCurRow] = useState(0)
  const [curCol, setCurCol] = useState(0)

  const keyDownHandler = useCallback(
    (e) => {
      const { key, keyCode } = e
      const value = key.toUpperCase()
      if (keyCode >= 65 && keyCode <= 90 && curCol <= 5) {
        let className = 'gray'
        if (testValue.includes(value)) {
          className = 'yellow'
          if (testValue.indexOf(value) === curCol) {
            className = 'green'
          }
        }
        setInput((input) => ({
          ...input,
          [`${curRow}-${curCol}`]: {
            className,
            value,
          },
        }))
        setCurCol((curCol) => curCol + 1)
      }

      if (keyCode == 13) {
        setCurRow((curRow) => curRow + 1)
        setCurCol(() => 0)
      }
    },
    [testValue, curCol, curRow]
  )
  console.log(111, curCol, curRow, input)
  useEffect(() => {
    document.onkeydown = keyDownHandler
  }, [keyDownHandler])

  return (
    <div className="wordleWrap">
      {new Array(6).fill(null).map((item, index) => (
        <div className="wordleRow">
          {new Array(5).fill(null).map((innerItem, innerIndex) => (
            <div
              className={`wordleItem ${
                input[`${index}-${innerIndex}`]?.className
              }`}
            >
              {input[`${index}-${innerIndex}`]?.value}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Wordle
