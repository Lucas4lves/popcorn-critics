import { Destaques } from "../../components/Destaques/Destaques"
import { ListaDeCard } from "../../components/ListaDeCard/index.tsx"
import './home.css'


export const Home = ()=>{
  return(
    <>
      <div className="home">
        <Destaques/>
        <ListaDeCard/>
      </div>
    </>
  )
}