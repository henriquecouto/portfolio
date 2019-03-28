import React, { Component } from "react";

import SideBar from "./components/SideBar";
import Home from "./screens/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <SideBar>
            <Home />
          </SideBar>
        </div>
      </div>
    );
  }
}

export default App;
