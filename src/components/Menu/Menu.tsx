import './menu.css'
import { AiFillHome } from 'react-icons/ai';
import logo from'../../assets/logo-popcorn.svg'
//menu lateral da aplicação
export const Menu = ({setFilter}:any)=>{
  return(
    <>
      <div className='menu-area'>
          <div className='logo-container'>
              <img src={logo} alt=""  className='logo'/>
              <div>
                  POPCORN'<span className='N'>N</span> CRITICS
              </div>
          </div>
          <div className='items-area'>
            <ul>
              <li onClick={()=> setFilter('all')}>Todos</li>
              <li onClick={()=> setFilter('action')}>Ação</li>
              <li onClick={()=> setFilter('romance')}>Romance</li>
              <li onClick={()=> setFilter('terror')}>Terror</li>
              <li onClick={()=> setFilter('drama')}>Drama</li>
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