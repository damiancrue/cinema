import { React } from "react";

import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Carrousel from "../Carrousel/Carrousel";
import Billboard from "./../Billboard/Billboard";
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from "../Footer/Footer";
import FilterBy from "./../FilterBy/FilterBy";

import "./Home.css";

import { useAuth } from "../Context/authContext";

import { useNavigate } from "react-router-dom";

function Home() {
  const { user, logOut } = useAuth();
  console.log(user);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logOut();
    navigate("/login");
  };

  return (
    <div className="home--container">
      <br />
      <Header></Header>
      <br />
      <Carrousel />
      <br />
      <NavBar />
      <FilterBy />
      <br />
      <Billboard />

      <SocialMedia />
      <br />
      <div className="logout--button--container">
        <div onClick={handleLogOut} className="logout--button">
          Log Out
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Home;
