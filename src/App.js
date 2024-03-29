import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
// import Works from "./components/Works";
import Skills from "./components/Skills";

import styles from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Router>
          <NavBar>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route exact path="/works" component={Works} /> */}
            <Route exact path="/skills" component={Skills} />
          </NavBar>
        </Router>
      </div>
    );
  }
}

export default App;
