
import React from "react"
import "./Menubtn.css"


import iconSource from "../../../../Icons/iconSource";
const menuIcon = iconSource[5];



const Toggle = (props) => {
    return(
        <div id="toggle">
            <button onClick={props.click}>
                <img src={menuIcon.image} alt={menuIcon.alt}  className="toggle-btn"/>
            </button>
        </div>
    )
}

export default Toggle