import { Outlet } from "react-router-dom";
import NavBar from "../SHARED/NavBar.jsx";
import Footer from "../SHARED/Footer.jsx"

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
