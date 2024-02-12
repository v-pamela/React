import { BiSearch, BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
const MobNavbar = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection).then((response) => {
      let categoriesDataBase = response.docs.map((category) => {
        return { ...category.data(), id: category.id };
      });
      setCategories(categoriesDataBase);
    });
  }, []);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <header className="bg-white shadow-md relative z-50">
        <nav className="">
          <div className="p-8 lg:hidden">
            <div className="flex justify-between items-center">
              <div className="">
                <button
                  type="button"
                  onClick={handleMenu}
                  className="inline-flex items-center justify-center rounded-md text-black-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only"> Open menu</span>
                  {open === true ? <FaTimes size={30} /> : <BiMenu size={30} />}
                </button>
              </div>
              <Link to="/">
                <div className="flex items-center">
                  <img
                    src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1695835297/litvzfzqvj7qpk6aqtu0.png"
                    className="h-7 mr-3 md:cursor-pointer"
                    alt="Obsession Logo"
                  />
                </div>
              </Link>
              <div className="flex gap-4 text-[30px] items-end">
                <div className="relative cursor-pointer">
                  <CartWidget size="w-[20px] h-[20px]" />
                </div>
              </div>
            </div>
          </div>
          {open ? (
            <div className="lg:hidden">
              <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
                <ul className="text-black-800 hover:bg-gray 700 hover:text-gray block px-3 py-2 rounded-md text-base font-medium">
                  <li className="md:ml-8 text-lg m-3">
                    <Link to="/">
                      <Typography className="text-black-800 font-bold hover:text-pinkLogo duration-500">
                        Inicio
                      </Typography>
                    </Link>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id} className="md:ml-8 text-lg m-3">
                      <Link to={category.path}>
                        <Typography
                          variant="h6"
                          className="text-black-800 font-bold hover:text-pinkLogo duration-500"
                        >
                          {category.name}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </nav>
      </header>
    </>
  );
};

export default MobNavbar;
