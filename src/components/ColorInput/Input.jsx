import React from 'react'
import { connect } from 'react-redux'
import { setValue, setRGBValue } from '../../actions'

const Input = ({ value, setValue, setRGBValue }) => (
  <input
    type='text'
    className='color-input'
    value={value}
    onChange={e => {
      setValue(e.target.value)
      setRGBValue(e.target.value)
    }}
  />
)

const mapStateToProps = ({ setValues }) => {
  return {
    value: setValues.value,
    rgbValue: setValues.rgbValue,
  }
}

const mapDispatchToProps = {
  setValue,
  setRGBValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
