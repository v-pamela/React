import { Button, Typography } from "@material-tailwind/react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
const Counter = ({ sumar, restar, counter, onAdd, stock }) => {
  return (
    <div className="flex flex-col jusfity-center content-center">
      <div className="flex  max-w-[100px] items-center h full text-primary font-medium mb-4">
        <div className="flex-1 h-full flex justify-center items-center px-2">
          <Button onClick={restar} ripple={false} variant="text" color="pink">
            <IoMdRemove size={20} />
          </Button>
        </div>
        <div className="h-full flex justify-center items-center px-2">
          <Typography variant="h6" className="text-pinkLogo">
            {counter}
          </Typography>
        </div>
        <div className=" flex-1 h-full flex justify-center items-center px-2">
          {stock === counter ? (
            <Button
              onClick={sumar}
              ripple={true}
              color="pink"
              variant="text"
              disabled
            >
              <IoMdAdd size={20} />
            </Button>
          ) : (
            <Button onClick={sumar} ripple={false} variant="text" color="pink">
              <IoMdAdd size={20} />
            </Button>
          )}
        </div>
      </div>
      <Button
        ripple={true}
        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 w-full lg:max-w-[200px] mt-4"
        onClick={() => onAdd(counter)}
      >
        Añadir al carrito
      </Button>
    </div>
  );
};

export default Counter;
