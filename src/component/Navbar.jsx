import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react"
function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    <div className="absolute top-0 left-0 w-full z-1">
      <div className=" container px-6 py-4 md:px-4 lg:px-32 flex items-center justify-between bg-transparent">
        <img src={assets.logo} alt="" className="w-42" />
        <ul className="hidden  md:flex text-white gap-10 cursor-pointer ">
          <a
            onClick={() => setShow(false)}
            href="#Navbar"
            className="hover:text-gray-400 cursor-pointer"
          >
            <li>Home</li>
          </a>
          <a
            onClick={() => setShow(false)}
            href="#About"
            className="hover:text-gray-400 cursor-pointer"
          >
            <li>About</li>
          </a>
          <a
            onClick={() => setShow(false)}
            href="#Project"
            className="hover:text-gray-400 cursor-pointer"
          >
            <li>Project</li>
          </a>
          <a
            onClick={() => setShow(false)}
            href="#Testimonial"
            className="hover:text-gray-400 cursor-pointer"
          >
            <li>Testimonial</li>
          </a>
        </ul>
        <button className="rounded-full cursor-pointer border md:block bg-white px-8 py-2 ">
          Sign up
        </button>
        <img
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-8"
          onClick={() => setShow(true)}
        />
      </div>
      <div
        className={` md:hidden ${
          show ? " fixed w-full" : "w-0 h-0"
        } w-full h-screen bg-white fixed top-0 left-0  transition-all`}
      >
        <div className="flex items-end justify-end px-5 py-7 cursor-pointer md:hidden">
          <img
            src={assets.cross_icon}
            alt=""
            className="w-6"
            onClick={() => setShow(false)}
          />
        </div>
        <ul className="flex items-center justify-center flex-col px-5 py-32  gap-5 ">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Project</a>
          <a href="">Contact us</a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
