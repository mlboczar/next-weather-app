import { useState, useEffect } from "react";
import { Props } from "@/types/types";
import styles from "./Form.module.css"

const Form = ({onSubmitChange}:Props): JSX.Element => {
  const [city, setCity] = useState('')

  return (
    <div className={styles.search}>
      <div className={styles.form}>
        <h3>City</h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmitChange(city);
          }}
        >
          <input
            className={styles.input}
            placeholder="City Name"
            type="text"
            name="city"
            onChange={(event) => setCity(event.target.value)}
          />
          <button className={styles.button} type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};
export default Form;
