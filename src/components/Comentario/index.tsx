import './comentario.css'
import {useState} from 'react'
import Critic from '../../helpers/Critic';
import { AiOutlineLike } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
//deslike
import { AiOutlineDislike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';

export const Comentario = ({obj} : any, key : any)=>{
  // id content respostas author numero de likes e deslikes
  const [isLike,setIsLike] = useState(false)
  const [isDeslike,setIsDeslike] = useState(false)
  const [likes, setLikes] = useState(0);

  function incrementaLike()
  {
    setLikes(
      obj.likes++
    )
    console.log(obj);
    
  }
  
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
      <div key={key} className='comentario-area'>
        <img src="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png" alt="" className='user-img'/>
        <div>
        <h4>Monkey D. Luffy</h4>
        <p>{obj.content}</p>
        </div>
        <div className='like' onClick={()=>{
              setIsLike(!isLike)
              incrementaLike()
              }}>
          {mostraLike()}
        </div>
        <div className='like' onClick={()=>setIsDeslike(!isDeslike)}>
          {mostraDeslike()}
        </div>
      </div>
      
    </>
  )
}