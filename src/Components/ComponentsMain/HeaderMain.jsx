import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faMagnifyingGlass,
    faGear,
    faUser
} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'

import styles from './HeaderMain.module.css'

function HeaderMain(){
    return(
        <header className={styles.main_header}>
            <div>
                <div className={styles.div_search}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.faGlass}/>
                    <input 
                    type="text" 
                    typeof='text' 
                    placeholder='Search for cities...'
                    />
                </div>
                <div id="suggestions"></div>
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