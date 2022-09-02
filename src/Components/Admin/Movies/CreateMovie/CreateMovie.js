import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postMovie } from "../../../../Redux/Actions";

import "./CreateMovie.css";

import { v4 as randomId } from "uuid";

var value = "";
var typeOfForm = "";

const requirements = [
  { prop: "title", type: "text", id: 1 },
  { prop: "cast", type: "text", id: 2 },
  { prop: "director", type: "text", id: 3 },
  { prop: "duration", type: "number", id: 4 },
  { prop: "teaser", type: "textUrl", id: 5 },
  { prop: "display", type: "select", id: 6 },
  { prop: "poster", type: "textUrl", id: 7 },
  { prop: "description", type: "textArea", id: 8 },
  { prop: "language", type: "select", id: 9 },
  { prop: "genre", type: "select", id: 10 },
  { prop: "comingSoon", type: "radio", id: 11 },
  { prop: "classification", type: "radio", id: 12 },
];

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short Film",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

const languages = [
  "English",
  "French",
  "Spanish",
  "Mandarin",
  "Italian",
  "Japanese",
  "Korean",
  "German",
  "Russian",
  "Hindi",
  "Turkish",
  "Portuguese",
  "Arabic",
  "Tamil",
  "Dutch",
  "Cantonese",
  "Telugu",
  "Polish",
  "Czech",
  "Punjabi",
  "Hebrew",
  "Malayalam",
  "Swedish",
  "Danish",
  "Romanian",
  "Norwegian",
];

const classification = ["G", "PG", "PG-13", "R", "NC-17"];

const displays = ["2D", "3D", "4D"];

