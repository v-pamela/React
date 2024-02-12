import { Link } from "react-router-dom";
import { Button, Typography, Tooltip } from "@material-tailwind/react";
import { BsFillTrashFill, BsCheckLg } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { BiSolidShoppingBags } from "react-icons/bi";

const Cart = ({ cart, clearCartWithAlert, deleteProductById, total }) => {
  return (
    <div className="container">
      {cart.length > 0 && (
        <div className="flex flex-row justify-between text-center">
          <Typography variant="h3" className="text-pinkLogo text-center my-3">
            Productos
          </Typography>

          <Tooltip content="Eliminar todos los productos del carrito">
            <Button
              variant="text"
              ripple={true}
              fullWidth={false}
              className="shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              onClick={clearCartWithAlert}
            >
              <BsFillTrashFill size={15} />
            </Button>
          </Tooltip>
        </div>
      )}
      {cart.map((product) => {
        return (
          <div
            key={product.id}
            className="relative border-t border-blue-gray-50 py-1"
          >
            <div className="flex my-3 ">
              <Link to={`/itemDetail/${product.id}`}>
                <img src={product.img} alt="" className="w-32 rounded-md" />
              </Link>
              <div className="ml-5 ">
                <div className="flex flex-col">
                  <Typography variant="h4">{product.title}</Typography>
                  <Typography variant="h6" color="gray">
                    Detalles del producto
                  </Typography>
                  <Typography color="gray">
                    Categoría: {product.category}
                  </Typography>
                  <Typography color="gray" className="flex items-center">
                    Stock disponible: {product.stock}{" "}
                    <BsCheckLg className="text-green-600" />
                  </Typography>
                  <Typography color="gray">
                    Cantidad: {product.quantity}
                  </Typography>
                </div>
                <Typography color="gray" variant="h5" className="m-1">
                  {" "}
                  ${product.price}
                </Typography>
                <div className="absolute bottom-0 right-0">
                  <Tooltip content="Eliminar este producto del carrito">
                    <Button
                      variant="text"
                      ripple={true}
                      fullWidth={false}
                      className="shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 rounded-full flex items-end"
                      onClick={() => deleteProductById(product.id)}
                    >
                      <BsFillTrashFill size={15} />
                    </Button>
                  </Tooltip>
                </div>
              </div>
              <div className=" absolute bottom-30 right-0 md:flex"></div>
            </div>
          </div>
        );
      })}
      {cart.length !== 0 ? (
        <div>
          <div className="border-t border-blue-gray-50 py-1 flex justify-between mt-3 ">
            <div className="my-3">
              <Typography variant="h5" className="text-left">
                Subtotal
              </Typography>
              <Typography
                color="gray"
                className="text-left text-blue-gray-500 flex items-center"
              >
                El envío se calculará al finalizar la compra.
              </Typography>
            </div>
            <Typography variant="h5" className="text-center my-3">
              ${total}
            </Typography>
          </div>
          <Link to="/checkout">
            <Button
              ripple={true}
              fullWidth={true}
              className=" flex items-center justify-center"
            >
              Finalizar Compra
            </Button>
          </Link>
          <div className="flex items-center justify-center mt-5 gap-3"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center m-10 p-3 bg-gray-50">
          <BiSolidShoppingBags size={100} className="mb-10 text-gray-600" />
          <Typography variant="h4" className="text-center mt-1">
            ¡Empieza un carrito de compras!
          </Typography>
          <Typography variant="lead" className="text-center mt-4 mb-1">
            Sumá productos y distruta.
          </Typography>
          <Link to="/">
            <Button
              ripple={true}
              fullWidth={true}
              className=" flex items-center justify-center mt-10 bg-pinkLogo"
            >
              Descubrir productos
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
