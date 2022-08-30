import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";
import SocialMedia from "../../../SocialMedia/SocialMedia";

function UpgradeUser() {
  return (
    <div>
      <Header />
      <div>
        Upgrade/Demote User
        <Link to="/adminmenu" className="go--back--button">
          <div>Go Back</div>
        </Link>
      </div>
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default UpgradeUser;
