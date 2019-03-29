import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.css";

class MyLink extends Component {
  render() {
    const { to, icon, text } = this.props;
    return (
      <Link to={to} className="link">
        <i className="material-icons-round scale-up-center">{icon}</i>
        <p className="tracking-in-expand">{text}</p>
      </Link>
    );
  }
}

MyLink.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default MyLink;
