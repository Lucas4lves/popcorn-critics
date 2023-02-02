import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export const CardFilme = ({obj}:any)=>{
  return(
          <>
          <Link to={`/movie/${obj.id}`} className='link'>
          <div className="card-container" style={{backgroundImage: `url(${obj.imgUrl})`}}>
          </div> 
          </Link>
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