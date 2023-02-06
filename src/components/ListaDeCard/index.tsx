import './listadecard.css'
import { CardFilme } from '../CardFilme';
import { zodMovies,getMoviesById, getMoviesByGenre } from "../../helpers/getMoviesZod";
export const ListaDeCard = ({lista}:any)=>{
  return(
    <>
      <div className="list-container">
        {lista.map( item => 
           <CardFilme obj = {item}/>
        )}
      </div>
    </>
  )
}