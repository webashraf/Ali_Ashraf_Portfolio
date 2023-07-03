import Wave from "react-wavify";
import ali_ashraf from "/public/ali_ashraf.png";
import {
  FaDownload
} from "react-icons/fa";
import resume from "../../../assets/resume/Resume_of_Ali_Ashraf.pdf"
const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full py-10 rounded-md overflow-hidden text-white">
      <div className="mx-auto relative rounded-full border-4 border-lime-500 h-[300px] w-[300px] overflow-hidden mb-10">
        <img className="w-[300px] absolute z-10" src={ali_ashraf} alt="" />
        <div className="absolute bottom-20">
          <Wave mask="url(#mask)" fill="#1277b0">
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="white" />
                <stop offset="0.5" stopColor="black" />
              </linearGradient>
              <mask id="mask">
                <rect
                  x="0"
                  y="0"
                  width="2000"
                  height="200"
                  fill="url(#gradient)"
                />
              </mask>
            </defs>
          </Wave>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="text-7xl font-serif uppercase">Ali Ashraf</h1>
        <h3 className="text-5xl font-bold text-white-100">React Developer</h3>
        <p className="text-xs mt-5 px-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic
          tenetur odit deleniti maiores? Voluptatibus, modi rem libero dolore
          quia nulla quibusdam iste hic, unde, fugiat corrupti? Numquam enim
          aspernatur molestiae quibusdam, ipsam corporis, totam necessitatibus
          porro, sunt ea accusamus quos deserunt. Deserunt, tempore beatae qui
          ea maxime praesentium doloremque!
        </p>
        <div className="space-x-1 mt-5 ">
          <button className="btn btn-sm btn-outline text-white">see resume</button>
          <a style={{textDecoration: "none"}} className="" href={resume} download><button className="btn btn-sm btn-outline text-white">download resume &nbsp; <FaDownload> </FaDownload> </button></a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
