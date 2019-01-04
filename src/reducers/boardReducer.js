import {ADD_BOARD, DISPLAY_SINGLE_BOARD} from '../actions/boardActions'
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {names} from '../data/treeData'
export function boardReducer(state=, action) {
=======
import {treeData} from '../data/treeData'
export function boardReducer(state=treeData, action) {
>>>>>>> cleaning up
  switch (action.type) {
    case ADD_BOARD:
      return {...state, [action.name]: {}}
    case DISPLAY_SINGLE_BOARD:
      return state
    default:
      return state
  }
}
>>>>>>> add container for board
