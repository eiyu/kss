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
export const removeCard = (id, name) => ({
  type: `${REMOVE}_${name}`,
  id
})
