
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './components/views/MainPage/MainPage';
import SubPage from './components/views/SubPage/SubPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/sub" element={<SubPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
