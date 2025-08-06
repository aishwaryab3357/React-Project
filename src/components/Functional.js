// function Functional(){
//     return(
//         <h2 style={{color:"red"}}>helloword</h2>
//     )

// }

//homework
import React from 'react';
import '../App.css';
function Functional(props){
    return(
<>
<div>
    <h1>hello{props.uname}</h1>
    <h1>age is{props.age}</h1>
    <h1>mobile number is{props.mob}</h1>
</div>
</>
    )
}

export default Functional;