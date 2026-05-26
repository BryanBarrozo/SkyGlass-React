import styles from './CardForecast.module.css'

function CardForecast({time, icon, temp}){
    return(
        <div className={styles.card}>
            <h2>{time}</h2>
            <img src={icon} alt="Weather icon forecast"/>
            <h3>{temp}°C</h3>
        </div>
    )
}

export default CardForecast;