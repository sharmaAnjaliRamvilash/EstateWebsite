import React from 'react'
import { assets,testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

function Testimonial() {
  return (
   
    <motion.div intial={{opacity:0,x:100}}
          whileInView={{opacity:1 ,x:0}}
          viewport ={{once:true}}
          transition={{duration:1}}
     className='parent_div  flex flex-col gap-6 p-5 m-7 items-center' id='Project'>
         <h1 className=' font-semibold text-3xl'>
      <span className='underline '>About the  Testimonial</span> that we completed
    </h1>
    <p className='font-medium text-xl '>
        These all are the project that we complted in previous years
    </p>
    <div className="flex  w-full max-w-[1180px] gap-20px lg:m-42 m-5 ">
        {testimonialsData.map((testimonial,index)=>(
            <div key={index}  className='flex  p-6 rounded-xl items-center justify-center flex-col gap-20px shadow-2xl '>
                <img src={testimonial.image} alt={testimonial.alt}  />
                <h2 className='text-xl text-gray-400 font-medium'>
                    {testimonial.name}
                </h2>
                <p className='text-gray-500 text-sm mb-4'>{testimonial.title}</p>
                <div className='flex gap-10px mb-20px'>
                    {Array.from({length:testimonial.rating},(item,index)=>(
                        <img key={index}    src={assets.star_icon} alt="" />
                    ))}
                </div>
                <p className='text-gray-500 font-bold max-w-[450px]'>
                    {testimonial.text}
                </p>
                
               

                </div>

        ))}
    </div>
        </motion.div>
  )
}

export default Testimonial