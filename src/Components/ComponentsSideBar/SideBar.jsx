import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faCalendarDays,
    faLocationDot,
    faMap
} from '@fortawesome/free-solid-svg-icons'

import{faSlack} from '@fortawesome/free-brands-svg-icons'

import styles from './SideBar.module.css'

function SideBar(){

    return(
        <aside className={styles.side_bar}>

            <header className={styles.head_aside}>
                <h1>SkyGlass</h1>
                <p>Local Weather</p>
            </header>

            <nav className={styles.links}>

                <a className={styles.actual_page}>
                    <FontAwesomeIcon icon={faSlack} className={styles.span.actual_page}/>
                    <span className={styles.span.actual_page}>DashBoard</span>
                </a>

                <a>
                    <FontAwesomeIcon icon={faCalendarDays} className={styles.icon_gray}/>
                    <span className={styles.span_gray}>Forecast</span>
                </a>

                <a>
                    <FontAwesomeIcon icon={faMap} className={styles.icon_gray}/>
                    <span className={styles.span_gray}>Radar Map</span>
                </a>

                <a>
                    <FontAwesomeIcon icon={faLocationDot} className={styles.icon_gray}/>
                    <span className={styles.span_gray}>Local Time</span>
                </a>
            </nav>
        </aside>
    )
}

export default SideBar