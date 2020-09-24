import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Navbar";
import Home from



function App() {
  return (
    <Router>
      <div className="App">
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
