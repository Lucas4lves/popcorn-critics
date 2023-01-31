import './index.css'
import { Menu } from './components/Menu/Menu'
import { Home } from './pages/Home/Home'
import { useState } from 'react'

function App() {
  const [filtro,setFiltro] = useState('all')
  return (
    <div className="App">
      <Menu setFilter = {setFiltro}/>
      <Home filtrostate = {filtro} setFilter = {setFiltro}/>
    </div>
  )
}

export default App
