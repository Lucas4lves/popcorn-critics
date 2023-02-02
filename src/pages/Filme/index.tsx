import './filme.css'
import { AiFillStar } from 'react-icons/ai';
import { Comentario } from '../../components/Comentario';
import { useParams } from 'react-router';
import {getMoviesById} from '../../helpers/getMovies'
import Critic from '../../helpers/Critic';
import Critics from '../../helpers/Critics';
import { useState } from 'react';


export const Filme = ()=>{
  const {id} = useParams()
  const teste:any = getMoviesById(id)
  const filme = teste[0];

  const [critics, setCritics] = useState<any[]>([])

  function getCriticsContent()
  {
    let input : HTMLTextAreaElement = document.querySelector(".novo-comentario-input")!;
    let critic = new Critic(input.value);

    return critic;
  }
  
  function populateCritics()
  {
    setCritics([
      ...critics,
      getCriticsContent()
    ])
  }

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
         
            <div className='avaliacao'>
              <textarea name="" id="" className='novo-comentario-input'></textarea>
              <button onClick={populateCritics}>Enviar</button>
            </div>
          </div>
        </div>
        {critics.map((critic, index) => {
          return <Comentario obj={critic} key ={index}  />
        })}
      </div>
    </>
  )
}