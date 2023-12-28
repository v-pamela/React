import { useState } from 'react'
import './ItemListContainer.css'
import { useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() =>{

    const asyncFunc = categoryId ? getProductsByCategory : getProducts
    
    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [categoryId])
  return (
    <div className='ItemListContainer'>
      {/* aca falta configurar greeting */}
      <h1>{greeting} BIENVENIDOS</h1> 
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
