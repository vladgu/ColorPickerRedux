import { SET_RGB_DROPDOWN_OPENED, SET_DROPDOWN_OPENED } from '../actions/actionTypes'

const initialState = {
  rgbDropdownOpened: '',
  dropdownOpened: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RGB_DROPDOWN_OPENED:
      return {
        ...state,
        rgbDropdownOpened: action.payload
      }
    case SET_DROPDOWN_OPENED:
      return {
        ...state,
        dropdownOpened: action.payload
      }
    default:
      return state
  }
}