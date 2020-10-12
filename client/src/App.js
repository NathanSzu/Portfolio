import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from './pages/Resume';
import BackgroundVid from './components/BackgroundVid'



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <BackgroundVid />
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Resume" component={Resume} />
      </div>
    </Router>
  );
}

export default App;
