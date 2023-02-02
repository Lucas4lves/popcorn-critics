import { useParams } from "react-router"
import { Destaques } from "../../components/Destaques/Destaques"
import { GridDeCard } from "../../components/GridDeCard"
import { ListaDeCard } from "../../components/ListaDeCard/index"
import './home.css'


export const Home = ()=>{
  const {filtro} = useParams()
  function view(){
    if(filtro == 'all'){
      return (
        <div>
          <Destaques/>
          <ListaDeCard />
        </div>
      )
    }  
    else{
      return(
        <GridDeCard cat = {filtro} />
      )
    }  
  }
  return(
    <>
      <div className="home">
        {view()}
      </div>
    </>
  )
}