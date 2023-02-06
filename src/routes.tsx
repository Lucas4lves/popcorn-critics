import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import { zodMovies } from "./helpers/getMoviesZod";

import { Filme } from "./pages/Filme";
import { Home } from "./pages/Home/Home";
import { Menu } from "./components/Menu/Menu";
import { User } from "./pages/User";
export const AppRouter = ()=>{
  const [filtro,setFiltro] = useState('all')
  console.log(filtro);
  function mostra(){
    console.log(zodMovies);
  }
  mostra()
  return(
    <main className="App">
      <BrowserRouter>
        <Menu setFilter = {setFiltro}/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/:filtro" element = {<Home/>}/>
          <Route path="/movie/:id" element = {<Filme/>}/>
          <Route path="/user/:id" element = {<User/>}/>
          <Route path="*" element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}