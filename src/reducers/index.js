import {combineReducers} from 'redux'
import {cardContext} from './cardReducer'
import {togglesReducer} from './togglesReducer'
import {task} from './taskReducer'
import {treeData} from '../data/treeData'

const allReducers = combineReducers({
  backlog: cardContext('Back-Log', treeData.backlog),
  todo: cardContext('To-Do', treeData.todo),
  doing: cardContext('Doing', treeData.doing),
  done: cardContext('Done', treeData.done),
  toggles: togglesReducer,
  backlogTask: task('Back-Log'),
  todoTask: task('To-Do'),
  doingTask: task('Doing'),
  doneTask: task('Done')
})

export default allReducers
