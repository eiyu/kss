import {FETCHING} from '../actions/weatherActions'

export const weather = (state={loading: false, data:{}}, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        loading: state.loading === false ? true : false,
        data: Object.assign({}, state.data, action.payload)
      })
    default:
      return state
  }
}
