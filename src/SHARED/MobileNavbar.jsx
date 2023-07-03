import { BiCertification, BiHome, BiMailSend, BiPaperPlane } from "react-icons/bi";
import { BsFileEarmarkPerson } from "react-icons/bs";
import "./NavBar.css";
const MobileNavbar = () => {
    // const menu = (
    //     <>
    //       <li className="flex gap-2 items-center">
    //         <div className="">
    //           <BiHome className="text-md" />
    //         </div>
    //         <span className="text-sm text-transparent bg-gradient-to-r from-[#91a1a4] to-[#8d999bcb] bg-clip-text">Home</span>
    //       </li>  
    
    //       <li className="flex gap-2 items-center">
    //         <div className="">
    //           <BsFileEarmarkPerson className="text-md" />
    //         </div>
    //         <span className="text-sm text-transparent bg-gradient-to-r from-[#91a1a4] to-[#8d999bcb] bg-clip-text">About</span>
    //       </li>  
    
    //       <li className="flex gap-2 items-center">
    //         <div className="">
    //           <BiCertification className="text-md" />
    //         </div>
    //         <span className="text-sm text-transparent bg-gradient-to-r from-[#91a1a4] to-[#8d999bcb] bg-clip-text">Skills</span>
    //       </li>  
    
    //       <li className="flex gap-2 items-center">
    //         <div className="">
    //           <BiPaperPlane className="text-md" />
    //         </div>
    //         <span className="text-sm text-transparent bg-gradient-to-r from-[#91a1a4] to-[#8d999bcb] bg-clip-text">Projects</span>
    //       </li>   
    
    //       <li className="flex gap-2 items-center">
    //         <div className="">
    //           <BiMailSend className="text-md" />
    //         </div>
    //         <span className="text-sm text-transparent bg-gradient-to-r from-[#91a1a4] to-[#8d999bcb] bg-clip-text">Contact</span>
    //       </li>
    //     </>
    //   );
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
          <span className="text-lg text-transparent bg-gradient-to-r from-[#91a1a4] to-[#8d999bcb] bg-clip-text">About</span>
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
          <span className="text-lg text-transparent bg-gradient-to-r from-[#91a1a4] to-[#8d999bcb] bg-clip-text">Contact</span>
        </a>
      </>
    );
      return (
        <div className="lg:mb-2">
          <div className="lg:h-screen items-start">
            <div className="flex justify-center">
              <ul className="flex gap-3 text-sm font-serif text-white MobileNavbar-menu-ul flex-wrap justify-center px-2">
                {menu}
              </ul>
    
            </div>
          </div>
        </div>
    
      );
};

export default MobileNavbar;