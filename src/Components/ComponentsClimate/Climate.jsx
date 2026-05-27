import CardClimate from "./CardClimate"
import styles from "./Climate.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import{
    faTemperatureHalf,
    faDroplet,
    faWind,
    faEye,
    faGaugeHigh,
    faWater
} from '@fortawesome/free-solid-svg-icons'

import {useState, useContext} from 'react'
import { VariablesContext } from '../../Context/VariablesContext'


function Climate(){
    const { cityResult, setCityResult, apiKey , weatherData, setWeatherData} = useContext(VariablesContext)

    return(
        <div className={styles.all_cards}>
            <div className={styles.row_cards}>
                <CardClimate icon={faTemperatureHalf} infoName={"FEELS LIKE"}  infoNumber={weatherData?.feels} infoType={"°C"}/>
                <CardClimate icon={faDroplet} infoName={"HUMIDITY"}  infoNumber={weatherData?.humidity} infoType={"%"}/>
                <CardClimate icon={faWind} infoName={"WIND"}  infoNumber={weatherData?.wind} infoType={"km/h"}/>
            </div>

            <div className={styles.row_cards}>
                <CardClimate icon={faEye} infoName={"VISIBILITY"}  infoNumber={weatherData?.visibility} infoType={"km"}/>
                <CardClimate icon={faGaugeHigh} infoName={"PRESSURE"}  infoNumber={weatherData?.pressure} infoType={"hPa"}/>
                <CardClimate icon={faWater} infoName={"SEA LEVEL"}  infoNumber={weatherData?.sea_level} infoType={"hPa"}/>
            </div>
        </div>
    )
}

export default Climate