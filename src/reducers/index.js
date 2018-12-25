import {combineReducers} from 'redux'
import {cardContext} from './cardReducer'
import {togglesReducer} from './togglesReducer'
import {treeData} from '../data/treeData'
const allReducers = combineReducers({
  backlog: cardContext('backlog', treeData.backlog),
  todo: cardContext('todo', treeData.todo),
  doing: cardContext('doing', treeData.doing),
  done: cardContext('done', treeData.done),
  toggles: togglesReducer
})

export default allReducers
