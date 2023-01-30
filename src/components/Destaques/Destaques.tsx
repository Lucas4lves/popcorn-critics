
import './destaques.css'


export const Destaques = ()=>{
  return(
    <>
      <div className='destaques-container'>
        <div className='destaques-area'>
            <div>
            <div className='destaque-item'>
              <img src="https://resizing.flixster.com/V_IXvNJzc4wSuIQFp0eXw6VrR8g=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzVjYTU1YjllLWU2MzItNDI5OS1hNzAzLWE4NGEzODczZGQ2MS5qcGc=" alt="" />
            </div>
              <div className='item-info'>
                <div className='title'>The menu</div>
                <div className='subtitle'>+7000 Pessoas estão falando sobre</div>
              </div> 
            </div> 
            <div>
            <div className='destaque-item'>
              <img src="https://resizing.flixster.com/vAMreOQVDjHxUb4UfMq3j0nRkKQ=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p23063500_i_h8_ac.jpg" alt="" />
            </div>
              <div className='item-info'>
                <div className='title'>Wednessday</div>
                <div className='subtitle'>+10000 Pessoas estão falando sobre</div>
              </div> 
            </div>             
        </div>
      </div>
    </>
  )
}