import React from 'react';
import './App.css';
import AppWrapper from "./components/AppWrapper"
import { Router } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AppWrapper path="/" /> 

      </Router>
    </div>
  );
}

export default App;
