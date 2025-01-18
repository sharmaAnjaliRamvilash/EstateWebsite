import React, { useRef, useState } from 'react'

function Todo() {
    const [val,setVal] = useState([]);

    const InputRef = useRef()
   const myValue=()=>{

    setVal(myValue);

   }
  




  return (
    <>
    <input type="text" ref={InputRef} onChange={myValue} className='border rounded-xl'/>
  <h1>{val}</h1>


    </>
  )
}

export default Todo

/* // import React from 'react'
// import { useRef,useState } from 'react';
// import data from './assets/data';
// import './App.css'

// function App() {
//   let [index,setIndex]=useState(0);
//   let [question,setQuestion] = useState(data[index]);
//   let [score,setScore] = useState(0)
//   let [result,setResult] = useState(false);
//   const [lock,setLock] = useState(false)

//   let option1 = useRef(null)
//   let option2 = useRef(null)
//   let option3 = useRef(null)
//   let option4 = useRef(null)

//   let optionArray = [option1,option2,option3,option4]

//   const checkAns=((e,ans)=>{
//     if(lock===false){
//     if(question.ans===ans){
//      e.target.classList.add("Right");
//      setLock(true)
//      setScore(pre=>pre+1);

//     }else{
//       e.target.classList.add("Wrong");
//       setLock(true)
//       optionArray[question.ans-1].current.classList.add("Right")

//     }
//   }

//   })
//   const next=()=>{
//     if(lock===true){
//       if(index===data.length-1){
//         setResult(true);
//         return 0;

//       }
//       setIndex(++index)
//       setQuestion(data[index])
//       setLock(false);
//       optionArray.map((option)=>{
//         option.current.classList.remove("Wrong")
//         option.current.classList.remove("Right")
//         return null;
//       })
//     }
//   }

//   return (
//     <>
//     <div className="container">
//       <h1>Quiz App</h1>
//       <hr />
//       {result? <></>:<>
//         <h2>{index+1}.{question.question}</h2>
//       <ul>
//         <li ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
//         <li ref={option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
//         <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
//         <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
//       </ul>
//       <button onClick={next}>Next</button>
//    <h2 className='index'>{score} out of {data.length} </h2>
//       </>}

//     </div>

//     </>
//   )
// }

// export default App



import React from 'react'
import { useState } from 'react';

function App() {
  const [value,setValue] = useState("Enter something");
  const my=()=>{
    const text = value.toUpperCase();
    setValue(text);
  }
 const my1=()=>{
    const text = value.toLowerCase();
    setValue(text);
  }
  const val=(e)=>{
    setValue(e.target.value);
  }
  const [myStyle,setmyStyle]  = useState({
    border:'1px solid black',
    backgroundColor:"red",
    color:"white"

  })
  const changeColor=()=>{
    if(myStyle.backgroundColor=="red"){
      setmyStyle(
        {
          backgroundColor:"white",
          color:"black"

        })
    }
    else{
      setmyStyle(
        {
          backgroundColor:"red",
          color:"white"

        })

    }
  }

 


  
 
  return (
    <>
   
    <div className='h-screen w-full bg-slate-500' style={myStyle}>
   <textarea name="" id="" cols="30" rows="10" value={value} className='border rounded ' onChange={val} >
  
   </textarea>
   <h2>{value.length}{value.slice(1,4)}</h2>
   <button onClick={my} className='border rounded-lg bg-slate-400 p-5'> Upper_Clikc here</button>
   <button onClick={my1} className='border rounded-lg bg-slate-400 p-5'> Lower_ here</button>
   {/* <h2>
    Prevv{this.value}
   </h2> *}
   <h1> chnage the color</h1>
   
   <div>
    <button className='border rounded-2xl bg-slate-600 p-4' onClick={changeColor}>click here</button>
   </div>
   <div>
   

        
     
        
    

   </div>
   

      
    </div>
    </>
  )
}

export default App




 */
 /* import React, { useState } from 'react'

function App() {
  const [val,setVal] = useState("")
  return (
    <>
    <input type="text" value={val} className='border-s-gray-200'/>
    <input type="button" value="1" onClick={(e)=>setVal(val+e.target.value)} />
    <input type="button" value="2" onClick={(e)=>setVal(val+e.target.value)} />
    <input type="button" value="+" onClick={(e)=>setVal(val+e.target.value)} />
    <input type="button" value="=" onClick={()=>setVal(eval(val))} />
    </>
  )
}

export default App */






