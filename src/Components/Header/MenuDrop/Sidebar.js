import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Sidebar.css"
const Sidebar = (props) => {
    const [sidebarClass, setSidebarClass] = useState(props.sidebar)

    const closeHandler = (e) => {
        e.preventDefault()
        setSidebarClass("sidebar--close")
        setTimeout(() => {
            props.close()
        })

    }
    return (

        <div className={sidebarClass}>
            <button id="close" onClick={closeHandler}><p className="closebtn-text">&times;</p></button>
            <ul className="sidebar--options">
                <li className='sidebar--items'onClick={closeHandler}>
                    <Link to="/cart">
                        <p>MY CART</p>
                    </Link>
                </li>
                <li className='sidebar--items'onClick={closeHandler}>
                    <Link to="/products">
                        <p>PRODUCTS</p>
                    </Link>
                </li>
                <li className='sidebar--items'onClick={closeHandler}>
                    <Link to="/schedule">
                        <p>SCHEDULES</p>
                    </Link>
                </li>
                <li className='sidebar--items'onClick={closeHandler}>
                    <Link to="/contact">
                        <p>CONTACT</p>
                    </Link>
                </li>
                <li className='sidebar--items'onClick={closeHandler}>
                    <Link to="/about">
                        <p>ABOUT US</p>
                    </Link>

                </li>
            </ul>
        </div>
    )
}

export default Sidebar