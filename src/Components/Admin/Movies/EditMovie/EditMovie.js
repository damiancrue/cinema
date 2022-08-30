import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";
import SocialMedia from "../../../SocialMedia/SocialMedia";

function EditMovie() {
  return (
    <div>
      <Header />
      <div>
        EditMovie
        <Link to="/adminmenu" className="go--back--button">
          <div className="admin--button">Go Back</div>
        </Link>
      </div>
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default EditMovie;
