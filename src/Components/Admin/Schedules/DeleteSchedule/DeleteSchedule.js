import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSchedules,
  getRooms,
  getAllMovies,
  deleteSchedule,
} from "../../../../Redux/Actions";
import Loading from "../../../Loading/Loading";

import "./DeleteSchedule.css";

function DeleteSchedule() {
  const dispatch = useDispatch();

  const allSchedules = useSelector((state) => state.allSchedules);
  const allRooms = useSelector((state) => state.rooms);
  const allMovies = useSelector((state) => state.allMovies);

  useEffect(() => {
    dispatch(getSchedules());
    dispatch(getRooms());
    dispatch(getAllMovies());
  }, []);

  function handleDelete(el ) {
    const payload = {
      "schedule_id" : el,
    }
    dispatch(deleteSchedule(payload));
  }

  return (
    <div className="delete-schedule-main-container">
      <h1>Delete Schedule</h1>
      {allSchedules && allRooms && allMovies ? (
        allSchedules.map((el, index) => (
          <div key={index} className="admin-schedule">
            <h1>
              Movie:{" "}
              {allMovies.map((movie) =>
                movie.movie_id === el.movie_id ? movie.title : null
              )}
            </h1>
            <h1>
              Room:{" "}
              {allRooms.map((room) =>
                room.room_id === el.room_id ? room.name : null
              )}
            </h1>
            <h1>Date: {el.day}</h1>
            <h1>Time: {el.time}</h1>
            <h1>Status: {el.active === true ? "Active" : "Inactive"}</h1>
            <button
              className="admin-buttons"
              onClick={() => handleDelete(el.schedule_id)}
            >
              Delete Schedule
            </button>
          </div>
        ))
      ) : (
        <Loading />
      )}
      <Link to="/adminmenu" className="admin-buttons">
        <div>Go Back</div>
      </Link>
    </div>
  );
}

export default DeleteSchedule;
