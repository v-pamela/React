import cart from './cart.svg';
import './CartWidget.css'
const CartWidget = () => {
  return (
    <div className='Cart'>
        <img src={cart}/>
        <span>0</span>
    </div>
  )
}

export default CartWidget