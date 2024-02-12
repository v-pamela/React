import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import CounterContainer from "../../common/counter/CounterContainer";
import { BsCheckLg } from "react-icons/bs";
const ItemDetail = ({ productSelected, onAdd, initial }) => {
  return (
    <section className="pt-12 pb-12 lg-py-32 flex items-center">
      <div className="container mb-2 mt-2">
        <Card className="flex flex-col lg:flex-row w-full items-center ">
          <CardHeader
            shadow={true}
            floated={false}
            className="m-0 lg:rounded-r-none "
          >
            <img
              src={productSelected.img}
              alt="card-image"
              className="object-cover lg:max-w-[400px] md:max-w-[300px] sm:max-w-[300px]"
            />
          </CardHeader>
          <CardBody className="flex-1 text-center lg:text-left lg:max-w-[400px]">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              <span></span>
              {productSelected.title}
            </Typography>
            <Typography color="gray" className="font-bold text-lg mb-4">
              $ {productSelected.price}
            </Typography>
            <Typography variant="h6" color="gray">
              Detalles del producto
            </Typography>
            <Typography color="gray">
              Categoría: {productSelected.category}
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
              <span></span>
              {productSelected.description}
            </Typography>
            <div className="">
              <Typography
                color="gray"
                className=" mb-4 flex items-center text-center justify-center lg:justify-start"
              >
                Stock disponible: {productSelected.stock}
                <BsCheckLg className="text-green-600" />
              </Typography>
            </div>
            <div className="mb-4">
              {initial && (
                <Typography variant="h6" className="text-pinkLogo">
                  Ya tienes {initial} unidad/es en el carrito
                </Typography>
              )}
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <CounterContainer
                stock={productSelected.stock}
                onAdd={onAdd}
                initial={initial}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default ItemDetail;
