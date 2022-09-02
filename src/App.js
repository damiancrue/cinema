import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import MovieDetails from "./Components/MovieDetails/MovieDetails";
import AdminMenu from "./Components/Admin/AdminMenu/AdminMenu";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { AuthProvider } from "./Components/Context/authContext";

import BanUser from "./Components/Admin/Users/BanUser/BanUser.js";
import CreateUser from "./Components/Admin/Users/CreateUser/CreateUser.js";
import ResetUserPassword from "./Components/Admin/Users/ResetUserPassword/ResetUserPassword.js";
import UpgradeUser from "./Components/Admin/Users/UpgradeUser/UpgradeUser.js";
import DeleteUser from "./Components/Admin/Users/DeleteUser/DeleteUser.js";

import CreateMovie from "./Components/Admin/Movies/CreateMovie/CreateMovie.js";
import DeleteMovie from "./Components/Admin/Movies/DeleteMovie/DeleteMovie.js";
import EditMovie from "./Components/Admin/Movies/EditMovie/EditMovie.js";


import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.js"
import Error from "./Components/Error/Error";
import Header from "./Components/Header/Header";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import Footer from "./Components/Footer/Footer";

function App() {
  //   React.useEffect(() => {
  //   console.log('render home')
  // },[])

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/movie/:id" element={<MovieDetails />} />

            <Route exact path="/adminmenu" element={
              <ProtectedRoute>
                <AdminMenu />
              </ProtectedRoute>
            } />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />

            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />

            {/* Admin User Paths */}
            <Route exact path="/adminmenu" element={
              <ProtectedRoute>
                <AdminMenu />
              </ProtectedRoute>
            } />
            <Route exact path="adminmenu/createuser" element={
              <ProtectedRoute>
                <CreateUser />
              </ProtectedRoute>
            } />
            <Route exact path="/adminmenu/upgradedemoteusers" element={
              <ProtectedRoute> 
                <UpgradeUser />
              </ProtectedRoute>
              }

            />
            <Route exact path="/adminmenu/resetuserpassword" element={
              <ProtectedRoute>
                <ResetUserPassword />
              </ProtectedRoute>
            }
            />
            <Route exact path="/adminmenu/banuser" element={<BanUser />} />
            <Route exact path="/adminmenu/deleteuser" element={
              <ProtectedRoute>
                <DeleteUser />
              </ProtectedRoute>
            }
            />

            {/* Admin Movie Paths*/}
            <Route exact path="/adminmenu/createmovie" element={
              <ProtectedRoute>
                <CreateMovie />
              </ProtectedRoute>
            }
            />
            <Route exact path="/adminmenu/editmovie" element={
              <ProtectedRoute>
                <EditMovie />
              </ProtectedRoute>
            } />
            <Route exact path="/adminmenu/deletemovie" element={
              <ProtectedRoute>
                <DeleteMovie />
              </ProtectedRoute>
            }
            />
            
            {/* Error Route */}

            <Route exact path="/error" element={<Error />} />
          </Routes>
          <SocialMedia />
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
