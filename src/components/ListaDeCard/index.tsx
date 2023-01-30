
import './listadecard.css'
import { AiFillStar } from 'react-icons/ai';
import { CardFilme } from '../CardFilme';
import { objMovies } from '../../helpers/getMovies';
export const ListaDeCard = ()=>{

  let arr = [1,3,5,7,9,10]

  return(
    <>
      <div className="list-container">
        {arr.map((i)=>{
          
        })}
      </div>
    </>
  )
}