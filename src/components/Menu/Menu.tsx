import './menu.css'
import { AiFillHome } from 'react-icons/ai';
import logo from'../../assets/logo-popcorn.svg'
import { Link } from 'react-router-dom';



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
              <Link to={'/all'} className='link'><li>Todos</li></Link>
              <Link to={'/action'} className='link'><li>Ação</li></Link>
              <Link to={'/romance'} className='link'><li>Romance</li></Link>
              <Link to={'/terror'} className='link'><li>Terror</li></Link>
              <Link to={'/drama'} className='link'><li>Drama</li></Link> 
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