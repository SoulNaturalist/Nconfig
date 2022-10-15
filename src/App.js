import './App.css';
import React, {Fragment} from 'react';
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import DeleteConfig from "./components/DeleteConfigPage"
import CreateConfig from "./components/CreateConfigPage"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/Nconfig/" element={<WelcomePage />} />
            <Route path="/Nconfig/delete" element={<DeleteConfig />} />
            <Route path="/Nconfig/create" element={<CreateConfig />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
