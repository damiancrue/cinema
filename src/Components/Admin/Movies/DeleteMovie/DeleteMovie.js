import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getMovieName } from "../../../../Redux/Actions/index.js";
import { deleteMovie } from "../../../../Redux/Actions/index.js";

import "./DeleteMovie.css";

function DeleteMovie() {
  const dispatch = useDispatch();

  const movie = useSelector((state) => state.movies);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getMovieName(name));
    console.log(movie);
    dispatch(deleteMovie(movie[0].movie_id));
    setName("");
    alert("Movie deleted");
    navigate("/adminmenu");
  }

  return (
    <div>
      <div className="delete--movie--container">
        <h1>Delete Movie</h1>
        <div className="delete--movie--input--button">
          <input
            className="delete--movie--input"
            type="text"
            placeholder="Search a movie to deactivate"
            onChange={(e) => handleInputChange(e)}
          ></input>
          <div className="admin--button" onClick={(e) => handleSubmit(e)}>
            Delete!
          </div>
        </div>
        <Link to="/adminmenu" className="go--back--button">
          <div className="admin--button">Go Back</div>
        </Link>
      </div>
    </div>
  );
}

export default DeleteMovie;
