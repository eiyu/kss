// import fake cards and dependencies
// in real app cards come from database (sql/ nosql)
// firebase has realtime database which is good for just in time manufacturing


import {treeData} from '../data/treeData'
import {UPDATE_CARD, REMOVE} from '../actions/cardActions'

export const cardReducer = (state=treeData, action) => {
  switch (action.type) {
    case UPDATE_CARD:
      return Object.assign({}, state, {
        status: action.payload
      })
    default:
    return state
  }
}
