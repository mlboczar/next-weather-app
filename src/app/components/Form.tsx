import { useState, useEffect } from "react";
import Weather from "./Weather";

const Form = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

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
    console.log(weather);
  }

  useEffect(() => {
    fetchCityData("detroit"); //default to detroit on page load
  }, []);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          fetchCityData(city);
        }}
      >
        <input
          placeholder="City Name"
          type="text"
          name="city"
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Weather weather={weather}></Weather>
    </>
  );
};
export default Form;
