import {SHOW_TASK_DETAILS} from '../actions/togglesActions'
const initialState = {
  show: false,
  card:{}
}

// higher order reducer
export const task = (name="") => {
  return function togglesReducer(state=initialState, action) {
    switch (action.type) {
      case `${SHOW_TASK_DETAILS}${name}`:
        return Object.assign({}, state, {
            show: state.show === false ? true : false,
            card: state.show === false ? action.card : {},
            status: name
        })

      default:
        return state
    }
  }
}
