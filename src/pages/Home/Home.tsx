import { useParams } from "react-router"
import { Destaques } from "../../components/Destaques/Destaques"
import { GridDeCard } from "../../components/GridDeCard"
import { ListaDeCard } from "../../components/ListaDeCard/index"
import { Search } from "../../components/Search"
import './home.css'


export const Home = ()=>{
  const {filtro} = useParams() 
  console.log(filtro);
  
  function view(){
    if(filtro == undefined){
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
      <Search/>
    </>
  )
}