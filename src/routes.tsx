import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'

import { Filme } from "./pages/Filme";
import { Home } from "./pages/Home/Home";
import { Menu } from "./components/Menu/Menu";
export const AppRouter = ()=>{
  const [filtro,setFiltro] = useState('all')
  console.log(filtro);
  
  return(
    <main className="App">
      <BrowserRouter>
        <Menu setFilter = {setFiltro}/>
        <Routes>
          <Route path="/" element = {<Home filtrostate = {filtro}/>}/>
          <Route path="/movie/:id" element = {<Filme/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}