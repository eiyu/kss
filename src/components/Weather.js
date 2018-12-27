import PropTypes from 'prop-types'
import React , {Component} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions/weatherActions'
class Weather extends Component {

  // handle failing request

  fetchWeather(city) {
    this.props.onFetchWeather(city)
  }

  componentDidMount() {
    // fetch test
    this.props.onFetchWeather()
  }

  render() {
    return (
      <div>
        <div>Weather </div>
        <div>City: </div>
        <div>Current Weather: </div>
      </div>
    )
  }
}

Weather.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool
}

const stateToProps = (state,props) => {
  return {
    data: state.weather.data,
    loaded: state.weather.loading
  }
}

const dispatchToProps = (dispatch) => {
  return {
    onFetchWeather: (city) => fetchWeather(city)(dispatch)
  }
}

export default connect(stateToProps,dispatchToProps)(Weather);
