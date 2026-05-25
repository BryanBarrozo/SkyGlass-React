import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

import styles from './MainClimate.module.css'

function MainClimate(){
    return(
         <div className={styles.container_main}>
            <div className={styles.container_location}>

                <div className={styles.container_city}>
                    <FontAwesomeIcon icon={faLocationDot} className={styles.icon_city} />
                    <h1 className={styles.city_name}>LONDON, UK</h1>
                </div>

                <div className={styles.container_temp}>
                    <h2>24°C</h2>
                    <div>
                        <h3 >Party Cloud</h3>
                        <p>H: 28 L: 19</p>
                    </div>
                </div>

            </div>
            <img src="" alt="weather icon"/>
        </div>  
    )
}

export default MainClimate;