export const DISPLAY_SINGLE_BOARD = 'DISPLAY_SINGLE_BOARD'
export const ADD_BOARD = 'ADD_BOARD'

// board name or id ?
export const displaySingleBoard = (boardName) => {
  return {
    type: DISPLAY_SINGLE_BOARD,
    boardName
  }
}

export const createBoard = boardName => {
  return {
    type: ADD_BOARD,
    boardName
  }
}
