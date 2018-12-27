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
    // add loading
    // running out of time
    // refactor !!!
    const size = {width: "30px", height: "30px"}
    return this.props.loaded ? (
      <div>
        <div>Weather </div>
        <div>City: {this.props.data.name} </div>
        <img style={size} src={`http://openweathermap.org/img/w/${this.props.data.weather[0].icon}.png`} alt="weather"/>
        <div>Current Weather: {this.props.data.weather[0].main} </div>
        <div>Current Weather: {this.props.data.weather[0].description} </div>
      </div>
    ) : <div>...loading</div>
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
