import { AiFillStar } from 'react-icons/ai';
import { BrowserRouter, Link, Route, Routes} from "react-router-dom"
export const CardFilme = ({obj}:any)=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
        <Route path={`movies/${obj.id}`} />
        </Routes>
        <Link to={"movies/" + obj.id}/>
        <div className="card-container" style={{backgroundImage: `url(${obj.imgUrl})`}}>
        </div> 
        <div className='mascara'>
          <div className='card-rating'>{obj.rating}<span> <AiFillStar/> </span></div>
          <div>
            <div className='card-title'>{obj.title}</div>
            <div className='card-genero'>{obj.genre}</div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}