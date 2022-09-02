
import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './components/views/MainPage/MainPage';

import EditorPage from './components/views/MainPage/EditorPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/editor" element={<EditorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
