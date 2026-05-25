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

function Climate(){
    return(
        <div className={styles.all_cards}>
            <div className={styles.row_cards}>
                <CardClimate icon={faTemperatureHalf} infoName={"FEELS LIKE"}  infoType={"°C"}/>
                <CardClimate icon={faDroplet} infoName={"HUMIDITY"}  infoType={"%"}/>
                <CardClimate icon={faWind} infoName={"WIND"}  infoType={"km/h"}/>
            </div>

            <div className={styles.row_cards}>
                <CardClimate icon={faEye} infoName={"VISIBILITY"}  infoType={"km"}/>
                <CardClimate icon={faGaugeHigh} infoName={"PRESSURE"}  infoType={"hPa"}/>
                <CardClimate icon={faWater} infoName={"SEA LEVEL"}  infoType={"hPa"}/>
            </div>
        </div>
    )
}

export default Climate