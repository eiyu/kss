import {ADD_BOARD, DISPLAY_SINGLE_BOARD} from '../actions/boardActions'

export const boardContext = (name='') => {
  return function boardReducer(state={}, action) {
    switch (action.type) {
      case ADD_BOARD:
        return state
      case DISPLAY_SINGLE_BOARD:
        return state
      default:
        return state
    }
  }
}
