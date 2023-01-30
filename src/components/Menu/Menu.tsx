import './menu.css'
import { AiFillHome } from 'react-icons/ai';
import logo from'../../assets/logo-popcorn.svg'
//menu lateral da aplicação
export const Menu = ()=>{
  return(
    <>
      <div className='menu-area'>
          <div className='logo-container'>
              <img src={logo} alt=""  className='logo'/>
              <div>
                  POPCORN CRITICS
              </div>
          </div>
          <div className='items-area'>
            <ul>
              <li>Todos</li>
              <li>Ação</li>
              <li>Romance</li>
              <li>Terror</li>
              <li>Drama</li>
            </ul>
          </div>
      </div>

      <div className='user-area'>
          <img src="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png" alt="" />
          <div>
            <div>Monkey D. Luffy</div>
            <h4 className='genero'>Ação</h4>
          </div>
      </div>
    </>
  )
}