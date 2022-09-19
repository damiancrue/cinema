import "./FilterBy.css";

import { useEffect } from 'react';

import { getGenres } from "./../../Redux/Actions";

import { useDispatch, useSelector } from "react-redux";

export default function FilterBy({ filters, setFilters }) {

  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  let handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="filters--select--container">
        <select
          onChange={(e) => handleChange(e)}
          name="genre"
          className="filters--select"
          value={filters.genre}
        >
          <option value='default' className="filters--option">
            Genre
          </option>
          {genres !== undefined && genres.map((g, index) => (
            <option key={index} value={g} className="filters--option">
              {g}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => handleChange(e)}
          name="comingSoon"
          className="filters--select"
          value={filters.comingSoon}
        >
          <option value='default' className="filters--option">
            Coming soon
          </option>
          <option value={true} className="filters--option">True</option>
          <option value={false} className="filters--option">False</option>
        </select>
      </div>
    </>
  );
}