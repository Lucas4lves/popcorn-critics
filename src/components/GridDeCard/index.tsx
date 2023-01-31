import { CardFilme } from "../CardFilme"
import '../ListaDeCard/listadecard.css'
import { objMovies } from '../../helpers/getMovies';
import {getMoviesByGenre} from '../../helpers/getMovies';

export const GridDeCard = ({cat}:any)=>{
  var filtrado:any = getMoviesByGenre(cat)
  return(
    <>
      <div className="grid-container">
      {filtrado.map( (item: any) => 
           <CardFilme obj = {item}/>
        )}
      </div>
    </>
  )
}