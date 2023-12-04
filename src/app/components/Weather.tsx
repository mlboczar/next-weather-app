const Weather = (props:any): JSX.Element => {
    const { weather } = props
    console.log(weather)
    return (
        <>
        {weather && weather.weather && weather.main ? (
            <>
            <h3>{weather?.name}</h3>
    
            <div>Description: {weather?.weather[0].description}</div>
            <div>Current temp: {weather?.main.temp}°F</div>
            <div>Feels like: {weather?.main.feels_like}°F</div>
            <div>Wind speed: {weather?.wind.speed}mph</div>
            </>
        ) : (
            <h3>Loading...</h3>
        )}
        </>
    )
}

export default Weather