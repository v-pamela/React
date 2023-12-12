import './App.css'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CardUser from './components/CardUser/CardUser'

function App() {

  return ( 
    <div className='App'>    

      <NavBar/>
      <ItemListContainer greeting="Vite+MUI+Css personalizado+NB"/>
      <div className='CardContainer'> 
      <div className='userCard'>    
        <CardUser
        name="Ahora voy bien"
        date="14/09/2023"
        description="Esta es una card de prueba"
        img="https://th.bing.com/th/id/OIP.iBd9dMuqahapIY1A_vAbiAHaJS?w=134&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        />
      </div>
      <div className='userCard'>    
        <CardUser
        name="Acá irían los productos"
        date="14/12/2023"
        description="Iría la dexcripción del producto"
        img="https://th.bing.com/th/id/OIP.iBd9dMuqahapIY1A_vAbiAHaJS?w=134&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        />
      </div>
      <div className='userCard'>    
        <CardUser
        name="Cómo modifico más"
        date="1/03/2023"
        description="Ver como mejorar esto"
        img="https://th.bing.com/th/id/OIP.iBd9dMuqahapIY1A_vAbiAHaJS?w=134&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        />
      </div>
      </div>
    </div>  
  )
}

export default App