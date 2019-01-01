import {SHOW_FORM, SHOW_BOARD} from '../actions/togglesActions'
const initialState = {
  showForm: false,
  showBoard: false
}

  export const togglesReducer = (state=initialState, action) => {
    switch (action.type) {

      case SHOW_FORM:
        return Object.assign({}, state, {
          showForm: state.showForm === false ? true : false
        })
      case SHOW_BOARD:
        return Object.assign({}, state, {
          showBoard: state.showBoard === false ? true : false
        })

      default:
        return state
    }
  }
