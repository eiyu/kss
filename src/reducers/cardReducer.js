// import fake cards and dependencies
// in real app cards come from database (sql/ nosql)
// firebase has realtime database which is good for just in time manufacturing

import {CREATE_CARD, UPDATE_CARD, REMOVE} from '../actions/cardActions'

// higher order reducer
//
export const cardContext = function(name='', initialState) {
  return function cardReducer(state=initialState, action) {
    switch (action.type) {
      case `${CREATE_CARD}_${name}`:
      // if using database the logic will be different
        return Object.assign({},state,{...state,...action.card})
      case `${UPDATE_CARD}_${name}`:
        // wh
        return state //logic here

      case `${REMOVE}_${name}`:
      // if using database the logic will be different
        return Object.assign({}, state,
          (function(state){
            if(state.hasOwnProperty(action.id)) {
              delete state[action.id]
            }
            return state
          }(state))
        )
      default:
      return state
    }
  }
}
