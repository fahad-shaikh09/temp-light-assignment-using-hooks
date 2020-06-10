import React, {useState} from "react";
import "./App.css";

function Light() {
    const [isOn,setOn] = useState();
    return(
        <div className={`room ${isOn ? "light" : "dark"}`}>
            <h1>Light Module</h1>
            <button onClick={() => setOn(true)}>ON</button> 
            <button onClick={() => setOn(false)}>OFF</button>
        </div>
    )
}
export default Light;