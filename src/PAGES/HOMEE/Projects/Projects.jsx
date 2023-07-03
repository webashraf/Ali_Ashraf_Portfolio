import { useState } from "react";
import summerCamp from "../../../assets/images/projects/Summer_Sports_Excellence1.png";
import VroomVroomPlayHome from "../../../assets/images/projects/VroomVroomPlayHome.png";
import flavorLav from "../../../assets/images/projects/FlavorLav.png";
import "./style.css";

const Projects = () => {
  return (
    <div className="py-36">
      <div className="text-center w-1/2 mx-auto pb-24 text-white-100">
        <h3 className="text-xl font-bold text-zinc-500">Project Gallery </h3>
        <h1 className="text-5xl font-bold text-cyan-500">
          Explore My Latest Works and Creations{" "}
        </h1>
      </div>

      <div className="grid grid-cols-3 px-10 project-cart-parent">
        <div className="card w-96 bg-[#0f06066c] shadow-md shadow-[#419fae]">
          <figure className="h-[200px] overflow-hidden">
            <img
              className="transition-transform duration-[4000ms] ease-in transform  translate-y-[550px] hover:translate-y-[-550px] object-top"
              src={summerCamp}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">SUMMER SPORTS EXCELLENCE-</h2>
            <h4 className="font-bold uppercase">Features :</h4>
            <ul className="ml-8 font-mono list-disc ">
              <li>
                Implement three dashboard for admin, instructor, and student.
              </li>
              <li>
                An admin can Approve, remove, give feedback, assign rules.
                Instructor: Add classes. User: Select, purchase courses.
              </li>
              <li>
                Course select button disabled when seat is below 1. And scroll
                animation, cartoon animation, dark-light mood.
              </li>
            </ul>
            <p>
              <span className="font-bold">Links:</span>{" "}
              <a
                target="_"
                href="https://github.com/webashraf/summer-sports-excellence-"
              >
                Clinet Side Code
              </a>
              ,{" "}
              <a
                target="_"
                href="https://github.com/webashraf/summer-sports-excellence-server"
              >
                Clinet Side Code
              </a>
              ,{" "}
              <a target="_" href="https://a12-summer-camp.web.app/">
                Live Link
              </a>
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm disabled: text-gray-400 line-through">
                See Details
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-[#0f06066c] shadow-md shadow-[#419fae]">
          <figure className="h-[200px] overflow-hidden">
            <img
              className="transition-transform duration-[4000ms] ease-in transform  translate-y-[720px] hover:translate-y-[-720px] object-top"
              src={VroomVroomPlayHome}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">SUMMER SPORTS EXCELLENCE-</h2>
            <h4 className="font-bold uppercase">Features :</h4>
            <ul className="ml-8 font-mono list-disc ">
              <li>
                Implement three dashboard for admin, instructor, and student.
              </li>
              <li>
                An admin can Approve, remove, give feedback, assign rules.
                Instructor: Add classes. User: Select, purchase courses.
              </li>
              <li>
                Course select button disabled when seat is below 1. And scroll
                animation, cartoon animation, dark-light mood.
              </li>
            </ul>
            <p>
              <span className="font-bold">Links:</span>{" "}
              <a
                target="_"
                href="https://github.com/webashraf/summer-sports-excellence-"
              >
                Clinet Side Code
              </a>
              ,{" "}
              <a
                target="_"
                href="https://github.com/webashraf/summer-sports-excellence-server"
              >
                Clinet Side Code
              </a>
              ,{" "}
              <a target="_" href="https://a12-summer-camp.web.app/">
                Live Link
              </a>
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm disabled: text-gray-400 line-through">
                See Details
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-[#0f06066c] shadow-md shadow-[#419fae]">
          <figure className="h-[200px] obj overflow-hidden">
            <img
              className="transition-transform duration-[4000ms] ease-in transform  translate-y-[390px] hover:translate-y-[-390px]"
              src={flavorLav}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">SUMMER SPORTS EXCELLENCE-</h2>
            <h4 className="font-bold uppercase">Features :</h4>
            <ul className="ml-8 font-mono list-disc ">
              <li>
                Implement three dashboard for admin, instructor, and student.
              </li>
              <li>
                An admin can Approve, remove, give feedback, assign rules.
                Instructor: Add classes. User: Select, purchase courses.
              </li>
              <li>
                Course select button disabled when seat is below 1. And scroll
                animation, cartoon animation, dark-light mood.
              </li>
            </ul>
            <p>
              <span className="font-bold">Links:</span>{" "}
              <a
                target="_"
                href="https://github.com/webashraf/summer-sports-excellence-"
              >
                Clinet Side Code
              </a>
              ,{" "}
              <a
                target="_"
                href="https://github.com/webashraf/summer-sports-excellence-server"
              >
                Clinet Side Code
              </a>
              ,{" "}
              <a target="_" href="https://a12-summer-camp.web.app/">
                Live Link
              </a>
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm disabled: text-gray-400 line-through">
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
