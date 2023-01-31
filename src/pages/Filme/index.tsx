import './filme.css'
import { AiFillStar } from 'react-icons/ai';
import { Comentario } from '../../components/Comentario';

export const Filme = ({filme}:any)=>{
  return(
    <>
      <div className="filme-info">
        <div className='filme-info-container'>
          <img src={filme.imgUrl} alt="" />
          <div>
            <div className='filme-info-title'>{filme.title}</div>
            <div className='filme-info-genero'>{filme.genre}</div>
            <p>{filme.synopsis}</p>
            <div className='card-rating'>{filme.rating}<span> <AiFillStar/> </span></div> 
          </div>
        </div>
        <div className='comentarios'>
          Comentarios
          <div className='novo-comentario'>
          <img src="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png" alt="" className='user-img'/>
          <textarea name="" id="" cols="30" rows="10" className='novo-comentario-input'></textarea>
          </div>
        </div>
        <Comentario/>
      </div>
    </>
  )
}