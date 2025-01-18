import React from 'react'
import About from './component/About'
import Header from './component/Header'
import Project from './component/Project'
import Testimonial from './component/Testimonial'
import Contact from './component/Contact'
import Footer from './component/Footer'

import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className='w-full overflow-hidden'>
          <ToastContainer />
      <Header/>
      <About/>
      <Project/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default App