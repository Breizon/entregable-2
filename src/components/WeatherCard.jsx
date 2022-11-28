import React, { useState } from 'react'

const WeatherCard = ({weather, temp}) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleClick = () => setIsCelsius(!isCelsius)

    console.log(temp)

  return (
    <article className='card'>
        <header className='card-header'>
        <h1 className='card-title'>Weather App</h1>
        <h2 className='card-subtitle'>{weather?.name}, {weather?.sys.country}</h2>
        </header>
        <section className='card-icon-container'>
            <img className='card-icon' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
        </section>
        <section className='card-info'>
            <h3>"{weather?.weather[0].description}"</h3>
            <ul>
                <li className='card-item'><span className='card-span'>Wind Speed </span>{weather?.wind.speed} m/s</li>
                <li className='card-item'><span className='card-span'>Clouds </span>{weather?.clouds.all}%</li>
                <li className='card-item'><span className='card-span'>Pressure </span>{weather?.main.pressure} hPa</li>
            </ul>
        </section>
        <h3 className='card-temp'>
                {
                    isCelsius ? 
                    `${temp?.celsius} °C`
                    :
                    `${temp?.fahrenheit} °F`
                }
                </h3>
        <footer className='card-footer'>
            <button onClick={handleClick} className='card-btn'>Change to {isCelsius?'°F':'°C'}</button>
        </footer>
    </article>
  )
}

export default WeatherCard