function CreateMovie(
  _requirements,
  _genres,
  _languages,
  classification,
  _displays
) {
  const dispatch = useDispatch();

  // const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    title: "",
    genre: [],
    duration: "",
    description: "",
    teaser: "",
    display: [],
    classification: "",
    cast: [],
    director: "",
    language: [],
    poster: "",
    comingSoon: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelectGenres(e) {
    e.preventDefault();
    setInput({
      ...input,
      genre: [...input.genre, e.target.value],
    });
  }

  function handleSelectLanguages(e) {
    e.preventDefault();
    setInput({
      ...input,
      language: [...input.language, e.target.value],
    });
  }

  function handleSelectDisplay(e) {
    e.preventDefault();
    setInput({
      ...input,
      display: [...input.display, e.target.value],
    });
  }

  function handleDeleteGenre(el) {
    setInput({
      ...input,
      genre: input.genre.filter((gen) => gen !== el),
    });
  }

  function handleDeleteLanguage(el) {
    setInput({
      ...input,
      language: input.language.filter((lang) => lang !== el),
    });
  }

  function handleDeleteDisplay(el) {
    setInput({
      ...input,
      display: input.display.filter((disp) => disp !== el),
    });
  }

  function handleSubmit(e) {
    input.cast = input.cast.split(",");

    console.log(input);

    e.preventDefault();
    dispatch(postMovie(input));
    alert("Movie Created!");
    setInput({
      title: "",
      genre: [],
      duration: "",
      description: "",
      teaser: "",
      display: [],
      classification: "",
      cast: [],
      director: "",
      writter: "",
      language: [],
      poster: "",
    });
    e.target.reset();
  }

  return (
    <div>
      <div className="create--movie--container">
        <div className="create--movie">
          <h1 className="create--movie--text">CreateMovie</h1>
          <br />
          <form
            className="create--movie--form"
            onSubmit={(e) => handleSubmit(e)}
          >
            {requirements.map((req) => {
              value = req.prop;

              typeOfForm = req.type;

              let textForm = typeOfForm === "text";
              let numberForm = typeOfForm === "number";
              let textAreaForm = typeOfForm === "textArea";
              let selectForm = typeOfForm === "select";
              let urlForm = typeOfForm === "textUrl";
              let radioForm = typeOfForm === "radio";
              let checkForm = typeOfForm === "checkBox";

              if (numberForm) {
                return (
                  <>
                    <label
                      htmlFor={req.prop}
                      className="create--movie--form--titles"
                      key={randomId}
                    >
                      {req.prop[0].toUpperCase() +
                        req.prop.substring(1) +
                        " : "}
                    </label>
                    <input
                      key={req.prop}
                      className="create--movie--form--input"
                      type="text"
                      value={input.value}
                      name={req.prop}
                      // required
                      placeholder={`insert ${req.prop} here...`}
                      onChange={(e) => handleChange(e)}
                    />
                  </>
                );
              }

              if (textForm) {
                return (
                  <>
                    <label
                      htmlFor={req.prop}
                      className="create--movie--form--titles"
                      key={randomId}
                    >
                      {req.prop[0].toUpperCase() +
                        req.prop.substring(1) +
                        " : "}
                    </label>
                    <input
                      key={req.prop}
                      className="create--movie--form--input"
                      type="text"
                      value={input.value}
                      name={req.prop}
                      // required
                      placeholder={`insert ${req.prop} here...`}
                      onChange={(e) => handleChange(e)}
                    />
                  </>
                );
              }
              if (urlForm) {
                return (
                  <>
                    <label
                      htmlFor={req.prop}
                      className="create--movie--form--titles"
                      key={randomId}
                    >
                      {req.prop[0].toUpperCase() +
                        req.prop.substring(1) +
                        " : "}
                    </label>
                    <input
                      key={req.prop}
                      className="create--movie--form--input"
                      type="text"
                      value={input.value}
                      name={req.prop}
                      // required
                      placeholder={`insert ${req.prop} url here...`}
                      onChange={(e) => handleChange(e)}
                    />
                  </>
                );
              }
              if (textAreaForm) {
                return (
                  <div>
                    <label
                      htmlFor={req.prop}
                      className="create--movie--form--titles"
                      key={randomId}
                    >
                      {req.prop[0].toUpperCase() +
                        req.prop.substring(1) +
                        " : "}
                    </label>
                    <textarea
                      id={req.prop}
                      name={req.prop}
                      value={input.value}
                      onChange={(e) => handleChange(e)}
                      rows="5"
                      cols="33"
                      placeholder="Insert description here..."
                    />
                  </div>
                );
              }
            })}
            {/* Final of mapped form */}

            {/* Displays Select */}

            <>
              <label htmlFor="display" className="create--movie--form--titles">
                Display :
              </label>
              <select
                className="input"
                onChange={(e) => handleSelectDisplay(e)}
              >
                <option key={0} value="">
                  Select
                </option>
                {displays
                  .sort(function (a, b) {
                    if (a < b) return -1;
                    if (a > b) return 1;
                    return 0;
                  })
                  .map((disp) => {
                    return !input.display.includes(disp) ? (
                      <option key={disp} value={disp}>
                        {disp}
                      </option>
                    ) : null;
                  })}
              </select>
              <div className="delete-container">
                <ul>
                  {input.display.map((el) => (
                    <div>
                      {el} {""}
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteDisplay(el)}
                      >
                        <div className="button">X</div>
                      </button>
                    </div>
                  ))}
                </ul>
              </div>
            </>

            {/* Genres Select */}

            <>
              <label htmlFor="genre" className="create--movie--form--titles">
                Genres :
              </label>
              <select className="input" onChange={(e) => handleSelectGenres(e)}>
                <option key={0} value="">
                  Select
                </option>
                {genres
                  .sort(function (a, b) {
                    if (a < b) return -1;
                    if (a > b) return 1;
                    return 0;
                  })
                  .map((genre) => {
                    return !input.genre.includes(genre) ? (
                      <option key={genre} value={genre}>
                        {genre}
                      </option>
                    ) : null;
                  })}
              </select>
              <div className="delete-container">
                <ul>
                  {input.genre.map((el) => (
                    <div>
                      {el} {""}
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteGenre(el)}
                      >
                        <div className="button">X</div>
                      </button>
                    </div>
                  ))}
                </ul>
              </div>
            </>

            {/* Languages Select */}

            <>
              <>
                <label
                  htmlFor="languages"
                  className="create--movie--form--titles"
                >
                  Language :
                </label>
                <select
                  className="input"
                  onChange={(e) => handleSelectLanguages(e)}
                >
                  <option key={0} value="">
                    Select
                  </option>
                  {languages
                    .sort(function (a, b) {
                      if (a < b) return -1;
                      if (a > b) return 1;
                      return 0;
                    })
                    .map((lang) => {
                      return !input.language.includes(lang) ? (
                        <option key={lang} value={lang}>
                          {lang}
                        </option>
                      ) : null;
                    })}
                </select>
                <div className="delete-container">
                  <ul>
                    {input.language.map((el) => (
                      <div>
                        {el} {""}
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteLanguage(el)}
                        >
                          <div className="button">X</div>
                        </button>
                      </div>
                    ))}
                  </ul>
                </div>
              </>
            </>
            {/* Coming Soon Radio */}
            <>
              <label
                htmlFor="comingSoon"
                className="create--movie--form--titles"
              >
                Coming Soon?
              </label>
              <div className="create--movie--radio">
                <input
                  type="radio"
                  value="true"
                  name="comingSoon"
                  defaultChecked="true"
                  id="true"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="true">Yes</label>
              </div>
              <div className="create--movie--radio">
                <input
                  type="radio"
                  value="false"
                  name="comingSoon"
                  id="false"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="false">No</label>
              </div>
            </>
            {/* Classification Radio */}
            <>
              <label
                htmlFor="classification"
                className="create--movie--form--titles"
              >
                Classification :
              </label>
              <div className="create--movie--radio">
                <input
                  type="radio"
                  value="G"
                  name="classification"
                  id="G"
                  defaultChecked="true"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="G">
                  G - General Audiences All ages admitted. Nothing that would
                  offend parents for viewing by children.
                </label>
              </div>
              <div className="create--movie--radio">
                <input
                  type="radio"
                  value="PG"
                  name="classification"
                  id="PG"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="PG">
                  PG – Parental Guidance Suggested Some material may not be
                  suitable for children.
                </label>
              </div>
              <div className="create--movie--radio">
                <input
                  type="radio"
                  value="PG-13"
                  name="classification"
                  id="PG-13"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="PG13">
                  PG-13 – Parents Strongly Cautioned Some material may be
                  inappropriate for children under 13.
                </label>
              </div>
              <div className="create--movie--radio">
                <input
                  type="radio"
                  value="R"
                  name="classification"
                  id="R"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="R">
                  R – Restricted Under 17 requires accompanying parent or adult
                  guardian.
                </label>
              </div>

              <div className="create--movie--radio">
                <input
                  type="radio"
                  value="NC-17"
                  name="classification"
                  id="NC-17"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="NC-17">
                  NC-17 – Adults Only No One 17 and Under Admitted.
                </label>
              </div>
            </>
            <br />
            <button className="admin--button" type="submit">
              Create Movie
            </button>
            <button className="admin--button" type="reset">
              Clear Fields
            </button>
            <Link to="/adminmenu" className="create--movie--button">
              <div className="admin--button">Go Back</div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateMovie;
