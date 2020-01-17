import React from 'react'
import { connect } from 'react-redux'
import { setValue, setRGBValue } from '../../actions'

const Input = ({ value, setValue, setRGBValue }) => {
  const onChangeHandler = e => {
    setValue(e.target.value)
    setRGBValue(e.target.value)
  }

  return <input type='text' className='color-input' value={ value } onChange={ e => onChangeHandler(e) } />
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

export default connect(mapStateToProps, mapDispatchToProps)(Input)
