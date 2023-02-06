import { CardFilme } from "../CardFilme"
import '../ListaDeCard/listadecard.css'
import { zodMovies } from "../../helpers/getMoviesZod";
import {getMoviesByGenre} from "../../helpers/getMoviesZod";

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