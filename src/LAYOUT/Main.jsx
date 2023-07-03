import {
  FaDownload,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Footer from "../SHARED/Footer.jsx";
import NavBar from "../SHARED/NavBar.jsx";
import logo from "/public/logo.png";
import resume from "../assets/resume/Resume_of_Ali_Ashraf.pdf"
const Main = () => {
  const socialMenus = (
    <>
      <li className="bg-[#5d8ee37c]">
        <FaLinkedinIn className="b-[#5d8ee3]"></FaLinkedinIn>
      </li>

      <li className="bg-[#2859ad82]">
        <FaTwitter></FaTwitter>
      </li>

      <li className="bg-[#e90d0d72]">
        <FaInstagram></FaInstagram>
      </li>

      <li className="bg-[#0460ff67]">
        <FaFacebook></FaFacebook>
      </li>
      <>
        <a target="_" href={resume} download><button className="btn btn-sm text-sm flex gap-1 items-center">
          resume <FaDownload></FaDownload>{" "}
        </button></a>
      </>
    </>
  );
  return (
    <div className="flex relative">
      <div className="relative border-4 flex flex-col w-[300px] bg-lime-20">
        <div className="mb-10 w-[90%] mx-auto  py-3 my-6 text-center navbar-logo">
          <span className="btn btn-ghost normal-case text-4xl font-serif text-white">
            <Link to={"/"}>
              <img className="w-[220px]" src={logo} alt="" />
            </Link>{" "}
          </span>
        </div>

        <div className="h-[300px] hidden lg:block">
          <NavBar></NavBar>
        </div>

        <div className="w-[95%] border mx-auto bg-zinc-800 rounded-sm mt-auto mb-2">
          <ul className="flex gap-1 justify-center text-sm py-1 social-menus">
            {socialMenus}
          </ul>
        </div>
      </div>
      <div className="w-full h-screen overflow-scroll">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
