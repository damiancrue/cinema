import React from "react";
import { Link } from "react-router-dom";

function UpgradeUser() {
  return (
    <div>
      <div>
        Upgrade/Demote User
        <Link to="/adminmenu" className="go--back--button">
          <div>Go Back</div>
        </Link>
      </div>
    </div>
  );
}

export default UpgradeUser;
