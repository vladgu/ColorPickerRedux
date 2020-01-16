import React, { useState, useEffect, memo } from 'react'

import colors from '../configs/colorList'
import Input from '../components/ColorInput/Input'
import PreviewBox from '../components/ColorPreviewBox/PreviewBox'
import ArrowIcon from '../components/DropdownArrowIcon/ArrowIcon'
import ListItem from '../components/ColorListItem/ListItem'
import RangePicker from '../components/ColorRangePicker/RangePicker'

const ColorPicker = () => {
  const [value, onChange] = useState(colors[0].code)
  const [rgbValue, onChangeRGB] = useState(colors[0].code)
  const [rgbDropdownOpened, onRGBDropdownOpen] = useState(false)
  const [dropdownOpened, onDropdownOpen] = useState(false)

  useEffect(() => {
    // console.log(value, rgbValue)
  })

  return (
    <div
      className='wrapper'
      onClick={() => {
        onRGBDropdownOpen(false)
        onDropdownOpen(false)
      }}>
      <div className='color-picker'>
        <Input color={value} stateColorChange={onChange} preStateColorChange={onChangeRGB} />

        <PreviewBox
          color={value !== rgbValue ? rgbValue : value}
          rgbDropdownOpenedProp={rgbDropdownOpened}
          onRGBDropdownOpenProp={onRGBDropdownOpen}
          onDropdownOpenProp={onDropdownOpen}
        />

        {rgbDropdownOpened ? (
          <div className='arrow-dropdown rgb'>
            <div className='arrow-up rgb' />
            <RangePicker currentColor={value} stateColorChange={onChange} preStateColorChange={onChangeRGB} />
          </div>
        ) : null}

        <ArrowIcon
          dropdownOpenedProp={dropdownOpened}
          onRGBDropdownOpenProp={onRGBDropdownOpen}
          onDropdownOpenProp={onDropdownOpen}
        />

        {dropdownOpened ? (
          <div className='arrow-dropdown'>
            <div className='arrow-up' />
            {colors.map(({ name, code }, index) => (
              <ListItem
                key={String(index)}
                currentColor={value}
                colorName={name}
                colorCode={code}
                stateColorChange={onChange}
                preStateColorChange={onChangeRGB}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default memo(ColorPicker)
