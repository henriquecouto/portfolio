import React, { Component } from "react";

const name = ["H", "e", "n", "r", "i", "q", "u", "e"];

class Home extends Component {
  render() {
    return (
      <>
        <div className="column">
          {name.map((letter, key) => (
            <span key={key} className="logo-text">
              {letter}
            </span>
          ))}
          <h1>Home</h1>
        </div>
        <div className="column" style={{ width: 300 }} />
        <div className="column" style={{ width: 300 }} />
      </>
    );
  }
}

export default Home;
