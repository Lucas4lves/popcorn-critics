
import './listadecard.css'
import { CardFilme } from '../CardFilme';
import { objMovies } from '../../helpers/getMovies';
import { getMoviesById } from '../../helpers/getMovies';
export const ListaDeCard = ()=>{
  let lista = objMovies
  let arr = [6,3,5,7,9,10]

  return(
    <>
      <div className="list-container">
        {arr.map( i => 
           <CardFilme obj = {objMovies[i]}/>
        )}
      </div>
    </>
  )
}