import axios from "axios";
import { createContext, useEffect, useState } from "react";
import cities from '../Cities_Data/citiesOfTurkey.json'



const WeatherContext = createContext();


export const WeatherProvider = ({children}) => {

    const [city, setCity] = useState(null);
    const [weatherData, setWeatherData] = useState([])



    useEffect(()=>{
        const key = "72dd6ef7ac47452eb7d135753232202"
        if (city) {
            axios(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city.latitude},${city.longitude}&days=8&hour=24`)
            .then(res => res.data)
            .then(res => res.forecast)
            .then(res => setWeatherData(res.forecastday))
        }   
    },[city])

    const values={
        cities,
        city,
        setCity,
        weatherData
    }
    
    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext
