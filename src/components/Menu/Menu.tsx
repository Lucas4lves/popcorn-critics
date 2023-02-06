import './menu.css'
import { AiFillHome } from 'react-icons/ai';
import logo from'../../assets/logo-popcorn.svg'
import { Link } from 'react-router-dom';
import { users } from '../../data/users';


//menu lateral da aplicação
export const Menu = ({setFilter}:any)=>{
  return(
    <>
      <div className='menu-area'>
          <Link to={'/'} className = 'link'>
          <div className='logo-container'>
              <img src={logo} alt=""  className='logo'/>
              <div>
                  POPCORN'<span className='N'>N</span> CRITICS
              </div>
          </div>
          </Link>
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
          <img src={users[3].profilePicUrl} alt="" />
          <div>
            <Link to={'/user/4'} className = 'link'><div>{users[3].username}</div></Link>
            <h4 className='genero'>{users[3].favoriteGenre}</h4>
          </div>
      </div>
    </>
  )
}