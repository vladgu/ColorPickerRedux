import React, { useState, useEffect } from 'react'

import RangePickerItem from './RangePickerItem'

const RangePicker = ({ currentColor, stateColorChange, preStateColorChange }) => {
  const r = parseInt(currentColor.replace('#', '').substring(0, 2), 16)
  const g = parseInt(currentColor.replace('#', '').substring(2, 4), 16)
  const b = parseInt(currentColor.replace('#', '').substring(4, 6), 16)

  const rgbToHex = rgb => {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    const hex = color => `0${parseInt(color).toString(16)}`.slice(-2)
    return `#${hex(rgb[1])}${hex(rgb[2])}${hex(rgb[3])}`
  }

  const [red, setRed] = useState(r)
  const [green, setGreen] = useState(g)
  const [blue, setBlue] = useState(b)

  useEffect(() => {
    preStateColorChange(rgbToHex(`rgb(${red},${green},${blue})`))
  })

  return (
    <>
      <RangePickerItem letter={'R'} color={red} setColor={setRed} />
      <RangePickerItem letter={'G'} color={green} setColor={setGreen} />
      <RangePickerItem letter={'B'} color={blue} setColor={setBlue} />
      <div className='buttons-wrapper'>
        <div
          className='cancel-button'
          onClick={e => {
            stateColorChange(currentColor)
            setRed(r)
            setGreen(g)
            setBlue(b)
          }}>
          Cancel
        </div>
        <div className='ok-button' onClick={() => stateColorChange(rgbToHex(`rgb(${red},${green},${blue})`))}>
          Ok
        </div>
      </div>
    </>
  )
}
export default RangePicker
