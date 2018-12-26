import {SHOW_FORM} from '../actions/togglesActions'
const initialState = {
  showForm: false,
}

  export const togglesReducer = (state=initialState, action) => {
    switch (action.type) {
      // case `${SHOW_TASK_DETAILS}${name}`:
      //   return Object.assign({}, state, {
      //       show: state.showDetails === false ? true : false,
      //       card: state.showDetails === false ? action.card : {},
      //       status: name
      //   })

      case SHOW_FORM:
        return Object.assign({}, state, {
          showForm: state.showForm === false ? true : false
        })

      default:
        return state
    }
  }
