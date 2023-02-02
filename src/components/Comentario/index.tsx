import './comentario.css'
import {useState} from 'react'
//like
import { AiOutlineLike } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
//deslike
import { AiOutlineDislike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';

export const Comentario = ()=>{
  // id content respostas author numero de likes e deslikes
  const [isLike,setIsLike] = useState(false)
  const [isDeslike,setIsDeslike] = useState(false)
  function mostraLike(){
    if(isLike && isDeslike == false){
      return <AiFillLike className='icon'/>
    }
    else{

      return <AiOutlineLike className='icon'/>
    }
  }
  function mostraDeslike(){
    if(!isDeslike){
      return <AiOutlineDislike className='icon'/>
      
    }
    else{
      return <AiFillDislike className='icon'/>
    }
  }
  return(
    <>
      <div className='comentario-area'>
        <img src="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png" alt="" className='user-img'/>
        <div>
        <h4>Monkey D. Luffy</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste saepe omnis exercitationem odit recusandae amet molestiae maiores dolor incidunt, consequatur, mollitia dolorem? Cupiditate sed incidunt asperiores a aperiam harum.</p>
        </div>
        <div className='like' onClick={()=>setIsLike(!isLike)}>
          {mostraLike()}
        </div>
        <div className='like' onClick={()=>setIsDeslike(!isDeslike)}>
          {mostraDeslike()}
        </div>
      </div>
      
    </>
  )
}