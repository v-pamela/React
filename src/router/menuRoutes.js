import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer";
import Checkout from "../components/pages/checkout/Checkout";
import CheckoutCointainer from "../components/pages/checkout/CheckoutCointainer";
export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutCointainer,
  },
];
