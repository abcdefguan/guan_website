import React from 'react';

//Include Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Include React Router
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  //Todo: create headers
  return (
    <Router>
      <div className = "container-fluid">
        Hello World!!
      </div>
    </Router>
  );
}

export default App;
