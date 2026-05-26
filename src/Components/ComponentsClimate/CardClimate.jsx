import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './CardClimate.module.css'

function CardClimate({icon, infoName,infoNumber, infoType}){
    return(
        
        <div className={styles.card}>
            <div>
                <FontAwesomeIcon icon={icon} className={styles.icon}/>
                <h2>{infoName}</h2>
            </div>
            <h3>{infoNumber}{infoType}</h3>
        </div>
        )
}

export default CardClimate