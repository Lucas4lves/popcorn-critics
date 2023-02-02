import './comentario.css'

export const Comentario = ()=>{
  // id content respostas author numero de likes e deslikes
  return(
    <>
      <div className='comentario-area'>
        <img src="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png" alt="" className='user-img'/>
        <div>
        <h4>Monkey D. Luffy</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste saepe omnis exercitationem odit recusandae amet molestiae maiores dolor incidunt, consequatur, mollitia dolorem? Cupiditate sed incidunt asperiores a aperiam harum.</p>
        </div>
        <div className='like'>
          like
        </div>
        <div className='like'>
          deslike
        </div>
      </div>
      
    </>
  )
}