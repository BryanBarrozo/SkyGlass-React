
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import SideBar from './Components/ComponentsSideBar/SideBar'
import HeaderMain from './Components/ComponentsMain/HeaderMain'
import MainClimate from './Components/ComponentsMain/MainClimate'
import Forecast from './Components/ComponetsForecast/Forecast'
import Climate from './Components/ComponentsClimate/Climate'


function App() {
  

  return (
    <>
    <SideBar/>
    <main>
      <HeaderMain/>
      <MainClimate/>
      <Forecast/>
      <Climate/>
    </main>

    </>
  )
}

export default App
