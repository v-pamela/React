import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Breadcrumbs,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ProductCard = ({ item }) => {
  return (
    <div>
      <div className="group transition">
        <Card className=" w-90">
          <CardHeader shadow={false} floated={false} className="h-90">
            <img
              src={item.img}
              alt="card-image"
              className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 items-center text-center">
              <Typography className="text-2xl text-black">
                {item.title}
              </Typography>
              <Typography color="gray" className="font-bold text-lg">
                $ {item.price}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {item.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex mb-2 md:flex justify-between items-center justify-center">
            {item.stock > 0 ? (
              <Link to={`/itemDetail/${item.id}`}>
                <Button
                  ripple={true}
                  fullWidth={true}
                  className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                  Ver detalle
                </Button>
              </Link>
            ) : (
              <Button disabled>Sin Stock</Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProductCard;
