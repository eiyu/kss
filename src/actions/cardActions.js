export const UPDATE_CARD = "UPDATE_CARD"
export const REMOVE = "REMOVE"
export const updateCard = (status) => ({
  type: "UPDATE_CARD",
  status
})
export const removeCard = (id) => ({
  type: "REMOVE",
  id
})
