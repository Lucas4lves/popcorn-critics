import './index.css'
import { Menu } from './components/Menu/Menu'
import { Home } from './pages/Home/Home'
import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes} from "react-router-dom"


function App() {
  
  return (
    <div className="App">
<<<<<<< HEAD
      <Menu setFilter = {setFiltro}/>
      {/* <Home filtrostate = {filtro} setFilter = {setFiltro}/> */}
      <Filme/>
=======
      <BrowserRouter>
        <Menu setFilter = {setFiltro}/>
        <Home filtrostate = {filtro} setFilter = {setFiltro}/>
      </BrowserRouter>
>>>>>>> 5a8345f7c9127888a6cd21cc9586cec2aa9a0228
    </div>
  )
}

export default App
