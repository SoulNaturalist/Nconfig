import './App.css';
import React, {Fragment} from 'react';
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/Nconfig/" element={<WelcomePage />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
