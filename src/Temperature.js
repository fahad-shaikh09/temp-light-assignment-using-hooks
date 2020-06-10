import React, { useState } from "react";
import "./App.css";


function Temperature() {
const [temp,setTemp] = useState(22);
    return(
        <div>
         <h1>Temperature Module</h1>   
         Current Temperature is: <strong>{temp} C </strong>
         <br />

        <button onClick={() => setTemp(temp+1)}> ++ </button>
        <button onClick={() => setTemp(temp-1)} >-- </button>
        </div>
        ) 
}

export default Temperature;