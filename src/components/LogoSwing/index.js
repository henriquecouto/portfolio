import React, { Component } from "react";

import logo from "../../assets/logo1.svg";

export default class LogoSwing extends Component {
  render() {
    return (
      <div className="column">
        <figure className="swing">
          <img src={logo} className="logo-img" />
        </figure>
      </div>
    );
  }
}
