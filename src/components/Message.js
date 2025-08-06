
    import React, {useEffect, useState } from 'react'
    export default function Message() {
        let [Message,setMessage]=useState("")
        useEffect(()=>{
    //console.log("Page is loaded");
    alert("page loaded")
       },[])
        function handel(){
            setMessage("login succesfull");
            setTimeout(()=>{
                setMessage("")
            },3000)
        }
      return (
        <div>
          {/* <button onClick={()=>setMessage("login succesfull")}>Login</button> */}
          <button onClick={handel}>login</button>
          <p>{Message}</p>
        </div>
      )
    }
//     export default function Message(){
// let[Message, setMessage] = useState(0);
   
//      return (
//    <div>
//       <input type="text" placeholder="Enter your text" onChange={(event)=>setMessage(event.target.value)}/>
//       <p>The total length of the text is {Message.length}</p>
// </div>
//      )
    
//     }


