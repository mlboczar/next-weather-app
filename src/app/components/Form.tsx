import { useState, useEffect } from "react";
import Weather from "./Weather";

const Form = ({onSubmitChange}:any): JSX.Element => {
  const [city, setCity] = useState('')
  console.log(`onsubmitchange: ${onSubmitChange}`)

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitChange(city);
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
