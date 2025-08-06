import React, { useEffect, useState } from "react";
function ScreenWidth(){
    const [width,setWidth]=useState(0);
    useEffect(()=>{
        window.addEventListener("resize",handel);

        return()=>{
            window.removeEventListener("resize",handel);
        }
        setWidth(window.innerWidth);
    },[width])
    function handel(){
        setWidth(window.innerWidth);
    }
    return(
        <div>
            <h1>{width}px</h1>
            </div>
    )
}
export default ScreenWidth