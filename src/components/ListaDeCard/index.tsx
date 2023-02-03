import './listadecard.css'
import { CardFilme } from '../CardFilme';
import { objMovies,getMoviesById } from '../../helpers/getMovies';
import {} from '../../helpers/getMovies'
export const ListaDeCard = ()=>{
  let arr = [8,9,5,7,9,10]
  return(
    <>
      <div className="list-container">
        {arr.map( i => 
           <CardFilme obj = {getMoviesById(i)[0]}/>
        )}
      </div>
    </>
  )
}