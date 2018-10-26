import React from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google-map'

class WeatherList extends React.Component{
    
    renderWeather(cityData){
        const temps = cityData.list.map(citytemp=>citytemp.main.temp)
        const pressures = cityData.list.map(citytemp=>citytemp.main.pressure)
        const humidities = cityData.list.map(citytemp=>citytemp.main.humidity)
        const lon = cityData.city.coord.lon
        const lat = cityData.city.coord.lat
        console.log(temps)
        return(
            <tr key={cityData.city.name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart data={temps} color='red' units='K'/></td>
                <td><Chart data={pressures} color='blue' units='hPa'/></td>
                <td><Chart data={humidities} color='black' units='%'/></td>
            </tr>
        )
    }

    render(){
        console.log('weather data is',this.props.weather)
        return(
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return {weather}
}

export default connect(mapStateToProps)(WeatherList)