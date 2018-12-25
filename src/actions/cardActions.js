export const UPDATE_CARD = "UPDATE_CARD"
export const REMOVE = "REMOVE"
export const updateCard = (card) => ({
  type: "UPDATE_CARD",
  card
})
export const removeCard = (id) => ({
  type: "REMOVE",
  id
})
