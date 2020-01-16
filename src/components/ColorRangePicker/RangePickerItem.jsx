import React from 'react'

const RangePickerItem = ({ letter, color, setColor }) => (
  <div
    className='color-range-picker-wrapper'
    onClick={e => {
      e.stopPropagation()
    }}>
    <p className='color-range-picker-paragraph'>{letter}</p>
    <input
      id={letter}
      type='range'
      min='0'
      max='255'
      step='1'
      className='color-range-picker'
      value={color}
      onChange={e => setColor(e.target.value)}
    />
    <p className='color-range-picker-rgb-paragraph'>{color}</p>
  </div>
)

export default RangePickerItem
