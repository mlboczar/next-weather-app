import { useState, useEffect } from "react";
import { Props } from "@/types/types";

const Form = ({onSubmitChange}:Props): JSX.Element => {
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
