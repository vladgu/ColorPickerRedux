import React from 'react'
import { connect } from 'react-redux'

import { setValue, setRGBValue } from '../../actions'

const ListItem = ({ colorCode, colorName, value, setValue, setRGBValue }) => (
  <div
    className={value === colorCode ? 'color-list-item current' : 'color-list-item'}
    onClick={() => {
      setValue(colorCode)
      setRGBValue(colorCode)
    }}>
    <p className='color-list-paragraph'>{colorName}</p>
    <div className='color-preview-box' style={{ backgroundColor: colorCode }} />
  </div>
)

const mapStateToProps = ({ setValues }) => {
  return {
    value: setValues.value,
  }
}

const mapDispatchToProps = {
  setValue,
  setRGBValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
