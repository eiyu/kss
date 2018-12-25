// import fake cards and dependencies
// in real app cards come from database (sql/ nosql)
// firebase has realtime database which is good for just in time manufacturing

import {UPDATE_CARD, REMOVE, updateCard, removeCard} from '../actions/cardActions'

// higher order reducer
export const cardContext = function(name='', initialState) {
  return function cardReducer(state=initialState, action) {
    switch (action.type) {
      case UPDATE_CARD:
        return //logic here
      case REMOVE:
        return //logic here
      default:
      return state
    }
  }
}
