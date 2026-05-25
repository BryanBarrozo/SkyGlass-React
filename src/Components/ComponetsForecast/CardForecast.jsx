import styles from './CardForecast.module.css'

function CardForecast(){
    return(
        <div className={styles.card}>
            <h2>Hora</h2>
            <img src="" alt="Weather icon forecast"/>
            <h3>30C</h3>
        </div>
    )
}

export default CardForecast;