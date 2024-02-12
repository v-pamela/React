import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const shipping = 2000;
  const addToCart = (product) => {
    let exist = isInCart(product.id);

    if (exist) {
      let elementExist = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });
      setCart(elementExist);
      localStorage.setItem("cart", JSON.stringify(elementExist));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };
  //funcion si existe el producto en el carrito
  const isInCart = (id) => {
    let exist = cart.some((element) => element.id === id);
    return exist;
  };
  //funcion encontrar el producto para detectar la cantidad
  const getQuantityById = (id) => {
    let productFound = cart.find((element) => element.id === id);
    return productFound?.quantity;
  };
  //borrar productos del carrito
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  // borrar un elemento del carrito
  const deleteProductById = (id) => {
    let productFound = cart.filter((product) => product.id !== id);
    setCart(productFound);
    localStorage.setItem("cart", JSON.stringify(productFound));
  };
  //obtener el total del carrito
  const getTotalPrice = () => {
    let total = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    return total;
  };

  //obtener cantidad de elementos
  const getTotalQuantity = () => {
    let total = cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return total;
  };
  let data = {
    cart,
    addToCart,
    getQuantityById,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
    shipping,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
