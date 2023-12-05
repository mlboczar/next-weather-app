import { WeatherType } from "@/types/types"
import styles from "./Weather.module.css"

const Weather = ({weather}:WeatherType): JSX.Element => {
    let imageUrl;
    if (weather && weather.main) {
        imageUrl = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
    }

    return (
        <div className={styles.main}>
        {weather && weather.main ? (
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>{weather?.name}</h2>
                    <img className={styles.image} src={imageUrl} alt="weather-icon"/>
                </div>
        
                <div className={styles.element}>
                    Description: {weather?.weather[0].description}
                </div>
                <div className={styles.element}>
                    Current temp: {weather?.main.temp}°F
                </div>
                <div className={styles.element}>
                    Feels like: {weather?.main.feels_like}°F
                </div>
                <div className={styles.element}>
                    Wind speed: {weather?.wind.speed}mph
                </div>
            </div>
        ) : (
            <h3>Loading...</h3>
        )}
        </div>
    )
}

export default Weather
