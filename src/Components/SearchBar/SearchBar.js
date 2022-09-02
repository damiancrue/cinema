import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovieName, getMovies } from "../../Redux/Actions/index.js";
import iconSource from "../../Icons/iconSource.js";

import "./SearchBar.css";

const searchIcon = iconSource[3];

export default function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  // SI BORRA LO QUE ESCRIBIO EN LA SEARCHBAR SE VUELVEN A MOSTRAR TODAS LAS PELICULAS
  useEffect(() => {
    console.log(name);
    if (name === "") {
      dispatch(getMovies());
    }
  }, [name, dispatch]);

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getMovieName(name));
    // setName('');
  }
  return (
    <div className="SearchBar-container">
      <input
        className="SearchBar-input"
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInputChange(e)}
      ></input>
      <img
        onClick={(e) => handleSubmit(e)}
        className="search--icon"
        src={searchIcon.image}
        alt={searchIcon.alt}
      />
    </div>
  );
}
