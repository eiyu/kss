const DISPLAY_SINGLE_BOARD = 'DISPLAY_SINGLE_BOARD'
const ADD_BOARD = 'ADD_BOARD'

// board name or id ?
const displaySingleBoard = (boardName) => {
  return {
    type: DISPLAY_SINGLE_BOARD,
    boardName
  }
}

const addBoard = boardName => {
  return {
    type: ADD_BOARD,
    boardName
  }
}
