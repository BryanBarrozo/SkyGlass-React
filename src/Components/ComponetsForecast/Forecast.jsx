import CardForecast from "./CardForecast"

import styles from "./Forecast.module.css"

function Forecast(){
    return(
        <div className={styles.container}>
            <h1>24-HOUR FORECAST</h1>
            <div className={styles.cards}>

                <CardForecast/>
                <CardForecast/>
                <CardForecast/>
                <CardForecast/>
                <CardForecast/>

            </div>
        </div>
    )
}

export default Forecast;