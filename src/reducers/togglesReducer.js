import {SHOW_FORM} from '../actions/togglesActions'
const initialState = {
  showForm: false,
}

  export const togglesReducer = (state=initialState, action) => {
    switch (action.type) {

      case SHOW_FORM:
        return Object.assign({}, state, {
          showForm: state.showForm === false ? true : false
        })

      default:
        return state
    }
  }
