import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import MobNavbar from "./navbar/MobNavbar";
import Hero from "./hero/Hero";

const Layout = () => {
  return (
    <div>
      <div style={{ height: "10vh" }}>
        <Navbar />
        <MobNavbar />
      </div>
      <div style={{ minHeight: "70vh" }}>
        <Outlet className="" />
      </div>
      <div style={{ height: "20vh" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
