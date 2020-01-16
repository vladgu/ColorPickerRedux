import { SET_VALUE, SET_RGB_VALUE, SET_RGB_DROPDOWN_OPENED, SET_DROPDOWN_OPENED, } from './actionTypes'

export function setValue(payload) {
  return {
    type: SET_VALUE,
    payload
  }
}

export function setRGBValue(payload) {
  return {
    type: SET_RGB_VALUE,
    payload
  }
}

export function setRGBDropdownOpened(payload) {
  return {
    type: SET_RGB_DROPDOWN_OPENED,
    payload
  }
}

export function setDropdownOpened(payload) {
  return {
    type: SET_DROPDOWN_OPENED,
    payload
  }
}
