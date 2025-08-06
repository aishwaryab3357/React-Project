//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Functional from './components/Functional';
import Condition from './Condition';
//import ClassComponent from './components/ClassComponent';
// import Counter from './components/Counter'
// import Message from './components/Message';
import GithubCard from './components/GithubCard';
import ScreenWidth from './components/ScreenWidth';
import UserDetails from './components/UserDetails';

// function App() {
  // let name=prompt("enter your name");
  // let age=prompt("enter your age")
  // console.log(name); 
  // console.log(age);
// function para(){
//   alert("button double clicked");
  // console.log("button double clicked");
//}
    //  return (
     <>
     {/* <h1>the age of {name}  is  {age}</h1> */}
     {/* <button onDoubleClick={para}>submit</button> */}

     {/* <button onClick={()=>alert("button clicked")}>click</button> */}
        {/* <h1>Helloword</h1> 
        <h2>Helloword</h2>
        <h3>Helloword</h3>   */}

        {/* <Functional/>
        <ClassComponent/> */}
        </>  
//      )
// }

// function App(){
//   const name="karan";
//   let age=21;
//   let mobile=7204713357;

//   return(
//     <>
//     <Functional uname={name} age={age} mob={mobile}/>
//      <Functional uname="Ravi" age={12} mob={97982676572} />
//       <Functional uname="Ram" age={34} mob={943286572} />
//        <Functional uname="krishna" age={24} mob={987654323} />
//       <Functional uname="Arman" age={44} mob={897654329} />
//       <Functional uname="Aadarsh" age={74} mob={8976543678} />
//       <Functional uname="Ansh" age={54} mob={9789776572} />
//     </>
//   )
// }
 function app(){
// const a=true;
//  return(
//   <> 
  {/* <Condition value={a}/> */}
//   <Condition value={false}/>
//   </>
//  )
 return(
   <>
  {/* // <Counter/> */}
  {/* <Message/> */}
  {/* <GithubCard username="aishwaryab3357"/> */}

  {/* <ScreenWidth/> */}
   <UserDetails />
   </>
)
} 
//   <>
  
//  <Counter/>
//   </>
//   )


export default app;
