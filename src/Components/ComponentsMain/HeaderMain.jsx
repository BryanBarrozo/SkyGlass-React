//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faMagnifyingGlass,
    faGear,
    faUser
} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'

//imports
import SuggestionsCard from './SuggestionsCard'
import styles from './HeaderMain.module.css'

import {useState} from "react"





function HeaderMain(){

    const apiKey = "688c0777584fd7164ff2dfe24c5ad896"

    const [city ,setCity] = useState()
    const [suggestion, setSuggestion] = useState([])

    async function SearchCity(e){

            setCity(e.target.value)
            const value = e.target.value

            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=3&appid=${apiKey}`);
            const data = await response.json()

            console.log(city)
            console.log(data)
            setSuggestion(data)

            console.log(data[0]?.local_names?.en || suggestion[0]?.name)
            console.log(data[0]?.country)
            console.log(data[1]?.local_names?.en || suggestion[1]?.name)
            console.log(data[2]?.local_names?.en || suggestion[2]?.name)
            
        }


    return(
        <header className={styles.main_header}>
            <div>
                <div className={styles.div_search}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.faGlass}/>
                    <input 
                    onChange={SearchCity}
                    name='city'
                    type='text' 
                    placeholder='Search for cities...'
                    />
                </div>
                <div className={styles.suggestions}>
                    {suggestion.length > 0 &&(
                        <>
                        <SuggestionsCard city={suggestion[0]?.local_names?.en} country={suggestion[0]?.country}/>
                        <SuggestionsCard city={suggestion[1]?.local_names?.en} country={suggestion[1]?.country}/>
                        <SuggestionsCard city={suggestion[2]?.local_names?.en} country={suggestion[2]?.country}/>
                        </>
                    ) }
                </div>
            </div>


            <div className={styles.div_header_right}>

                <div className={styles.div_header_icons}>
                    <FontAwesomeIcon icon={faBell} className={styles.icons}/>
                    <FontAwesomeIcon icon={faGear} className={styles.icons}/>
                </div>

                <div  className={styles.div_header_user}>
                    <h2>User</h2>
                    <FontAwesomeIcon icon={faUser} className={styles.faUser}/>
                </div>
            </div>   

        </header>
    )
}

export default HeaderMain