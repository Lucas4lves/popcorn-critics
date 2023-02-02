import './index.css'
import { Menu } from './components/Menu/Menu'
import { Home } from './pages/Home/Home'
import { useState } from 'react'
import { Filme } from './pages/Filme'
import { objMovies } from './helpers/getMovies';


function App() {
  
  return (
    <div className="App">
      <Menu setFilter = {setFiltro}/>
      {/* <Home filtrostate = {filtro} setFilter = {setFiltro}/> */}
      <Filme/>
    </div>
  )
}

export default App
