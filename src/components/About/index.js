import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <>
        <div className="column">
          <h1>About</h1>
        </div>
        <div className="column" style={{ width: 300 }} />
        <div className="column" style={{ width: 300 }} />
      </>
    );
  }
}

export default About;
