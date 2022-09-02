import React from "react";
import { Link } from "react-router-dom";

function CreateUser() {
  return (
    <div>
      <div>
        Create User
        <Link to="/adminmenu" className="go--back--button">
          <div>Go Back</div>
        </Link>
      </div>
    </div>
  );
}

export default CreateUser;
