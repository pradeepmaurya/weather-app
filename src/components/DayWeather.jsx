import React from 'react'

function DayWeather(props) {
  return (
    <div className='weather-day'>
      <div className="day-name">
        <p>{props.date}</p>
      </div>
      <div className="weather-icon">
        <img src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${props.icon}.svg`} alt="weather icon" />
        <p>{props.condition}</p>
      </div>
      <div className="min-max-temp">
        <p className='max'>{props.maxTemp}°/</p>
        <p className='min'>{props.minTemp}°</p>
      </div>
    </div>
  )
}

export default DayWeather
