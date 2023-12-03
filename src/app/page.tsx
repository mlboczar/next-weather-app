'use client'
import { useState, useEffect } from "react"

export default function Home() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("detroit")

  async function fetchCityData(cityName: string) {
    try {
      const res = await fetch("http://localhost:3000/api/weather?address=" + cityName)
      const json = (await res.json()).data
      console.log(json)
      setWeather(json)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCityData("detroit")
  }, [])

  return (
    <div>
      <h1>Weather</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          fetchCityData(city)
        }}
      >
        <input
          placeholder="City Name"
          type="text"
          name="city"
          onChange={(event) => setCity(event.target.value)}
        />
        <button
          type="submit"
        >
          Search
        </button>
      </form>
      {weather ? (
        <>
        <h3>{weather?.name}</h3>

        <div>Description: {weather.weather[0].description}</div>
        <div>Current temp: {weather.main.temp}°F</div>
        <div>Feels like: {weather.main.feels_like}°F</div>
        <div>Wind speed: {weather.wind.speed}mph</div>
        </>
      ): (
        <h3>Loading...</h3>
      )}
    </div>
  )
}
