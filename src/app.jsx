import './App.css'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import swal from 'sweetalert'

function App() {

  swal("Consideraciones generales:" , "El CSS no está optimizado para que me sea más simple ver las clases. Este no es el estado final. Falta vincular el terminar compra con el carrito y armar la versión final de carrito. Los botones del NavBar son diferentes porque estoy probando cuál me interesa usar. El título estará vinculado a una prop a futuro");
  return ( 
    <div className='App'>  
      <BrowserRouter>
         <NavBar/>
          <Routes>
            <Route  path='/' element={<ItemListContainer />}/>
            <Route  path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route  path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route  path='*' element={<h1>404 Not found</h1>}/>
          </Routes>
      </BrowserRouter>
    </div>  
  )
}

export default App
