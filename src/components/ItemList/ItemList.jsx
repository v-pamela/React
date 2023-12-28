import Item from "../Item/Item"
import './ItemList.css'
/*Este es el componente
que se encarga de mostrar todos los productos*/ 

const ItemList = ({products}) => {
  return (
    <div className="ListGroup">
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList