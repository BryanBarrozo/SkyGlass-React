import styles from "./SuggestionsCard.module.css"

function Suggestions({city, country}){
    return(
        <div className={styles.card}>
            <h2>{city} {country}</h2>
        </div>
    )
}

export default Suggestions