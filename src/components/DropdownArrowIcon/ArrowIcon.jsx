import React from 'react'

const ArrowIcon = ({ dropdownOpenedProp, onDropdownOpenProp, onRGBDropdownOpenProp }) => (
  <div className='box'>
    <i
      className={dropdownOpenedProp ? 'arrow-down opened' : 'arrow-down'}
      onClick={e => {
        e.stopPropagation()
        onDropdownOpenProp(!dropdownOpenedProp)
        onRGBDropdownOpenProp(false)
      }}
    />
  </div>
)

export default ArrowIcon
