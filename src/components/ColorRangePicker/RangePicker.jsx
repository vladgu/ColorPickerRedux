import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import RangePickerItem from './RangePickerItem'
import { setValue, setRGBValue } from '../../actions'

const RangePicker = ({ value, setValue, setRGBValue }) => {
  const r = parseInt(value.replace('#', '').substring(0, 2), 16)
  const g = parseInt(value.replace('#', '').substring(2, 4), 16)
  const b = parseInt(value.replace('#', '').substring(4, 6), 16)

  const rgbToHex = rgb => {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    const hex = color => `0${parseInt(color).toString(16)}`.slice(-2)
    return `#${hex(rgb[1])}${hex(rgb[2])}${hex(rgb[3])}`
  }

  const [red, setRed] = useState(r)
  const [green, setGreen] = useState(g)
  const [blue, setBlue] = useState(b)

  useEffect(() => {
    setRGBValue(rgbToHex(`rgb(${red},${green},${blue})`))
  })

  return (
    <>
      <RangePickerItem letter={'R'} color={red} setColor={setRed} />
      <RangePickerItem letter={'G'} color={green} setColor={setGreen} />
      <RangePickerItem letter={'B'} color={blue} setColor={setBlue} />
      <div className='buttons-wrapper'>
        <div
          className='cancel-button'
          onClick={() => {
            setValue(value)
            setRGBValue(value)
            setRed(r)
            setGreen(g)
            setBlue(b)
          }}>
          Cancel
        </div>
        <div
          className='ok-button'
          onClick={() => {
            setValue(rgbToHex(`rgb(${red},${green},${blue})`))
            setRGBValue(rgbToHex(`rgb(${red},${green},${blue})`))
          }}>
          Ok
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ setValues }) => {
  return {
    value: setValues.value,
  }
}

const mapDispatchToProps = {
  setValue,
  setRGBValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(RangePicker)
