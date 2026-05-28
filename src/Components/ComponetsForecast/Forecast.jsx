import CardForecast from "./CardForecast"

import styles from "./Forecast.module.css"

import {useContext} from "react"
import { VariablesContext } from '../../Context/VariablesContext'

function Forecast(){

    const {dataForecast, setDataForecast} = useContext(VariablesContext)

    const itens = dataForecast || []


    return(
        <div className={styles.container}>
            <h1>24-HOUR FORECAST</h1>
            <div className={styles.cards}>
                {itens.map((item, index) =>{
                    return(
                        <CardForecast 
                        key={index}
                        time={item.time} 
                        icon={item.icon} 
                        temp={item.temp}
                    />
                    )})
                }
            </div>
        </div>
    )
}

export default Forecast;
