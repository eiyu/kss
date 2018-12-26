import PropTypes from 'prop-types'
import React , {Component} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions/weatherActions'
class Weather extends Component {

  constructor() {
    super()
    this.fetchWeather = this.fetchWeather.bind(this)
  }

  fetchWeather(city) {
    this.props.onFetchWeather(city)
  }

  componentDidMount() {
    // fetch test
    this.props.onFetchWeather()
  }

  render() {
    console.log('load ',this.props.loading);
    return (
      <div>
        <div>Weather</div>
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
    loading: state.weather.loading
  }
}

const dispatchToProps = (dispatch) => {
  return {
    onFetchWeather: (city) => fetchWeather(city)(dispatch)
  }
}

export default connect(stateToProps,dispatchToProps)(Weather);
