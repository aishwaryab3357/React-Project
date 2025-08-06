import { useEffect, useState } from "react"
 //export default function Counter(){
//     let [value,setValue]=useState(0);
//     return(
//         // <div>
//         //     <h1>hello</h1>
//         // </div>
// <div>
//         <button onClick={()=>{setValue(value=>value-1)}}>-</button>
//         <p>{value}</p>
//         <button onClick={()=>{setValue(value=>value+1)}}>+</button>
//         </div>
//     )
// }

// export default function Counter() {
//   const [time, setTime] = useState(0);
//   const [intervalId, setIntervalId] = useState(0);

//   const timeStart = () => {
//     if (!intervalId) {
//       const id = setInterval(() => {
//         setTime((prev) => prev + 1);
//       },250);
//       setIntervalId(id);
//     }
//   };

//   const timeStop = () => {
//     clearInterval(intervalId);
//     setIntervalId(null);
//   };

//   return (
//     <div>
//       <h1>{time}</h1>
//       <button onClick={timeStart}>Start</button>
//       <button onClick={timeStop}>Stop</button>
//     </div>
//   );
// }

//class work
//  export default function Counter() {
 
//   const [time,setTimer]=useState(0)
//   const startTimer=()=>{
//     setTimer(0);
//     intervalRef.current=setInterval(()=>{
//       setTimer((timer)=>timer+1);
    
//     },100)

//   }
//   function stopTimer(){
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   } ;
// function Counter(){
//   return(
//     <>
//     <h1>{time}</h1>
//     <button onClick={startTimer}start></button>
//     <button onClick={stopTimer}>stop</button>
//     </>
//   )
// }
//  }
 
//USE EFFECT
// function Counter(){
//   const [Message,setMessage]=useState('');
//   useEffect(()=>{
//     alert("Page is loaded");
//   },[Message])
//   function handel(){
//     setMessage("login");
//   }
//   return(
//     <>
//     <button onClick={handel}>submit</button>
//     <p>{Message}</p>
//     </>
//     //<h1>Helloword</h1>

//   )


//export default Counter

 