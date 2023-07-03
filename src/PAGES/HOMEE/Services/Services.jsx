import html from "../../../assets/images/skills/html.png";
import css from "../../../assets/images/skills/css.png";
import git from "../../../assets/images/skills/git.png";
import JS from "../../../assets/images/skills/javascript.png";
import mongodb from "../../../assets/images/skills/mongodb.png";
import react from "../../../assets/images/skills/reactjs.png";
import tailwind from "../../../assets/images/skills/tailwind.png";
import node from "../../../assets/images/skills/nodejs.png";
import bootstrap from "../../../assets/images/skills/bootstrap.png";
import "./skill.css";
import Wave from "react-wavify";

import Lottie from 'react-lottie';
import animationData from '/public/a4.json';



const Services = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  // console.log(services);
  return (
    <div className="py-36">
      <div className="text-center lg:w-1/2 mx-auto pb-24 text-white-100">
        <h3 className="text-xl font-bold text-zinc-500">
          Skills & Expertise{" "}
        </h3>
        <h1 className="text-5xl font-bold text-cyan-500">
          Tools and Technologies I Work With{" "}
        </h1>
      </div>

      <div className="lg:flex lg:items-center">
        <div className="skill-itmes px-8 lg:w-1/2 grid grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="shadow-2xl shadow-[#ff2f00]">
            <img src={git} alt="" />
            <h3 className="text-orange-700 ">Git Hub</h3>
            <h4 className="text-orange-700 font-bold">EXPERTISE</h4>
            {/* <Wave mask="url(#mask)" fill="#ff2f00">
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
            </Wave> */}
          </div>

          <div className="shadow-2xl shadow-[#ff4d00ce]">
            <img src={html} alt="" />
            <h3 className="text-red-400 bg-[#]">HTML</h3>
            <h4 className="text-red-400 font-bold">EXPERTISE</h4>

            {/* <Wave mask="url(#mask)" fill="#ff4d00">
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
            </Wave> */}
          </div>

          <div className="shadow-2xl shadow-[#006c9e]">
            <img src={css} alt="" />
            <h3 className="text-sky-600">CSS</h3>
            <h4 className="text-sky-600 font-bold">EXPERTISE</h4>

            {/* <Wave mask="url(#mask)" fill="#006c9e">
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
            </Wave> */}
          </div>

          <div className="shadow-2xl shadow-[#9f47f1]">
            <img src={bootstrap} alt="" />
            <h3 className="text-violet-500">Bootstrap</h3>
            <h4 className="text-violet-500 font-bold">EXPERTISE</h4>
            {/* <Wave mask="url(#mask)" fill="#00abd1">
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
            </Wave> */}
          </div>
          <div className="shadow-2xl shadow-[#00abd1]">
            <img src={tailwind} alt="" />
            <h3 className="text-cyan-600">Tailwind CSS</h3>
            <h4 className="text-cyan-600 font-bold">EXPERTISE</h4>
            {/* <Wave mask="url(#mask)" fill="#00abd1">
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
            </Wave> */}
          </div>

          <div className="shadow-2xl shadow-[#fffc2f]">
            <img src={JS} alt="" />
            <h3 className="text-yellow-500">JavaScript</h3>
            <h4 className="text-yellow-500 font-bold">EXPERTISE</h4>
            {/* <Wave mask="url(#mask)" fill="#fffc2f">
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
            </Wave> */}
          </div>

          <div className="shadow-2xl shadow-[#10d3ff]">
            <img src={react} alt="" />
            <h3 className="text-cyan-400 ">REACT JS</h3>
            <h4 className="text-cyan-400 font-bold">EXPERTISE</h4>
{/* 
            <Wave mask="url(#mask)" fill="#10d3ff">
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
            </Wave> */}
          </div>

          <div className="shadow-2xl shadow-[#70ffae]">
            {/* <h2 className="text-4xl text-zinc-500 font-serif">Express JS</h2> */}
            <img src={node} alt="" />
            <h3 className="text-[#70ffae] mt-1">Express JS</h3>
            <h4 className="text-[#70ffae] font-bold bg-[]">COMFORTABLE</h4>

            {/* <Wave mask="url(#mask)" fill="#70ffae">
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
            </Wave> */}
          </div>

          <div className="shadow-2xl shadow-[#2a821c]">
            <img src={mongodb} alt="" />
            <h3 className="text-green-700">MongoDB</h3>
            <h4 className="text-green-700 font-bold">COMFORTABLE</h4>

            {/* <Wave mask="url(#mask)" fill="#2a821c">
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
            </Wave> */}
          </div>
        </div>
        <div className=" lg:hidden w-[100%] h-auto">
        <Lottie options={defaultOptions} />
        </div>
        <div className="lg:w-1/2 hidden lg:block">
        <Lottie options={defaultOptions} height={600} width={600} />
        </div>
      </div>
    </div>
  );
};

export default Services;
