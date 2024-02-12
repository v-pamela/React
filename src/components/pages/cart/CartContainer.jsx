import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Seguro deseas eliminar?",
      text: "Si haces click en 'eliminar' todos tus productos se eliminarán del carrito'",
      icon: "warning",
      showCancelButton: false,
      showDenyButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "Carrito eliminado!",
          text: "Tu carrito ha sido eliminado con éxito.",
          icon: "success",
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Operación cancelada",
          text: "Tu carrito no ha sido eliminado.",
          icon: "error",
        });
      }
    });
  };

  return (
    <Cart
      cart={cart}
      clearCartWithAlert={clearCartWithAlert}
      deleteProductById={deleteProductById}
      total={total}
    />
  );
};

export default CartContainer;
