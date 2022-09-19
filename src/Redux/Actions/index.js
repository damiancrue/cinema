const axios = require("axios");

export function getMovies() {
  return function (dispatch) {
    return axios
      .get("https://api-pf-cine.herokuapp.com/movies")
      .then((r) => r.data)
      .then((d) => dispatch({ type: "GET_MOVIES", payload: d }))
      .catch((e) => console.log(e));
  };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return axios
      .get(`https://api-pf-cine.herokuapp.com/movies/${id}`)
      .then((r) => r.data)
      .then((d) => dispatch({ type: "GET_MOVIE_DETAIL", payload: d }))
      .catch((e) => console.log(e));
  };
}

export function getMovieName(name) {
  return async function (dispatch) {
    const json = await axios
      .get(`http://api-pf-cine.herokuapp.com/movies?name=${name}`)
      .catch((err) => console.error(err));
    return dispatch({
      type: "GET_MOVIE_NAME",
      payload: json.data,
    });
  };
}

export function delMovieDetail() {
  return {
    type: "DEL_MOVIE_DETAIL",
  };
}

export function delMoviesFiltered() {
  return {
    type: "DEL_MOVIES_FILTERED",
  };
}

export function filterMovies(filtro) {
  return {
    type: "FILTER_MOVIES",
    payload: filtro,
  };
}

export function getComingSoon() {
  return {
    type: "COMING_SOON",
  };
}


//SCHEDULES ACTIONS

export function getAllSchedule() {
  return function (dispatch) {
    return axios
      .get("https://api-pf-cine.herokuapp.com/schedules/getSchedules")
      .then((r) => r.data)
      .then((s) => dispatch({ type: "GET_ALL_SCHEDULE", payload: s[0] }))
      .catch((e) => console.log(e));
  };
}

export function getScheduleByMovie(movieId) {
  return function (dispatch) {
    return axios
      .get(
        "https://api-pf-cine.herokuapp.com/schedules/getSchedules?movie_id=" +
        movieId
      )
      .then((r) => r.data)
      .then((s) => dispatch({ type: "GET_SCHEDULE_BY_MOVIE", payload: s[0] }))
      .catch((e) => console.log(e));
  };
}

export function getScheduleById(Id) {
  return function (dispatch) {
    return axios
      .get(`https://api-pf-cine.herokuapp.com/schedules/get/${Id}`)
      .then((r) => r.data)
      .then((m) => dispatch({ type: "GET_SCHEDULE_BY_ID", payload: m }))
      .catch((e) => console.log(e));
  };
}

// MOVIES ADMIN ACTIONS

export function getAllMovies() {
  return function (dispatch) {
    return axios
      .get("https://api-pf-cine.herokuapp.com/movies")
      .then((r) => r.data)
      .then((d) => dispatch({ type: "GET_ALL_MOVIES", payload: d }))
      .catch((e) => console.log(e));
  };
}

export function getGenres() {
  return function (dispatch) {
    return axios
      .get(`https://api-pf-cine.herokuapp.com/genres`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: "GET_GENRES", payload: data }))
      .catch((err) => console.error(err));
  };
}

export function getLanguages() {
  return function (dispatch) {
    return axios
      .get(`https://api-pf-cine.herokuapp.com/languages`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: "GET_LANGUAGES", payload: data }))
      .catch((err) => console.error(err));
  };
}

export function getDisplays() {
  return function (dispatch) {
    return axios
      .get(`https://api-pf-cine.herokuapp.com/displays`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: "GET_DISPLAYS", payload: data }))
      .catch((err) => console.error(err));
  };
}

export function createMovie(payload) {
  return async function () {
    const json = await axios
      .post(`https://api-pf-cine.herokuapp.com/movies/create`, payload)
      .then((res) =>
        res.status === 201
          ? alert("Movie created!")
          : alert("Error creating movie!")
      );
    return json;
  };
}

export function editMovie(id, payload) {
  return async function () {
    const json = await axios
      .put(`https://api-pf-cine.herokuapp.com/movies/update/${id}`, payload)
      .then((res) =>
        res.status === 200
          ? alert("Movie edited!")
          : alert("Error editing movie!")
      );
    return json;
  };
}

export const deleteMovie = (id) => async () => {
  try {
    const response = await axios
      .delete(`https://api-pf-cine.herokuapp.com/movies/delete/${id}`)
      .then((res) =>
        res.status === 200
          ? alert("Movie deactivated!")
          : alert("Error deactivating movie!")
      );
  } catch (error) {
    console.log(error);
  }
};

