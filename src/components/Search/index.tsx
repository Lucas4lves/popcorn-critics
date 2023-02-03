import './index.css'
import {objMovies, searchMovieByParam} from '../../helpers/getMovies'
import { ListaDeCard } from '../ListaDeCard'
import {useState} from 'react'
export const Search = ()=>{

  const [started,setStarted] =  useState(false)
  const [query,setQuery] = useState('')
  let teste = "teste"
  function search(){
    setStarted(true)
  }

  

  function renderizaResultado(x : any){
    if(started){
      return(
        <div>
          <div className='results'>
          <div>
              <h1>Resultados</h1>
            <ListaDeCard  />
          </div>
      </div>
      <div className='escurecedor'>

      </div>
        </div>
      )
    }
  }

  return(
    <>
      <div className='search-area longo'>
        <input type="text" value={query} onChange={(e)=> {
          setStarted(true)
          setQuery(e.target.value)
           } }/>
      </div>  
      {renderizaResultado(query)}
    </>
  )
}