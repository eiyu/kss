// import fake cards and dependencies
// in real app cards come from database (sql/ nosql)
// firebase has realtime database which is good for just in time manufacturing


import {testArray} from '../data/cards'
import {CHANGE_STATUS} from '../actions/cardActions'
import {combineReducers} from 'redux'

export const cardReducer = (state=testArray, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return Object.assign({}, state, {
        status: action.payload
      })
    default:
    return state
  }
}

export const allReducers = combineReducers({
  cards: cardReducer
})
