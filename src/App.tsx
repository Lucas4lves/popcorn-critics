import './index.css'
import { Menu } from './components/Menu/Menu'
import { Home } from './pages/Home/Home'
import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes} from "react-router-dom"


function App() {
  const [filtro,setFiltro] = useState('all')
  return (
    <div className="App">
      <BrowserRouter>
        <Menu setFilter = {setFiltro}/>
        <Home filtrostate = {filtro} setFilter = {setFiltro}/>
      </BrowserRouter>
    </div>
  )
}

export default App
