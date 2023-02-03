import './listadecard.css'
import { CardFilme } from '../CardFilme';
import { objMovies,getMoviesById, getMoviesByGenre } from '../../helpers/getMovies';
import {} from '../../helpers/getMovies'
export const ListaDeCard = ({lista})=>{
  return(
    <>
      <div className="list-container">
        {lista.map(item  => 
           <CardFilme obj = {item}/>
        )}
      </div>
    </>
  )
}