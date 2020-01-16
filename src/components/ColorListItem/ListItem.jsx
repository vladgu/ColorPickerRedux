import React from 'react'

const ListItem = ({ colorName, colorCode, currentColor, stateColorChange, preStateColorChange }) => (
  <div
    className={currentColor === colorCode ? 'color-list-item current' : 'color-list-item'}
    onClick={() => {
      stateColorChange(colorCode)
      preStateColorChange(colorCode)
    }}>
    <p className='color-list-paragraph'>{colorName}</p>
    <div className='color-preview-box' style={{ backgroundColor: colorCode }} />
  </div>
)

export default ListItem
