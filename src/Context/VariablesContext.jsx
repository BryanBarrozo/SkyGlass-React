import { createContext, useState, useEffect } from "react";

export const VariablesContext = createContext();

export function VariablesProvider({ children }) {

    const [cityResult, setCityResult] = useState(() =>{
        return localStorage.getItem("saveCity") || "london"
    });
    const [weatherData, setWeatherData] = useState(null);
    const [dataForecast, setDataForecast] = useState(null);

    const apiKey = "688c0777584fd7164ff2dfe24c5ad896";

    useEffect(() =>{
        if(cityResult){
            localStorage.setItem("saveCity", cityResult)
        }
    }, [cityResult])

    return(
        <VariablesContext.Provider
            value={{
                cityResult,
                setCityResult,
                apiKey,
                weatherData,
                setWeatherData,
                dataForecast,
                setDataForecast
            }}
        >
            {children}
        </VariablesContext.Provider>
    )
}