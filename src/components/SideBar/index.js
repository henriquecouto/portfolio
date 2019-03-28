import React, { Component } from "react";
import PropTypes from "prop-types";

import "./style.css";

class LeftMenu extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <div className="sidenav">
          <a href="/">
            <i className="material-icons-round icon">home</i>
          </a>
          <a href="/">
            <i className="material-icons-round icon">perm_contact_calendar</i>
          </a>
          <a href="/">
            <i className="material-icons-round icon">room_service</i>
          </a>
        </div>
        <div className="main">{children}</div>
      </>
    );
  }
}

LeftMenu.propTypes = {
  children: PropTypes.object.isRequired
};

export default LeftMenu;
