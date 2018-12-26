import {combineReducers} from 'redux'
import {cardContext} from './cardReducer'
import {togglesReducer} from './togglesReducer'
import {task} from './taskReducer'
import {treeData} from '../data/treeData'

const allReducers = combineReducers({
  backlog: cardContext('backlog', treeData.backlog),
  todo: cardContext('todo', treeData.todo),
  doing: cardContext('doing', treeData.doing),
  done: cardContext('done', treeData.done),
  toggles: togglesReducer,
  backlogTask: task('Back-Log'),
  todoTask: task('To-Do'),
  doingTask: task('Doing'),
  doneTask: task('Done')
})

export default allReducers
