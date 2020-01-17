import React, { memo } from 'react'
import { connect } from 'react-redux'

import { setDropdownOpened, setRGBDropdownOpened } from '../../actions'

const PreviewBox = ({ value, rgbValue, rgbDropdownOpened, setDropdownOpened, setRGBDropdownOpened }) => {
  const onClickHandler = e => {
    e.stopPropagation()
    setRGBDropdownOpened(!rgbDropdownOpened)
    setDropdownOpened(false)
  }

  return (
    <div className='box'>
      <div
        className={ rgbDropdownOpened ? 'color-preview-box opened' : 'color-preview-box' }
        style={ { backgroundColor: value !== rgbValue && rgbDropdownOpened ? rgbValue : value } }
        onClick={ e => onClickHandler(e) }
      />
    </div>
  )
}

const mapStateToProps = ({ setValues, dropdowns }) => {
  return {
    value: setValues.value,
    rgbValue: setValues.rgbValue,
    rgbDropdownOpened: dropdowns.rgbDropdownOpened,
  }
}

const mapDispatchToProps = {
  setDropdownOpened,
  setRGBDropdownOpened,
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(PreviewBox))
