import { useState, useEffect } from "react";
import Weather from "./Weather";

const Form = (): JSX.Element => {

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
    </>
  );
};
export default Form;
