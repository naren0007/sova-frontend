import React from "react";
import  './sass/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Component/Home/index";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </>
  );
}

export default App;
