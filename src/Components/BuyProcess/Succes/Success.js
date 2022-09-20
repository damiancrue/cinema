import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logomain.png";

import "../buyProcessStyles.css";

function Success() {
  return (
    <div className="buy-process-main-container">
      <div className="buy-process-sub-container">
        <div className="buy-process-card">
          <h1 className="buy-process-title">Payment Successful</h1>
          <h2 className="buy-process-text">Thank you for choosing us!</h2>
          <h2 className="buy-process-text">
            In a moment you will recieve an email with the details of your order
          </h2>
          <h2 className="buy-process-text">See you later!</h2>
          <img src={Logo} alt="Logo" className="logo" />
          <Link to="/">
            <button className="admin-buttons">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