export const activateMovie = (id) => async () => {
  try {
    const response = await axios
      .put(`https://api-pf-cine.herokuapp.com/movies/activate/${id}`)
      .then((res) =>
        res.status === 200
          ? alert("Movie activated!")
          : alert("Error activating movie!")
      );
  } catch (error) {
    console.log(error);
  }
};


export const resetSearch = () => {
  return {
    type: "RESET_SEARCH",
  };
};


// PRODUCT ADMIN ACTIONS


export function getProducts() {
  return function (dispatch) {
    return axios
      .get(`https://api-pf-cine.herokuapp.com/products`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: "GET_PRODUCTS", payload: data }))
      .catch((err) => console.error(err));
  };
}


export function createProduct(payload) {
  return async function () {
    const json = await axios
      .post(`https://api-pf-cine.herokuapp.com/products/create/`, payload)
      .then((res) => res.status === 201 && alert("Product created!"))
      .catch((err) => console.error(err));
    return json;
  };
}

export function deleteProduct(id) {
  return async function () {
    const json = await axios
      .delete(`https://api-pf-cine.herokuapp.com/products/delete/${id}`)
      .then((res) => res.status === 200 && alert("Product deactivated!"))
      .catch((e) => console.error(e));
    return json;
  };
}

export function activateProduct(id) {
  return async function () {
    const json = await axios
      .put(`https://api-pf-cine.herokuapp.com/products/activate/${id}`)
      .then((res) => res.status === 200 && alert("Product activated!"))
      .catch((e) => console.error(e));
    return json;
  };
}

export function editProduct(id, payload) {
  return async function () {
    console.log('payload: ', payload)
    const json = await axios
      .put(`https://api-pf-cine.herokuapp.com/products/update/${id}`, payload)
      .then((res) => res.status === 200 && alert("Product edited!"))
      .catch((e) => e.status === 404 && alert("Product not found!"));
    return json;
  };
}

// USER ADMIN ACTIONS

export function createUser(payload) {
  return async function () {
    const json = await axios
      .post(
        `https://api-pf-cine.herokuapp.com/users/createUserByAdmin`,
        payload
      )
      .then(
        (res) =>
          res.status === 201 || (res.status === 200 && alert("User created!"))
      )
      .catch((e) => console.error(e));
    return json;
  };
}

export function modifyRole(payload) {
  return async function () {
    console.log(payload);
    const json = await axios
      .put(`https://api-pf-cine.herokuapp.com/users/modifyRole/`, payload)
      .then((res) => res.status === 200 && alert("Role modified!"))
      .catch((e) => alert("User Not Found!"));
    return json;
  };
}

export function getAllUsers() {
  return function (dispatch) {
    return axios
      .get(`https://api-pf-cine.herokuapp.com/users/getAll`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: "GET_ALL_USERS", payload: data }))
      .catch((err) => console.error(err));
  };
}

export function banUser(email) {
  return async function () {
    console.log(email);
    const json = await axios
      .put(`https://api-pf-cine.herokuapp.com/users/banUser/`, email)
      .then((res) => res.status === 200 && alert("User banned"))
      .catch((e) => console.error(e));
    return json;
  };
}

export function unBanUser(email) {
  return async function () {
    const json = await axios
      .put(`https://api-pf-cine.herokuapp.com/users/unbanUser/`, email)
      .then((res) => res.status === 200 && alert("The user is now active"))
      .catch(() => alert("User Not Found!"));
    return json;
  };
}

export function resetUserPassword(payload) {
  return async function () {
    console.log(payload);
    const json = await axios
      .post(`https://api-pf-cine.herokuapp.com/users/passwordReset`, payload)
      .catch((e) => console.error(e));
    return json;
  };
}

export function deleteUser(payload) {
  return async function () {
    const json = await axios
      .delete(`https://api-pf-cine.herokuapp.com/users/deleteUser/`, payload)
      .then(
        (res) =>
          res.status === 200 || (res.status === 201 && alert("User deleted"))
      )
      .catch(() => alert("User Not Found!"));
    return json;
  };
}

// ROOMS ACTIONS

export function createRoom(payload) {
  return async function () {
    const json = await axios
      .post(`https://api-pf-cine.herokuapp.com/rooms/create`, payload)
      .then((res) =>
        res.data.active
          ? alert("Room Created")
          : alert("Room not Created, Contact Admin")
      )
      .catch((e) => console.error(e));
    return json;
  };
}

