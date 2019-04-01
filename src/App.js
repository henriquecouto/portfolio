import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SideBar from "./components/SideBar";
import LogoSwing from "./components/LogoSwing";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Works from "./components/Works";
import About from "./components/About";

import styles from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.AppHeader}>
          <Router>
            <SideBar>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/works" component={Works} />
              <Route exact path="/about" component={About} />
            </SideBar>
          </Router>
          <LogoSwing />
        </div>
      </div>
    );
  }
}

export default App;
