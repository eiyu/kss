export const FETCHING = 'FETCHING';

export const fetchWeather = (city="Bandung") => async dispatch => {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},id&APPID=2322e1220a77e4072c4a8f8dc7bdccfb`)
    .then(prom => prom.json())
    .then(json => {
      dispatch({
        type: FETCHING,
        payload: json
      })
    })
}
