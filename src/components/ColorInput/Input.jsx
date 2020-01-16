import React from 'react'

const Input = ({ color, stateColorChange, preStateColorChange }) => (
  <input
    type='text'
    className='color-input'
    value={color}
    onChange={e => {
      stateColorChange(e.target.value)
      preStateColorChange(e.target.value)
    }}
  />
)

export default Input
