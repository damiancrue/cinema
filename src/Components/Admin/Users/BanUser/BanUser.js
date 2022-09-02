import React from "react";
import { Link } from "react-router-dom";

function BanUser() {
  return (
    <div>
      <div>
        Ban User
        <Link to="/adminmenu" className="go--back--button">
          <div>Go Back</div>
        </Link>
      </div>
    </div>
  );
}

export default BanUser;
