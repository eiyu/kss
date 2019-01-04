import {ADD_BOARD, DISPLAY_SINGLE_BOARD} from '../actions/boardActions'
<<<<<<< HEAD
=======
import {names} from '../data/treeData'
export function boardReducer(state=, action) {
  switch (action.type) {
    case ADD_BOARD:
      return
    case DISPLAY_SINGLE_BOARD:
      return [...state, action.boardName]
    default:
      return state
  }
}
>>>>>>> add container for board
