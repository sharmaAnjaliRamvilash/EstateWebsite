import React, { useId, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react"

function About() {
    
  return (
    <motion.div  intial={{opacity:0,x:200}}
              whileInView={{opacity:1 ,x:0}}
              viewport ={{once:true}}
              transition={{duration:1}}
      className="flex flex-col overflow-hidden items-center justify-center p-14 mx-auto md:px-20 lg:px-32 w-full "
      id="About"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-2">
        About
        <span
          className="underline decoration-1 
             font-light underline-offset-4"
        >
          our brands
        </span>
      </h2>
      <p className="text-gray-500 max-w-80 text-center mb-8 ">
        Passionate about properties,dedicated to your vision
      </p>
      <div
       className="flex  items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="brand_png"
          className="w-full  sm:w-1/2 h-1/2 "
        />
        <div className="flex  flex-col items-center md:items-start mt-10 text-gray-600 ">
          <div className="grid grid-cols-2 gap-6  md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-400">10+</p>
              <p>Projects completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-400">12+</p>
              <p> Ongoing projects</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-400">20+</p>
              <p>Years of Excellent</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-400">25+</p>
              <p>Delivered project</p>
            </div>
            <p className="mx-w-full">
              About the website we have to provide you the every kind of the
              information so that user can go throw the knowledge and the
              information. taking the right path for your home that would b best
              for the everyone so that choose this things after that i will be
              take care of your house.
            </p>
          </div>
          <div className="py-5 px-2 ">
            <button className="py-3 px-5  border-none outline-none bg-blue-500 text-white font-medium rounded-xl">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
