import { useState } from "react";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";
import { newUser } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

import "../Register/Register.css";
import axios from "axios";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const navigate = useNavigate();
  const { signUp } = useAuth();
  const dispatch = useDispatch();

  const handleHome = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password, user.name);
      dispatch(newUser({ name: user.name, email: user.email }));
      //ToDo: Validar credencials y admin en esta instancia
      navigate("/");
    } catch (error) {
      console.log(error.message);
      if (error.code === "auth/invalid-email") {
        setError("Correo inválido");
      }
      if (error.code === "auth/weak-password") {
        setError("Contraseña inválida");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("Usuario ya registrado");
      }
    }
  };
  return (
    <div className="login--container">
      <h1 className="login--title">REGISTER</h1>
      <form className="login--form" onSubmit={(e) => handleSubmit(e)}>
        <div className="login--container--email">
          <label name="Name">USERNAME</label>
          <input
            id="Register-name"
            name="name"
            type="text"
            className="login--input"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="login--container--email">
          <label name="Email">EMAIL</label>
          <input
            id="Register-email"
            name="email"
            type="email"
            className="login--input"
            placeholder="email@email.com"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="login--container--password">
          <label name="Password">PASSWORD</label>
          <input
            id="Register-password"
            name="password"
            type="password"
            className="login--input"
            placeholder="6 to 15 characters"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="login--button" type="submit">
          REGISTER NOW
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
