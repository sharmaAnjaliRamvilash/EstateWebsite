import  { React,useEffect, useState } from 'react'
import  { assets,projectsData} from '../assets/assets'
import { motion } from "motion/react"



function Project() {
    const [currentIndex,setcurrentIndex] =useState(0) 
    const [show,toShow] = useState(1);

    const nextProject=()=>{
        setcurrentIndex((pre)=>(pre+1)% projectsData.length)
            
    }
    const preProject=()=>{
       setcurrentIndex((pre)=>(pre===0)? projectsData.length +1: pre-1);
    }

    useEffect(()=>{
        const mydata=()=>{
            if(window.innerWidth >= 1024){
                toShow(projectsData.length);
            }
            else{
                toShow(1)
            }
        }
            mydata();
            window.addEventListener('resize',mydata);
            return ()=>window.removeEventListener('resize',mydata);
        
       
    },[])





  return (
   <motion.div intial={{opacity:0,x:-200}}
          whileInView={{opacity:1 ,x:0}}
          viewport ={{once:true}}
          transition={{duration:1}}
   
   className='parent_div  flex flex-col gap-6 p-5 m-7 items-center' id='Project'>
    
    <h1 className=' font-semibold text-3xl'>
      <span className='underline '>Projects </span> that we completed
    </h1>
    <p>
        These all are the project that we complted in previous years
    </p>
    {/*   scrolin image bar */}
    
          {/*     left arrow and right arrow icon */}
    
          <div className="flex justify-start  items-center mb-8">
            <button  onClick={preProject}
             className="p-3 bg-gray-200 rounded ml-2">
                <img src={assets.left_arrow} alt="previous" />
            </button>
            <button  onClick={nextProject} 
            className="p-3 bg-gray-200 rounded ml-2">
                <img src={assets.right_arrow} alt="right" />
            </button>
    
          </div>



          {/* testimonial data */}
      <div className="overflow-hidden ">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out "
        style={{transform: `translateX( -${(currentIndex *100)/show}%)` }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14 rounded-2xl"
              />
              <h2 className="text-xl font-semibold text-gray-400">
                {project.title}
              </h2>
              <p className="text-gray-500 text-sm">
                {project.price} <span>{project.location}</span>
              </p>
            </div>
          ))}
        </div>
        </div>
   
   
      


 
   </motion.div>
  )
}

export default Project