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
      <h3>{weather?.name}</h3>
    </div>
  )
}
