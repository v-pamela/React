import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { Typography, Badge } from "@material-tailwind/react";
const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <Link to="/cart">
      <AiOutlineShoppingCart />
      <div className="absolute inline-flex items-center justify-center w-6 h-6 -top-2 -right-2">
        <Badge
          content={total}
          className="bg-pinkLogo border-2 border-pinkLogo font-bold text-white"
        >
          <span className="sr-only">Carrito</span>
        </Badge>
      </div>
    </Link>
  );
};

export default CartWidget;
