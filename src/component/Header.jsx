import React from "react";
import Navbar from './Navbar'
import { motion } from "motion/react"


function Header() {
  return (
    <>
      <div 
        className="min-h-screen  flex items-center justify-center bg-center bg-cover overflow-hidden mb-4 w-full"
        style={{ backgroundImage: "url('/header_img.png')" }} id="Header">
          <Navbar/>
          <motion.div intial={{opacity:0,y:100}}
          whileInView={{opacity:1 ,y:0}}
          viewport ={{once:true}}
          transition={{duration:1.5}}


          
          className=" flex items-center justify-center flex-col pl-8 ">
            <h2 className="text-5xl font-semibold text-white sm:text-[82px] inline-block max-w-3xl">
              Explore homes that fit to your dreams
            </h2>
            <div className="cursor-pointer mt-5 space-x-6 ">
              <a href="#Project" className="text-white border border-white px-8 py-3 rounded-lg bg-blue-500">Projects</a>
              <a href="#Contact"className="text-white border border-white px-8 py-3 rounded-lg bg-blue-500 ">Contatc us</a>
            </div>
          </motion.div>


      </div>
    </>
  );
}

export default Header;






//..............................................................................

























