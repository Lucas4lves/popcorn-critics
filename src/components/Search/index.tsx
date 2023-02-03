import './index.css'
import {objMovies, searchMovieByParam} from '../../helpers/getMovies'
import { ListaDeCard } from '../ListaDeCard'
import {useState} from 'react'
export const Search = ()=>{

  const [started,setStarted] =  useState(false)
  const [query,setQuery] = useState('')
  const [results, setResults] = useState([])
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
            <ListaDeCard lista={results}/>
          </div>
      </div>
      <div className='escurecedor' onClick={() => setStarted(false)}>

      </div>
        </div>
      )
    }
  }

  return(
    <>
      <div className='search-area longo'>
        <input type="text" value={query} onInput={(e) =>{
           setQuery(e.target.value)
           setResults(searchMovieByParam(query))
        }} onChange={()=> {
          setStarted(true)
           }}/>
      </div>  
      {started && renderizaResultado(query)}
    </>
  )
}