
import { AiFillStar } from 'react-icons/ai';



export const CardFilme = ({obj}:any)=>{
  let title = obj.genre
  return(
    <>
      <div className="card-container" style={{backgroundImage: `url(${obj.imgUrl})`}}>
      </div> 
      <div className='mascara'>
        <div className='card-rating'>{obj.rating}<span> <AiFillStar/> </span></div>
        <div>
          <div className='card-title'>{obj.title}</div>
          <div className='card-genero'>{obj.genre}</div>
        </div>
      </div>
    </>
  )
}