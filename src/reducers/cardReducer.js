// import fake cards and dependencies
// in real app cards come from database (sql/ nosql)
// firebase has realtime database which is good for just in time manufacturing


import {testArray} from '../data/cards'
import {UPDATE_STATUS} from '../actions/cardActions'

export const cardReducer = (state=testArray, action) => {
  switch (action.type) {
    case UPDATE_STATUS:
      return Object.assign({}, state, {
        status: action.payload
      })
    default:
    return state
  }
}
