import {ADD_BOARD} from './boardActions'
export const REMOVE = "REMOVE"
export const CREATE = "CREATE"
export const SWITCH = "SWITCH"

export const removeContainer = (id) => ({
  type: REMOVE,
  id
})

export const switchBoard = (current,destination) => ({
  type: SWITCH,
  current,
  destination
})

export const createContainer = dispatch => (name) => {
  dispatch({
    type: CREATE,
    name
  })
  dispatch({
    type: ADD_BOARD,
    boardName: name
  })
}
