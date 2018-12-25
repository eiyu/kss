import {SHOW_TASK_DETAILS} from '../actions/togglesActions'
const initialState = {
  showDetails: false
}
export const togglesReducer = (state=initialState, action) => {
  console.log(state.showDetails);
  switch (action.type) {
    case SHOW_TASK_DETAILS:
      return Object.assign({}, state, {
        showDetails: state.showDetails === false ? true : false
      })
    default:
      return state
  }
}
