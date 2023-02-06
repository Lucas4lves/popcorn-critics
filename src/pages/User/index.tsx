import { ListaDeCard } from '../../components/ListaDeCard'
import { getMoviesByGenre } from '../../helpers/getMoviesZod' 
import './index.css'

export const User = ()=>{
  return(
    <>
      <div>
        <div className='user-conteiner'>
            <img src="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png" alt="" />
            <div className='items'>
              <div>
                <h1>Macaco do Luffy</h1>
                <span className='seguidores'>95 seguidores</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem, ducimus natus libero, quaerat vero et laudantium commodi quo quos odio explicabo aspernatur harum saepe necessitatibus laboriosam? Delectus, impedit nobis!</p>
              <h3>Meu gênero favorito é Ação</h3>
            </div>
        </div>
        <div className='favoritos'>
          <h1>Filmes favoritos</h1>
          <ListaDeCard lista = {getMoviesByGenre('action')}/>
        </div>
      </div>
    </>
  )
} 