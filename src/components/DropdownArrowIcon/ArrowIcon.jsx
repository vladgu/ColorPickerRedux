import React from 'react'
import { connect } from 'react-redux'

import { setDropdownOpened, setRGBDropdownOpened } from '../../actions'

const ArrowIcon = ({ dropdownOpened, setDropdownOpened, setRGBDropdownOpened }) => (
  <div className='box'>
    <i
      className={dropdownOpened ? 'arrow-down opened' : 'arrow-down'}
      onClick={e => {
        e.stopPropagation()
        setDropdownOpened(!dropdownOpened)
        setRGBDropdownOpened(false)
      }}
    />
  </div>
)

const mapStateToProps = ({ dropdowns }) => {
  return {
    dropdownOpened: dropdowns.dropdownOpened,
  }
}

const mapDispatchToProps = {
  setDropdownOpened,
  setRGBDropdownOpened,
}

export default connect(mapStateToProps, mapDispatchToProps)(ArrowIcon)
