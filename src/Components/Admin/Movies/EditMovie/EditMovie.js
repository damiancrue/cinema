import React from "react";
import { Link } from "react-router-dom";

function EditMovie() {
  return (
    <div>
      <div>
        EditMovie
        <Link to="/adminmenu" className="go--back--button">
          <div className="admin--button">Go Back</div>
        </Link>
      </div>
    </div>
  );
}

export default EditMovie;
