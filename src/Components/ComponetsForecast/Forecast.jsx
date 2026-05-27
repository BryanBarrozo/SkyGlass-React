import CardForecast from "./CardForecast"

import styles from "./Forecast.module.css"

import {useContext} from "react"
import { VariablesContext } from '../../Context/VariablesContext'

function Forecast(){

    const {dataForecast, setDataForecast} = useContext(VariablesContext)

    


    return(
        <div className={styles.container}>
            <h1>24-HOUR FORECAST</h1>
            <div className={styles.cards}>

                <CardForecast time={dataForecast?.time1} icon={dataForecast?.icon1} temp={dataForecast?.temp1}/>
                <CardForecast time={dataForecast?.time2} icon={dataForecast?.icon2} temp={dataForecast?.temp2}/>
                <CardForecast time={dataForecast?.time3} icon={dataForecast?.icon3} temp={dataForecast?.temp3}/>
                <CardForecast time={dataForecast?.time4} icon={dataForecast?.icon4} temp={dataForecast?.temp4}/>
                <CardForecast time={dataForecast?.time5} icon={dataForecast?.icon5} temp={dataForecast?.temp5}/>

            </div>
        </div>
    )
}

export default Forecast;
