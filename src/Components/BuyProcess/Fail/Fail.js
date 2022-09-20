import React from "react";
import "../buyProcessStyles.css";
import { Link } from "react-router-dom";
import Logo from "../logomain.png";

let imagen = "https://i.ytimg.com/vi/7YrkvUW84RM/maxresdefault.jpg";

function Fail() {
  return (
    <div className="buy-process-main-container">
      <div className="buy-process-sub-container">
        <div className="buy-process-card">
          <h1 className="buy-process-title">Payment Failed</h1>
          <h2 className="buy-process-text">
            Sorry, we're unable to process your payment at this time
          </h2>
          <h2 className="buy-process-text">
            Please try again with a different payment method
          </h2>
          <h2 className="buy-process-text">
            If you continue to encounter problems, please contact our costumer
            service
          </h2>
          <img src={Logo} alt="Logo" className="logo" />
          <Link to="/adminmenu">
            <button className="admin-buttons">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Fail;
