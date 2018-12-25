import {combineReducers} from 'redux'
import {cardReducer} from './cardReducer'
import {togglesReducer} from './togglesReducer'

const allReducers = combineReducers({
  cards: cardReducer,
  toggles: togglesReducer
})

export default allReducers
