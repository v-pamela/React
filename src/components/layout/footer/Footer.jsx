import { Typography, Input, Button } from "@material-tailwind/react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full mx-auto">
      <div className=" p-4 md:py-8">
        <div className="flex flex-col items-center justify-center pt-10 pb-10">
          <strong>Sumate a nuestra comunidad</strong>
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            Suscribite, no te pierdas las novedades.
          </Typography>
          <div className="relative flex w-full max-w-[24rem] mt-2">
            <Input
              type="email"
              label="Ingresa tu Email"
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button size="sm" className="!absolute right-1 top-1 rounded">
              Suscribite
            </Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
            >
              &copy; 2024 
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <BsFacebook />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <BsInstagram />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <BsTwitter />
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
