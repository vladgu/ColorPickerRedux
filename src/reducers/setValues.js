import { SET_VALUE, SET_RGB_VALUE } from '../actions/actionTypes'

const initialState = {
  value: '',
  rgbValue: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.payload
      }
    case SET_RGB_VALUE:
      return {
        ...state,
        rgbValue: action.payload
      }
    default:
      return state
  }
}