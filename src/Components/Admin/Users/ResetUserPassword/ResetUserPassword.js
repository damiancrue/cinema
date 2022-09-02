import React from "react";
import { Link } from "react-router-dom";

function ResetUserPassword() {
  return (
    <div>
      <div>
        Reset User Password
        <Link to="/adminmenu" className="go--back--button">
          <div>Go Back</div>
        </Link>
      </div>
    </div>
  );
}

export default ResetUserPassword;
