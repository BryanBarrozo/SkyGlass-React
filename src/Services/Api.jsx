export async function getWeather(city, apiKey){

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )

    const data = await response.json()

    return {
        city: data.name,
        country: data.sys.country,
        temp: Math.floor(data.main.temp),
        maxTemp: Math.floor(data.main.temp_max),
        minTemp: Math.floor(data.main.temp_min),
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,

        feels: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        wind: data.wind.speed,
        visibility: data.visibility / 1000,
        pressure: data.main.pressure,
        sea_level: data.main.sea_level
    }
}

export async function getWeatherForecast(city, apiKey){

        const response_forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const forecast_data = await response_forecast.json();

        const newData = forecast_data.list.slice(0, 5).map((item)=>({
            time: item.dt_txt.split(" ")[1].slice(0, 5),

            icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,

            temp: Math.floor(item.main.temp)
        }))

        return newData
    }


