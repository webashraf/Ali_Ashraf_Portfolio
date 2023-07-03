import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Footer from "../SHARED/Footer.jsx";
import NavBar from "../SHARED/NavBar.jsx";
import logo from "/public/logo.png";
import resume from "../assets/resume/Resume_of_Ali_Ashraf.pdf";
import MobileNavbar from "../SHARED/MobileNavbar.jsx";
const Main = () => {
  const socialMenus = (
    <>
        <a target="_" href="https://www.linkedin.com/in/ali-ashraf-977b09204/">
      <li className="bg-[#5d8ee37c]">
          <FaLinkedinIn className=""></FaLinkedinIn>
      </li>
        </a>
        <a target="_" href="https://github.com/webashraf">
      <li className="bg-[#0000007c]">
          <FaGithub className=""></FaGithub>
      </li>
        </a>

      <a target="_" href="https://twitter.com/web_ashraf">
        <li className="bg-[#2859ad82]">
          <FaTwitter></FaTwitter>
        </li>
      </a>

      <a target="_" href="https://www.instagram.com/web_ashraf/">
        <li className="bg-[#e90d0d72]">
          <FaInstagram></FaInstagram>
        </li>
      </a>

      <a target="_" href="https://www.facebook.com/aliashraf1233/">
        <li className="bg-[#0460ff67]">
          <FaFacebook></FaFacebook>
        </li>
      </a>
      <>
        <a target="_" href={resume} download>
          <button className="btn btn-sm rounded-none bg-[#1c1b1ba6] text-sm flex border-0 border-b-[2px] border-cyan-500 gap-1 items-center">
            resume <FaDownload></FaDownload>{" "}
          </button>
        </a>
      </>
    </>
  );
  return (
    <div className="flex relative">
      <div className="hidden lg:flex">
        <div className="relative shadow-2xl shadow-cyan-500  flex flex-col lg:w-[300px]">
          <div className="mb-10 w-[90%] mx-auto  py-3 my-6 text-center navbar-logo">
            <span className="btn btn-ghost normal-case text-4xl font-serif text-white">
              <Link to={"/"}>
                <img className="w-[220px]" src={logo} alt="" />
              </Link>{" "}
            </span>
          </div>

          <div className="h-[300px] ">
            <NavBar></NavBar>
          </div>

          <div className="w-[95%] border mx-auto bg-zinc-800 rounded-sm mt-auto mb-2">
            <ul className="flex gap-1 justify-center text-sm py-1 social-menus items-center">
              {socialMenus}
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="w-[90%] fixed lg:hidden bg-[#343434eb] z-50 py-2 left-0 right-0 bottom-3 mx-auto shadow-2xl shadow-cyan-500">
          <MobileNavbar></MobileNavbar>
        </div>
      </div>

      <div className="w-full h-screen overflow-scroll">
        <div className="lg:px-10 px-4">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