export function editRoom(id, payload) {
  return async function () {
    const json = await axios
      .put(`https://api-pf-cine.herokuapp.com/rooms/update/${id}`, payload)
      .catch((e) => console.error(e));
    return json;
  };
}

export function deleteRoom(id) {
  return async function () {
    const json = await axios
      .delete(`https://api-pf-cine.herokuapp.com/rooms/delete/${id}`)
      .then((e) =>
        e.status === 200 ? alert("Room eliminated") : alert("Room Not Found")
      )
      .catch((e) => console.error(e));
    return json;
  };
}

export function activateRoom(id) {
  return async function () {
    const json = await axios
      .delete(`https://api-pf-cine.herokuapp.com/rooms/activate/${id}`)
      .then((e) =>
        e.status === 200 ? alert("Room activated") : alert("Room Not Activated")
      )
      .catch((e) => console.error(e));
    return json;
  };
}

export function getRooms() {
  return function (dispatch) {
    return axios
      .get(`https://api-pf-cine.herokuapp.com/rooms/`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: "GET_ROOMS", payload: data }))
      .catch((err) => console.error(err));
  };
}

export function getSeats() {
  return function (dispatch) {
    return axios
      .get(`https://api-pf-cine.herokuapp.com/seats/`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: "GET_SEATS", payload: data }))
      .catch((err) => console.error(err));
  };
}

// SCHEDULES ADMIN ACTIONS

export function getSchedules() {
  return function (dispatch) {
    return axios
      .get("https://api-pf-cine.herokuapp.com/schedules/getSchedules")
      .then((res) => res.data)
      .then((data) => dispatch({ type: "GET_SCHEDULES", payload: data[0] }))
      .catch((e) => console.log(e));
  };
}

export function createSchedule(payload) {
  return async function () {
    const json = await axios
      .post(
        `https://api-pf-cine.herokuapp.com/schedules/createSchedule`,
        payload
      )
      .then((res) => res.status === 201 && alert("Schedule Created"))
      .catch((e) => alert(e.message));
    return json;
  }
}

export function deleteSchedule(payload) {
  console.log(payload);
  return async function () {
    const json = await axios
      .delete(
        `https://api-pf-cine.herokuapp.com/schedules/deleteSchedule`,
        payload
      )
      .then((res) => res.status === 200 && alert("Schedule Deleted"))
      .catch((e) => alert(e.message));
    return json;
  };
}

export function editSchedule(payload) {
  return async function () {
    const json = await axios
      .put(
        `https://api-pf-cine.herokuapp.com/schedules/updateSchedule/`,
        payload
      )
      .then((res) => res.status === 200 && alert("Schedule Updated"))
      .catch((e) => alert(e.message));
    return json;
  };
}

export function resetSchedule(){
  return {
    type: 'RESET_SCHEDULE_BY_MOVIE'
  }
}

export function delSchedule() {
  return {
    type: 'DEL_SCHEDULE'
  }
}

// REVIEWS

export function getMovieReviews(id_movie) {
  return function (dispatch) {
    return axios
      .get(`https://api-pf-cine.herokuapp.com/ratings/${id_movie}`)
      .then((r) => r.data)
      .then((d) => dispatch({ type: "GET_REVIEWS", payload: d }))
      .catch((e) => console.log(e));
  };
}

export function createReview(review) {
  return function (dispatch) {
    return axios.post('https://api-pf-cine.herokuapp.com/ratings/create', review)
      .catch((err) => console.error(err));
  };
}

// MAILS CONTACT
export function recievedContact(input) {
  return function (dispatch) {
    return axios.post('https://api-pf-cine.herokuapp.com/mail/contact/', input)
      .catch((err) => console.error(err));
  };
}

export function sentContact(input) {
  return function (dispatch) {
    return axios.post('https://api-pf-cine.herokuapp.com/mail/contact/response', input)
      .catch((err) => console.error(err));
  };
}

export function newUser(input) {
  return function (dispatch) {
    return axios.post('https://api-pf-cine.herokuapp.com/mail/register/response', input)
      .catch((err) => console.error(err));
  };
}

//!Favoritos
export function setFav(update, user_id) {
  return async function () {
    const json = await axios.put(`https://api-pf-cine.herokuapp.com/favorites/userFavs/${user_id}`, update)
      .then((res) =>
        res.status === 200
          ? alert("Success!")
          : alert("Error adding to fav!")
      );
    return json;

  };
}
