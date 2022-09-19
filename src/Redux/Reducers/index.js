const initialState = {
  movies: [],
  movieDetail: {},
  moviesFiltered: [],
  comingSoon: [],
  schedule: [],
  scheduleById: [],
  scheduleByMovie: [],
  movieReviews: [],
  //!------------------
  favMovies: []
  //!------------------
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      let activeMovies = action.payload.filter((m) => m.active);
      return {
        ...state,
        movies: activeMovies,
      };
    case "GET_MOVIE_NAME":
      return {
        ...state,
        movie: action.payload,
      };
    case "GET_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: action.payload,
      };
    case "DEL_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: {},
      };
    case "DEL_MOVIES_FILTERED":
      return {
        ...state,
        moviesFiltered: [],
      };
    case "FILTER_MOVIES":
      let moviesByFilter = [];
      let count = 0;
      for (const key in action.payload) {
        if (action.payload[key] !== "default") {
          if (moviesByFilter.length === 0 && count === 0) {
            count = count + 1;
            moviesByFilter = state.movies.filter((m) => {
              return m[key]
                .toString()
                .toLowerCase()
                .includes(action.payload[key].toLowerCase());
            });
          } else {
            moviesByFilter = moviesByFilter.filter((m) => {
              return m[key].toString().toLowerCase().includes(action.payload[key].toLowerCase());
            });
          }
        }
      }
      return {
        ...state,
        moviesFiltered: moviesByFilter,
      };
    case "POST_MOVIE":
      return {
        ...state,
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };
    case "GET_LANGUAGES":
      return {
        ...state,
        languages: action.payload,
      };
    case "GET_DISPLAYS":
      return {
        ...state,
        displays: action.payload,
      };
    case "GET_ALL_MOVIES":
      return {
        ...state,
        allMovies: action.payload,
      };
    case "RESET_SEARCH":
      return {
        ...state,
        movie: [],
      };

    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_ALL_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_INACTIVE_USERS":
      return {
        ...state,
        inactiveUsers: action.payload,
      };
    case "GET_ACTIVE_USERS":
      return {
        ...state,
        activeUsers: action.payload,
      };

    case "GET_ROOMS":
      return {
        ...state,
        rooms: action.payload,
      };
    case "GET_SEATS":
      return {
        ...state,
        seats: action.payload,
      };
    case "COMING_SOON":
      let soon = [...state.movies.filter(m => m.comingSoon === true)];
      console.log(soon)
      return {
        ...state,
        comingSoon: soon
      };
    case "GET_SCHEDULES":
      return {
        ...state,
        allSchedules: action.payload,
      };

    case "GET_ALL_SCHEDULE":
      let ordtime = action.payload.sort((a, b) => {
        if (a.time < b.time) return -1;
        if (a.time > b.time) return 1;
        return 0;
      })
      let ordday = ordtime.sort((a, b) => {
        if (a.day < b.day) return -1;
        if (a.day > b.day) return 1;
        return 0;
      })
      return {
        ...state,
        schedule: ordday
      };


    case "GET_SCHEDULE_BY_ID":
      return {
        ...state,
        scheduleById: action.payload
      };

    case "GET_SCHEDULE_BY_MOVIE":
      return {
        ...state,
        scheduleByMovie: action.payload
      };


      case 'RESET_SCHEDULE_BY_MOVIE':
        return{
          ...state,
          scheduleByMovie: []
        }

      case 'DEL_SCHEDULE':
        return{
          ...state,
          scheduleById: []
        }

    case 'GET_REVIEWS':
      return {
        ...state,
        movieReviews: action.payload
      }
    //!---------------------------
    /* case 'FAV_MOVIES':
      return {
        ...state,
        favMovies: action.payload
      } */
    //!---------------------------

    default:
      return {
        ...state,
      };
  }
}
