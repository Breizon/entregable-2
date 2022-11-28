import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  const success = pos => {
  setCoords({
    lat: pos.coords.latitude,
    lon: pos.coords.longitude
  })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  },[])

  useEffect(() => {
    if (coords) {
      const apiKey = '5327db5869a9deae50a50174a749a446'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(URL)
      .then(res => {
        setWeather(res.data)
        const celsius = (res.data.main.temp - 273.15).toFixed(1);
        const fahrenheit = (celsius * 9/5 + 32).toFixed(1);
        setTemp({celsius, fahrenheit})
      })
      .catch(err => console.log(err))
    }
  },[coords])



  console.log(weather)

  return (
    <div className="App">
      {
        weather ?
        <WeatherCard 
          weather={weather}
          temp = {temp}
          />
          :
          <Loading/>
      }
    </div>
  )
}

export default App
