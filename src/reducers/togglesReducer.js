import {SHOW_TASK_DETAILS, SHOW_FORM} from '../actions/togglesActions'
const initialState = {
  showDetails: {show: false,card:{}},
  showForm: false
}

export const togglesReducer = (state=initialState, action) => {
  
  switch (action.type) {
    case SHOW_TASK_DETAILS:
      return Object.assign({}, state, {
        showDetails : {
          show: state.showDetails.show === false ? true : false,
          card: state.showDetails.show === false ? action.card : {}
        }
      })

    case SHOW_FORM:
      return Object.assign({}, state, {
        showForm: state.showForm === false ? true : false
      })

    default:
      return state
  }
}
