import { createContext, useState } from "react";

export const VariablesContext = createContext();

export function VariablesProvider({ children }) {

    const [cityResult, setCityResult] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [dataForecast, setDataForecast] = useState(null);

    const apiKey = "688c0777584fd7164ff2dfe24c5ad896";

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