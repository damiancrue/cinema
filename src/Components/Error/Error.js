import React from "react";
import { Link } from "react-router-dom";

import Filters from "../Filters/Filters";

function Error() {
  return (
    <div>
      <Filters />
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
