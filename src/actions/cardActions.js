import {SHOW_TASK_DETAILS} from './taskActions'
export const UPDATE_CARD = "UPDATE_CARD"
export const CREATE_CARD = "CREATE_CARD"
export const REMOVE = "REMOVE"

export const createCard = (card, name) => ({
  type: `${CREATE_CARD}_${name}`,
  card
})

export const updateCard = (card, name) => ({
  type: `${UPDATE_CARD}_${name}`,
  card
})
export const removeCard = (dispatch, id, name) => {
  dispatch({
    type: `${SHOW_TASK_DETAILS}${name}`,
    card: void 0,
    id
  })
  dispatch({
    type: `${REMOVE}_${name}`,
    id
  })
}
