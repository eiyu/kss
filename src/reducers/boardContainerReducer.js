import {names} from '../data/treeData'
import {CREATE, REMOVE, SWITCH} from '../actions/boardContainerActions'

const switchId = (a,b) => arr => arr.map((val,i,r) => {
  if(a === i) {
    return r[b]
  }
  if(b === i) {
    return r[a]
  } else {
    return val
  }
})

export const boardContainerReducer = (state=names, action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.id]
    case SWITCH:
      return switchId(action.current,action.destination)(state)
    case REMOVE:
    return state
    default:
      return state
  }
}
