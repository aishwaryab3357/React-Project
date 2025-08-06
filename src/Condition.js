import React from "react"
 
export default function  Condition(props){
//     if(props.value){
//         return<h1>login succesfully</h1>
//     }
//     else{
//         return<h1>plese login</h1>
//     }

//return (props.value)?(<h1>hello login succesfull</h1>):(<h1>plese login</h1>);

//short circutes:
// return(props.value)&&(<h1>helloword</h1>);


//homework
  switch (props.value) {
    case true:
      return <h1>login successfully</h1>;
    case false:
      return <h1>please login</h1>;
    default:
      return <h1>Unknown status</h1>;
  }

}

