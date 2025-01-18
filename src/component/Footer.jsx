import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="w-full md:px-20 lg:px-32 overflow-hidden bg-gray-900 px-4 pt-10">
      <div
        className="container mx-auto flex flex-col md:flex-row justify-between items-center "
        id="Footer"
      >
        <div className="flex gap-9 mb-9">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src={assets.logo_dark} alt="" />
            <p className="text-gray-400 mt-4">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              suscipit assumenda laboriosam maxime maiores sapiente officia
              aliquid, totam optio, harum atque, eos sequi nihil. Placeat
              praesentium laudantium dignissimos doloremque accusantium! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Expedita, ut.
              Voluptatibus accusamus temporibus quo sit nisi maiores perferendis
              tenetur, consectetur fugiat, fuga aliquid at rem laborum autem est
              dolorum placeat.
            </p>
          </div>

          <div className="w-full md:w-1/4 mb-5 md:mb-0 ">
            <h3 className="text-gray-300 mt-9 text-2xl">Company</h3>
            <ul className="flex flex-col text-gray-500 gap-2">
              <li>
                <a href="#Header" className="hover:text-white text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="hover:text-white text-gray-200">
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#Testimonial"
                  className="hover:text-white text-gray-200"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#Project" className="hover:text-white text-gray-200">
                  Project
                </a>
              </li>
              <li>
                <a href="#Contact " className="hover:text-white text-gray-200">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex md:flex:col  flex-col  mt-8">
            <h2 className="text-gray-400 font-light  mb-9 ">
              Like our progress
            </h2>
            <p className="text-gray-500 max-w-80">
              {" "}
              To solve the issue of your problem join us
            </p>
          </div>
          <div className="mt-12 md:w-auto">
            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              className="bg-gray-200 px-6 py-3 focus:ouline-none border-gray-700 border text-gray-500 rounded "
            />
            <button className=" mt-5 border-none outline-none  text-xl  bg-blue-800 text-white m-auto px-5 py-3 rounded-md">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="border border-gray-600 py-4 mt-10 md:m-auto  text-center text-gray-100 text-xl">
        copyright 2024@Anjali . All right reserved.

      </div>
    </div>
  );
}

export default Footer;
