import { useParams } from 'react-router'
import { ListaDeCard } from '../../components/ListaDeCard'
import { getMoviesByGenre } from '../../helpers/getMoviesZod' 
import './index.css'
import { getUserById } from '../../helpers/getUsersZod'
export const User = ()=>{
  const {id} = useParams()
  let user = getUserById(Number(id))
  return(
    <>
      <div>
        <div className='user-conteiner'>
            <img src={user.profilePicUrl} alt="" />
            <div className='items'>
              <div>
                <h1>{user.username}</h1>
                <span className='seguidores'>{user.followers} seguidores</span>
              </div>
              <p>{user.bio}</p>
              <h3>Meu gênero favorito é {user.favoriteGenre}</h3>
            </div>
        </div>
        <div className='favoritos'>
          <h1>Filmes favoritos</h1>
          <ListaDeCard lista = {getMoviesByGenre(user.favoriteGenre)}/>
        </div>
      </div>
    </>
  )
} 