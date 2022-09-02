import React, {useState} from "react";

import { Link } from "react-router-dom";

import logos from "../../Images/Images";
import iconSource from "../../Icons/iconSource.js";

import "./Header.css";
import Sidebar from "./MenuDrop/Sidebar";
import Toggle from "./MenuDrop/Menubtn/Menubtn";

const logoCinema = logos[0].image;
const plusIcon = iconSource[2];
const userIcon = iconSource[4];
const menuIcon = iconSource[5];

function Header() {
  const [sideOpen, setSideOpen] =useState(false)

  const openHandler = () => {
      if (!sideOpen) {
          setSideOpen(true)
      } else {
          setSideOpen(false)
      }
  }
  const sidebarCloseHandler = () => {
    setSideOpen(false)
  }
  let sidebar
  if(sideOpen) {
    sidebar = <Sidebar close={sidebarCloseHandler} sidebar={"sidebar"}/>
  }
  return (
    <div className="header--container">
      <div className="header">
        <div className="header-menu-dropdown">
          {sidebar  }
          <Toggle click={() => openHandler()} />
        </div>
        {/* <div className="header--menu--ico">
          <img src={plusIcon.image} alt={plusIcon.alt} />
        </div> */}

        <div className="header--logo--menu">
          <Link to={"/"}>
            <img src={logoCinema} alt={logoCinema.alt} />
          </Link>
        </div>

        <div className="header--user--ico">
          <Link to="/login">
            <img src={userIcon.image} alt={userIcon.alt} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
