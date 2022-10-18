import './App.css';
import React from 'react';
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import DeleteConfig from "./components/DeleteConfigPage";
import CreateConfig from "./components/CreateConfigPage";
import ConfigsPage from "./components/ConfigsPage"
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/Nconfig/" element={<WelcomePage />} />
        <Route path="/Nconfig/delete" element={<DeleteConfig />} />
        <Route path="/Nconfig/create" element={<CreateConfig />} />
        <Route path="/Nconfig/configs" element={<ConfigsPage />} />
      </Routes>
    </div>
  );
}

export default App;
