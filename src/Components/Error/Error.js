import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <div>
        <h1>Ups! something goes wrong!</h1>
        <Link to="/" className="go--back--button">
          <div>Go Back</div>
        </Link>
      </div>
    </div>
  );
}

export default Error;
