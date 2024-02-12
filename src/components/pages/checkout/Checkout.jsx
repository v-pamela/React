import {
  Card,
  CardBody,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Checkout = ({
  handleChange,
  handleSubmit,
  errors,
  cart,
  total,
  shipping,
}) => {
  return (
    <div className="container flex justify-center mt-10 mb-10">
      <Card className="w-full items-center justify-center py-3">
        <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="justify-center">
            <form
              className="w-full h-full flex flex-col gap-2 w-full justify-center text-center"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="flex gap-1">
                <div>
                  <Input
                    label="Nombre"
                    name="name"
                    containerProps={{ className: "min-w-[72px]" }}
                    onChange={handleChange}
                    error={errors.name ? true : false}
                  />
                  <Typography
                    variant="small"
                    color="red"
                    className="flex flex-col font-normal"
                  >
                    {errors.name}
                    <span></span>
                  </Typography>
                </div>
                <div>
                  <Input
                    label="Apellido"
                    name="lastName"
                    containerProps={{ className: "min-w-[72px]" }}
                    onChange={handleChange}
                    error={errors.lastName ? true : false}
                  />
                  <Typography
                    variant="small"
                    color="red"
                    className="flex flex-col font-normal"
                  >
                    {errors.lastName}
                    <span></span>
                  </Typography>
                </div>
              </div>
              <Input
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
                error={errors.email ? true : false}
              />
              <Typography
                variant="small"
                color="red"
                className="flex font-normal"
              >
                {errors.email}
                <span></span>
              </Typography>
              <Input
                label="Provincia"
                name="province"
                onChange={handleChange}
                error={errors.province ? true : false}
              />
              <Typography
                variant="small"
                color="red"
                className="flex font-normal"
              >
                {errors.province}
                <span></span>
              </Typography>
              <div className="flex gap-1">
                <div>
                  <Input
                    label="Ciudad"
                    name="city"
                    containerProps={{ className: "min-w-[72px]" }}
                    onChange={handleChange}
                    error={errors.city ? true : false}
                  />
                  <Typography
                    variant="small"
                    color="red"
                    className="flex font-normal"
                  >
                    {errors.city}
                    <span></span>
                  </Typography>
                </div>
                <div>
                  <Input
                    label="Código Postal"
                    name="postcode"
                    containerProps={{ className: "min-w-[72px]" }}
                    onChange={handleChange}
                    error={errors.postcode ? true : false}
                  />
                  <Typography
                    variant="small"
                    color="red"
                    className="flex font-normal"
                  >
                    {errors.postcode}
                    <span></span>
                  </Typography>
                </div>
              </div>
              <Input
                label="Dirección"
                name="direction"
                onChange={handleChange}
                error={errors.direction ? true : false}
              />
              <Typography
                variant="small"
                color="red"
                className="flex font-normal"
              >
                {errors.direction}
                <span></span>
              </Typography>
              <Button className="color-pinkLogo" type="submit">
                Comprar
              </Button>
            </form>
          </div>
          <div className=" flex flex-col gap-6 bg-gray">
            <Typography variant="h3" className="text-pinkLogo">
              Resumen de compra
            </Typography>
            <div className="">
              <div className="">
                {cart.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="flex justify-between border-t border-blue-gray-50 py-1 "
                    >
                      <Link to={`/itemDetail/${product.id}`}>
                        <img
                          className="w-20 rounded-md mt-2"
                          src={product.img}
                          alt=""
                        />
                      </Link>
                      <div className="">
                        <Typography variant="h6" className="items-center">
                          {product.title} x {product.quantity}
                        </Typography>
                        <div className="text-end items-end order-last">
                          <Typography>
                            ${product.price * product.quantity}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between mt-3">
                <Typography variant="h6">Envío</Typography>
                <Typography className="text-end items-end order-last">
                  ${shipping}
                </Typography>
              </div>
            </div>
            <div className="border-t border-blue-gray-100 py-2 ">
              <div className="flex justify-between">
                <Typography variant="h5">Total</Typography>
                <Typography
                  variant="h5"
                  className="text-end items-end order-last"
                >
                  $ {total + shipping}
                </Typography>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Checkout;
