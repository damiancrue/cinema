import { useAuth } from "../Context/authContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function ProtectedRoute({ children }) {
  const [refresh, setRefresh] = useState(undefined);
  const { authUser } = useAuth();
  let token;
  console.log(authUser);
  authUser !== null
    ? (token = authUser.accessToken)
    : (token = window.localStorage.getItem("token"));

  if (token === null) {
    return <Navigate to="/" />;
  }

  const checkRoles = () => {
    axios
      .post("https://api-pf-cine.herokuapp.com/users/isAdmin", {
        token: token,
      })
      .then((res) => {
        setRefresh(res.data);
      });
  };

  if (refresh === undefined) {
    checkRoles();
  }

  if (refresh !== undefined) {
    if (refresh) {
      return <>{children}</>;
    } else {
      return <Navigate to="/" />;
    }
  }

  //holamundo
  // axios.get("http://localhost:3001/users/getAll").then((res) => {
  //   console.log(res.data);
  // });
  // axios
  //   .post("http://localhost:3001/users/isAdmin", {
  //     token: token,
  //   })
  //   .then((res) => {
  //     return res.data;
  //   })
  //   .then((data) => {
  //     if (data) {
  //       return <>{children}</>;
  //     } else {
  //       return <Navigate to="/login" />;
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}
