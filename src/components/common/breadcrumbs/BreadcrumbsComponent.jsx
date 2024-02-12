import { AiFillHome } from "react-icons/ai";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const BreadcrumbsComponent = ({ categoryName }) => {
  if (categoryName === undefined) {
    return null; // Retorna null para no renderizar el Breadcrumbs
  }
  return (
    <div className="container">
      <Breadcrumbs className="hover:color-pinkLogo">
        <Link to={`/`} className="opacity-60">
          <AiFillHome />
        </Link>
        <Link to={`/category/${categoryName}`} className="opacity-60">
          <span>{`${categoryName}`.toUpperCase()}</span>
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsComponent;
