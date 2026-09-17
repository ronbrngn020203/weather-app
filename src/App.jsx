import { useState } from 'react'
import './App.css'

function App() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    function handleSearch() {
        setLoading(true)
        setError("")

        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
            .then(response => response.json())
            .then(data => {
                if (!data.results) {
                    console.log("Invalid City")
                    setError("City Not Found. Enter another City")
                    setLoading(false)
                    setWeather(null)
                    return
                }
                const location = data.results[0]
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true`)
                    .then(response => response.json())
                    .then(data => {
                        setWeather(data.current_weather)
                        console.log(data.current_weather)
                        setLoading(false)
                    })

            })
    }

    return (
        <div className="app-container">
            <h1>Weather App</h1>
            <div className="search-row">
            <input type="text" className="search-input" value={city} onChange={(e) => setCity(e.target.value)} />
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
            {loading ? (
                <div className="spinner"></div>
            ) : weather ? (
                <div className="weather-info">
                    <p className="temperature-label">Temperature</p>
                    <p className="temperature">{weather.temperature}&deg;C</p>
                    <p className="weather-detail">Wind Speed: {weather.windspeed} km/h</p>
                    <p className="weather-detail">Interval: {weather.interval}</p>
                    <p className="weather-detail">Wind Direction: {weather.winddirection}</p>
                    <p className="weather-detail">Day or Night: {weather.is_day === 1 ? "Day" : "Night"}</p>
                </div>
            ) : (
                error ? <p className="error-message">{ error }</p> : <p className="status-message">Search for a city to see the weather</p>
            )}
        </div>
    )
}

export default App