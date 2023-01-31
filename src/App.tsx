import './index.css'
import { Menu } from './components/Menu/Menu'
import { Home } from './pages/Home/Home'
import { useState } from 'react'
import { Filme } from './pages/Filme'
import { objMovies } from './helpers/getMovies';


function App() {
  const [filtro,setFiltro] = useState('all')
  return (
    <div className="App">
      <Menu setFilter = {setFiltro}/>
      {/* <Home filtrostate = {filtro} setFilter = {setFiltro}/> */}
      <Filme filme = {objMovies[6]}/>
    </div>
  )
}

export default App
