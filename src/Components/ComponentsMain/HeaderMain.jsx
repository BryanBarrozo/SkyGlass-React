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


import {useState ,useContext} from "react"

import { VariablesContext } from '../../Context/VariablesContext'


function HeaderMain(){
    const { cityResult, setCityResult, apiKey } = useContext(VariablesContext)

    const [suggestion, setSuggestion] = useState([])
    const [cityInput, setCityInput] = useState("")
    

    async function SearchCity(e){

        setCityInput(e.target.value)
        
        const value = e.target.value
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=3&appid=${apiKey}`);
        const data = await response.json()

        const newData = data.slice(0,3).map((item) =>({
            city: item.local_names?.en || item.name,
            country: item.country,
        }))

        setSuggestion(newData)
        }


    return(
        <header className={styles.main_header}>
            <div>
                <div className={styles.div_search}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.faGlass}/>
                    <input 
                    onChange={SearchCity}
                    value={cityInput}
                    type='text' 
                    placeholder='Search for cities...'
                    />
                </div>
                <div className={styles.suggestions}>
                    {suggestion.length > 0 &&(

                        suggestion.map((item, index)=>{
                            return(
                                <SuggestionsCard
                                onClick={()=>{
                                    setCityResult(item.city);
                                    setSuggestion("");
                                    setCityInput("")
                                }}
                                key={index}
                                city={item.city}
                                country={item.country}
                                />
                            )
                        })  

                    )}
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