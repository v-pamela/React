import { BiSearch } from "react-icons/bi";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
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
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <>
      <header
        className={`${
          isActive ? "bg-white shadow-md" : "shadow-md py-2"
        } fixed w-full z-10 transition-all`}
      >
        <nav className="">
          <div className="container hidden lg:block h-full">
            <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
              <Link to="/">
                <div className="flex items-center">
                  <img
                    src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1695835297/litvzfzqvj7qpk6aqtu0.png"
                    className="h-10 mr-3 md:cursor-pointer"
                    alt="Obsession Logo"
                  />
                </div>
              </Link>
              <ul className="md:flex md:items-center flex items-center justify-center gap-3">
                {categories.map((category) => (
                  <li key={category.id} className="m-3">
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

              <div className="flex justify-between items-end md:flex">
                <div className="flex">
                  <div className="icon_wrapper relative">
                    <CartWidget />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
