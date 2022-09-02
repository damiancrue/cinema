
import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Sidebar.css"
const Sidebar = (props) => {
    const [sidebarClass, setSidebarClass] = useState(props.sidebar)

    const closeHandler = (e) => {
        e.preventDefault()
        setSidebarClass("sidebar close")
        setTimeout(() => {
            props.close()
        },)
        
    }
    return(

        <div className={sidebarClass}>
            <button id="close" onClick={closeHandler}><p className="closebtn-text">&times;</p></button>
            <ul className="Sidebar-options">
                <li><Link to="/">
                <p>Promotions</p>
                </Link>
                <li><Link to="/">
                <p>Contacto</p>
                </Link>
                </li>
                <li><Link to="/">
                <p>Acerca de</p>
                </Link>
                </li>
                <li><Link to="/">
                <p>Ayuda</p>
                </Link>
                </li>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar