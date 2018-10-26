import axios from 'axios'

const API_KEY = '089f19dcc5012a46871f7b19fd722dac'
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='

const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){

    const url = `${ROOT_URL}${city},us&appid=${API_KEY}`
    const request = axios.get(url)
    console.log('request is',request)
    return(
        {
            type : FETCH_WEATHER,
            payload : request
        }
    )
}