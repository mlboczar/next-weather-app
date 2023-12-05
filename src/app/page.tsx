'use client'
import Header from "./components/Header"
import Form from "./components/Form"
import Weather from "./components/Weather";
import { WeatherType } from "@/types/types";
import { useState, useEffect } from "react";

export default function Home() {

  const [weather, setWeather] = useState<WeatherType>();

  async function fetchCityData(cityName: string) {
    try {
      const res = await fetch(
        `http://localhost:3000/api/weather?address=${cityName}`
      );
      const json = (await res.json()).data;
      setWeather(json);

      if (!weather) {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCityData('detroit'); //default to detroit on page load
  }, []);

  return (
    <div>
      <Header></Header>
      <Form onSubmitChange={fetchCityData}></Form>
      <Weather weather={weather}></Weather>
    </div>
  )
}
