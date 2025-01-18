import React from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react"

function Contact() {

    //  access the form key from web3 form and paste here

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "664b9b7a-05e6-49c6-8613-ebfd8e7fa0ba");   //  access key got from the GmailId from web3 form

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
    //   alert("form submitted successfully");
    toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
    //   setResult(data.message);
    // alert(data.messgae);
    toast.error(data.message)
      setResult("");
      
    }
  };

  return (
    <motion.div intial={{opacity:0,x:200}}
    whileInView={{opacity:1 ,x:0}}
    viewport ={{once:true}}
    transition={{duration:1}}
      className="parent_div  flex flex-col gap-6 p-5 m-7 items-center"
      id="Contact"
    >
      <h1 className=" font-semibold text-3xl">
        <span className="underline ">About the Testimonial</span> that we
        completed
      </h1>
      <p className="font-medium text-xl ">
        These all are the project that we complted in previous years
      </p>
      {/* form has started working  */}
      <form action="max-w-2xl mx-auto text-gray-600 pt-8 " onSubmit={onSubmit}>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-gray-500 ">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              placeholder="Enter your name"
              name="Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-500">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              placeholder="Enter your Email"
              name="Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left font-light text-2xl">
          Message
          <textarea
            name="Message"
            id="Message"
            placeholder="send your message"
            className="w-full border border-gray-500 mt-5 px-4 py-3 resize-none h-48"
            required
          ></textarea>
          <button className="border-none outline-none  text-xl  bg-blue-800 text-white m-auto px-5 py-3 rounded-md" >
           {result? result: "send Message"}
           
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default Contact;
