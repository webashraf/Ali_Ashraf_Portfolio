import Wave from "react-wavify";
import ali_ashraf from "/public/ali_ashraf.png";
import { FaDownload } from "react-icons/fa";
import resume from "../../../assets/resume/Resume_of_Ali_Ashraf.pdf";
import Lottie from "react-lottie";
import animationData from "/public/a2.json";
const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="lg:flex items-center lg:px-10">
      <div className="flex flex-col justify-start items-start text-center w-full py-10 rounded-md overflow-hidden text-white">
        <div className="mr-auto relative rounded-full border-4 border-cyan-500 h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] overflow-hidden mb-10">
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

        <div className=" text-left">
          <h1 className="text-7xl font-serif uppercase">Ali Ashraf</h1>
          <h3 className="text-5xl font-bold text-white-100">React Developer</h3>
          <p className="text-xs mt-5 lg:w-1/2 font-mono">
            Welcome to my portfolio! I'm Ali Ashraf, a passionate MERN Developer
            specializing in impactful digital experiences. Let's collaborate to
            bring your ideas to life.
          </p>
          <div className="space-x-1 mt-5 ">
            <button className="btn btn-sm btn-outline text-white">
              see resume
            </button>
            <a
              style={{ textDecoration: "none" }}
              className=""
              href={resume}
              download
            >
              <button className="btn btn-sm btn-outline text-white">
                download resume &nbsp; <FaDownload> </FaDownload>{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        {" "}
        <div className=" lg:hidden w-[100%] h-auto">
        <Lottie options={defaultOptions} />
        </div>
        <div className="hidden lg:block">
          {" "}
          <Lottie options={defaultOptions2} height={600} width={600} />
        </div>{" "}
      </div>
    </div>
  );
};

export default Banner;
