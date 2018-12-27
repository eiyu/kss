import {SHOW_TASK_DETAILS} from './taskActions'
export const UPDATE_CARD = "UPDATE_CARD"
export const CREATE_CARD = "CREATE_CARD"
export const REMOVE = "REMOVE"

export const createCard = (card, name) => ({
  type: `${CREATE_CARD}_${name}`,
  card
})

export const updateCard = (dispatch,id, card, to, name) => {
  // hide task details
  // create / update
  // delete unused
  dispatch({
    type: `${SHOW_TASK_DETAILS}${name}`,
  })
  dispatch({
    type: `${CREATE_CARD}_${to}`,
    card: {[id]:card}
  })
  dispatch({
    type: `${REMOVE}_${name}`,
    id
  })
}

export const dragCard = (dispatch,id, card, to, name) => {
  // hide task details
  // create / update
  // delete unused
  dispatch({
    type: `${CREATE_CARD}_${to}`,
    card: {[id]:card}
  })
  dispatch({
    type: `${REMOVE}_${name}`,
    id
  })
}


export const removeCard = (dispatch, id, name) => {
  dispatch({
    type: `${SHOW_TASK_DETAILS}${name}`
  })
  dispatch({
    type: `${REMOVE}_${name}`,
    id
  })
}
