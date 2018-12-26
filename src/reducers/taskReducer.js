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
          id: state.show === false ? action.id : void 0,
          status: state.show === false ? name : void 0
        })

      default:
        return state
    }
  }
}
