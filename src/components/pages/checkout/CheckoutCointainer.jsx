import Checkout from "./Checkout";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { useContext, useState } from "react";
import {
  serverTimestamp,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { AiOutlineCheckCircle } from "react-icons/ai";

const CheckoutCointainer = () => {
  const [orderId, setOrderId] = useState(null);
  const { cart, getTotalPrice, shipping, clearCart } = useContext(CartContext);
  let total = getTotalPrice();
  let totalShipping = total + shipping;
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      province: "",
      city: "",
      direction: "",
      postcode: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: totalShipping,
        date: serverTimestamp(),
      };

      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((response) =>
        setOrderId(response.id)
      );

      cart.forEach((element) => {
        updateDoc(doc(db, "products", element.id), {
          stock: element.stock - element.quantity,
        });
      });

      clearCart();
    },
    validateOnChange: false,

    validationSchema: Yup.object({
      name: Yup.string("Solo se permiten caracteres alfabéticos")
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      lastName: Yup.string("Solo se permiten caracteres alfabéticos")
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      email: Yup.string()
        .email("El email no parece ser válido.")
        .required("El campo es obligatorio"),
      province: Yup.string("Solo se permiten caracteres alfabéticos")
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      city: Yup.string("Solo se permiten caracteres alfabéticos")
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      direction: Yup.string()
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      postcode: Yup.string()
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres"),
    }),
  });

  return (
    <>
      {orderId ? (
        <div className="container">
          <div className="flex flex-col items-center justify-center m-10 p-3 bg-gray-50">
            <AiOutlineCheckCircle size={120} className="mb-10 text-green-500" />
            <Typography variant="h4" className="text-center mt-1">
              ¡Compra realizada con éxito!
            </Typography>
            <Typography variant="lead" className="text-center mt-4 mb-1">
              Su orden de compra es: <strong>{orderId}</strong>.
            </Typography>
            <Typography
              variant="lead"
              className="text-center max-w-[600px] mt-4 mb-1"
            >
              Hemos recibido correctamente el pago de su compra y tu solicitud
              ha sido aprobada. Próximamente le notificaremos por email los
              datos de envío.
            </Typography>
            <Typography variant="lead" className="text-center mt-4 mb-1">
              ¡Muchas gracias por confiar en nosotros!
            </Typography>
            <Link to="/">
              <Button
                ripple={true}
                fullWidth={true}
                className=" flex items-center justify-center mt-10 bg-pinkLogo"
              >
                Continuar comprando
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <Checkout
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            cart={cart}
            total={total}
            shipping={shipping}
          />
        </>
      )}
    </>
  );
};

export default CheckoutCointainer;
