import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

import styles from './MainClimate.module.css'

import {useState, useContext, useEffect} from 'react'
import { VariablesContext } from '../../context/VariablesContext'
import { getWeather, getWeatherForecast} from '../../Services/Api'

function MainClimate(){

    const { cityResult, setCityResult, apiKey , weatherData, setWeatherData, dataForecast, setDataForecast} = useContext(VariablesContext)

    useEffect(() => {

        async function weather() { 
            const data = await getWeather(cityResult, apiKey)
            const dataForecast = await getWeatherForecast(cityResult, apiKey)
            setWeatherData(data)
            setDataForecast(dataForecast)
        }
        if(cityResult){
            weather()
        }
    }, [cityResult])

    return(
         <div className={styles.container_main}>
            <div className={styles.container_location}>

                <div className={styles.container_city}>
                    <FontAwesomeIcon icon={faLocationDot} className={styles.icon_city} />
                    <h1 className={styles.city_name}>{weatherData?.city}, {weatherData?.country}</h1>
                </div>

                <div className={styles.container_temp}>
                    <h2>{weatherData?.temp}°C</h2>
                    <div>
                        <h3 >{weatherData?.description}</h3>
                        <p>H: {weatherData?.maxTemp} L: {weatherData?.minTemp}</p>
                    </div>
                </div>

            </div>
            <img src={weatherData?.icon} alt="weather icon"/>
        </div>  
    )
}

export default MainClimate;