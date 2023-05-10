import React from "react";
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-md overflow-hidden">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={banner1} className="w-full" />
        <div className="absolute flex items-center px-14 gap-6 left-0 right-0 bottom-0 top-0 my-auto text-white h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="w-1/2 space-y-5">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-6">
              <button className="btn bg-[#FF3811] border-[#FF3811]">
                Discover more
              </button>
              <button className="btn btn-outline glass text-white">
                Discover more
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-24 bottom-16">
          <a
            href="#slide4"
            className="btn btn-circle bg-[#FF3811] border-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-[#FF3811] border-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-24 bottom-16">
          <a
            href="#slide1"
            className="btn btn-circle bg-[#FF3811] border-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-[#FF3811] border-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-24 bottom-16">
          <a
            href="#slide2"
            className="btn btn-circle bg-[#FF3811] border-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-[#FF3811] border-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-24 bottom-16">
          <a
            href="#slide3"
            className="btn btn-circle bg-[#FF3811] border-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-[#FF3811] border-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
