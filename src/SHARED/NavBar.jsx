import { useContext } from "react";
import { BiCertification, BiHome, BiMailSend, BiPaperPlane } from "react-icons/bi";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { FaDownload, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../firebase/AuthProvider/AuthProvider";
import "./Navbar.css";


const NavBar = () => {

  const menu = (
    <>
      <a href="#home" className="flex gap-2 items-center">
        <div className="">
          <BiHome className="text-2xl" />
        </div>
        <span className="text-lg text-transparent bg-gradient-to-r from-[#91a1a4] to-[#8d999bcb] bg-clip-text">Home</span>
      </a>  

      <a href="#about" className="flex gap-2 items-center">
        <div className="">
          <BsFileEarmarkPerson className="text-2xl" />
        </div>
        <span className="text-lg text-transparent bg-gradient-to-r from-[#91a1a4] to-[#8d999bcb] bg-clip-text">About Me</span>
      </a>  

      <a href="#skills" className="flex gap-2 items-center">
        <div className="">
          <BiCertification className="text-2xl" />
        </div>
        <span className="text-lg text-transparent bg-gradient-to-r from-[#91a1a4] to-[#8d999bcb] bg-clip-text">Skills</span>
      </a>  

      <a href="#projects" className="flex gap-2 items-center">
        <div className="">
          <BiPaperPlane className="text-2xl" />
        </div>
        <span className="text-lg text-transparent bg-gradient-to-r from-[#91a1a4] to-[#8d999bcb] bg-clip-text">Projects</span>
      </a>   

      <a href="#contact" className="flex gap-2 items-center">
        <div className="">
          <BiMailSend className="text-2xl" />
        </div>
        <span className="text-lg text-transparent bg-gradient-to-r from-[#91a1a4] to-[#8d999bcb] bg-clip-text">Contact me</span>
      </a>
    </>
  );

  const socialMenus = (
    <>
      <li className="bg-[#5d8ee37c]"><FaLinkedinIn className="b-[#5d8ee3]"></FaLinkedinIn></li>

      <li className="bg-[#2859ad82]"><FaTwitter></FaTwitter></li>

      <li className="bg-[#e90d0d72]"><FaInstagram></FaInstagram></li>

      <li className="bg-[#0460ff67]"><FaFacebook></FaFacebook></li>
      <><button className="btn btn-outline btn-tiny text-sm flex gap-1 items-center">resume <FaDownload></FaDownload> </button></>
    </>
  )
  return (
    <div className="navbar h-32 w-[300px]">
      <div className="">
      </div>
      <div className="">

        <ul className="header-menu-ul space-y-2 ml-5 mt-10">
          {menu}
          </ul>
      </div>
    </div>
  );
};

export default NavBar;
