import {combineReducers} from 'redux'
import {cardContext} from './cardReducer'
import {togglesReducer} from './togglesReducer'
import {task} from './taskReducer'
import {weather} from './weatherReducer'
import {treeData} from '../data/treeData'
import {ADD_BOARD, DISPLAY_SINGLE_BOARD} from '../actions/boardActions'

// main board reducer
// only for mocking
// it will be boards initial state

// the problem with this is when switching to the real database
// i need to restructured the model which means the whole ui need to be restructured as well
// this is happen when lack of planning or complete specification in the begining, or when trying to add higher level features.
  const boardReducer = function(state=treeData,action) {
    console.log(action);
    switch (action.type) {
      case ADD_BOARD:
        return Object.assign({}, state, {
          ...state, [action.boardName]: {}
        })
      case DISPLAY_SINGLE_BOARD:
        return state
      default:
        return state
    }
  }

const initial = boardReducer(treeData,{type: 'initialState'})

// in order to make it works the default boards node name should be changed
// or change directly inside ui -
const boards = Object.keys(initial).reduce((prev, next) => {
  // is it better to mutate prev or not?
  return Object.assign(prev, {[next]: cardContext(next, treeData[next])})
}, {})

console.log(boards);
const allReducers = combineReducers({
  mainBoard: boardReducer,
  ...boards,
  toggles: togglesReducer,
  backlogTask: task('Back-Log'),
  todoTask: task('To-Do'),
  doingTask: task('Doing'),
  doneTask: task('Done'),
  weather: weather,
})

export default allReducers
