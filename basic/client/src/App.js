
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/Landingpage'
import LoginPage from './components/views/loginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth.js'

function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);
  return (
    <Router>
      <div>



        {/* <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/about"> <About /> </Route>
          <Route path="/dashboard"> <Dashboard /> </Route>
        </Switch> */}
        <Routes>
          <Route exact path="/" element={<AuthLandingPage />} />
          <Route exact path="/login" element={<AuthLoginPage />} />
          <Route exact path="/register" element={<AuthRegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
