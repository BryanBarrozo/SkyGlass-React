import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './CardClimate.module.css'

function CardClimate({icon, infoName,infoType}){
    return(
        
        <div className={styles.card}>
            <div>
                <FontAwesomeIcon icon={icon} className={styles.icon}/>
                <h2>{infoName}</h2>
            </div>
            <h3>Informação{infoType}</h3>
        </div>
        )
}

export default CardClimate