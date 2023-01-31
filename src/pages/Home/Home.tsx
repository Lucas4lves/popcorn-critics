import { Destaques } from "../../components/Destaques/Destaques"
import { GridDeCard } from "../../components/GridDeCard"
import { ListaDeCard } from "../../components/ListaDeCard/index"
import './home.css'


export const Home = ({filtrostate}:any)=>{
  function view(){
    if(filtrostate == 'all'){
      return (
        <div>
          <Destaques/>
            <ListaDeCard />
        </div>
      )
    }  
    else{
      return(
        <GridDeCard cat = {filtrostate} />
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