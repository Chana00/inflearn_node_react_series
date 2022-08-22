
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

function App() {
  return (
    <Router>
      <div>



        {/* <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/about"> <About /> </Route>
          <Route path="/dashboard"> <Dashboard /> </Route>
        </Switch> */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
