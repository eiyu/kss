import {combineReducers} from 'redux'
import {cardContext} from './cardReducer'
import {togglesReducer} from './togglesReducer'
import {task} from './taskReducer'
import {weather} from './weatherReducer'
import {treeData} from '../data/treeData'

// in order to make it works the default boards node name should be changed
// or change directly inside ui -

const boards = Object.keys(treeData).reduce((prev, next) => {
  // is it better to mutate prev or not?
  return Object.assign(prev, {[next]: cardContext(next, treeData[next])})
}, {})

console.log(boards);
const allReducers = combineReducers({
  // backlog: cardContext('Back-Log', treeData.backlog),
  // todo: cardContext('To-Do', treeData.todo),
  // doing: cardContext('Doing', treeData.doing),
  // done: cardContext('Done', treeData.done),
  ...boards,
  toggles: togglesReducer,
  backlogTask: task('Back-Log'),
  todoTask: task('To-Do'),
  doingTask: task('Doing'),
  doneTask: task('Done'),
  weather: weather,
})

export default allReducers
