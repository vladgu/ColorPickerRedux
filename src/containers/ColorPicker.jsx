import React, { useEffect, memo } from 'react'
import { connect } from 'react-redux'

import colors from '../configs/colorList'
import Input from '../components/ColorInput/Input'
import PreviewBox from '../components/ColorPreviewBox/PreviewBox'
import ArrowIcon from '../components/DropdownArrowIcon/ArrowIcon'
import ListItem from '../components/ColorListItem/ListItem'
import RangePicker from '../components/ColorRangePicker/RangePicker'
import { setValue, setRGBValue, setDropdownOpened, setRGBDropdownOpened } from '../actions'

const ColorPicker = ({
  rgbDropdownOpened,
  dropdownOpened,
  setValue,
  setRGBValue,
  setDropdownOpened,
  setRGBDropdownOpened,
}) => {
  useEffect(() => {
    setValue(colors[0].code)
    setRGBValue(colors[0].code)
    setDropdownOpened(false)
    setRGBDropdownOpened(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className='wrapper'
      onClick={() => {
        setDropdownOpened(false)
        setRGBDropdownOpened(false)
      }}>
      <div className='color-picker'>
        <Input />
        <PreviewBox />
        {rgbDropdownOpened ? (
          <div className='arrow-dropdown rgb'>
            <div className='arrow-up rgb' />
            <RangePicker />
          </div>
        ) : null}

        <ArrowIcon />
        {dropdownOpened ? (
          <div className='arrow-dropdown'>
            <div className='arrow-up' />
            {colors.map(({ name, code }, index) => (
              <ListItem key={String(index)} colorName={name} colorCode={code} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

const mapStateToProps = ({ dropdowns }) => {
  return {
    rgbDropdownOpened: dropdowns.rgbDropdownOpened,
    dropdownOpened: dropdowns.dropdownOpened,
  }
}

const mapDispatchToProps = {
  setValue,
  setRGBValue,
  setDropdownOpened,
  setRGBDropdownOpened,
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(ColorPicker))
