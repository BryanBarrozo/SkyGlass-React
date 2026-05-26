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

        return{
            //Timer
            time1:  forecast_data.list[0].dt_txt.split(" ")[1].slice(0,5),
            time2:  forecast_data.list[1].dt_txt.split(" ")[1].slice(0,5),
            time3:  forecast_data.list[2].dt_txt.split(" ")[1].slice(0,5),
            time4:  forecast_data.list[3].dt_txt.split(" ")[1].slice(0,5),
            time5:  forecast_data.list[4].dt_txt.split(" ")[1].slice(0,5),
            //icons
            icon1:  `https://openweathermap.org/img/wn/${forecast_data.list[0].weather[0].icon}@2x.png`,
            icon2:  `https://openweathermap.org/img/wn/${forecast_data.list[1].weather[0].icon}@2x.png`,
            icon3:  `https://openweathermap.org/img/wn/${forecast_data.list[2].weather[0].icon}@2x.png`,
            icon4:  `https://openweathermap.org/img/wn/${forecast_data.list[3].weather[0].icon}@2x.png`,
            icon5:  `https://openweathermap.org/img/wn/${forecast_data.list[4].weather[0].icon}@2x.png`,
            //temp
            temp1:  Math.floor(forecast_data.list[0].main.temp),
            temp2:  Math.floor(forecast_data.list[1].main.temp),
            temp3:  Math.floor(forecast_data.list[2].main.temp),
            temp4:  Math.floor(forecast_data.list[3].main.temp),
            temp5:  Math.floor(forecast_data.list[4].main.temp)
        }
    }


