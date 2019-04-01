import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import style from "./MyLink.css";

class MyLink extends Component {
  render() {
    const { to, icon, text } = this.props;
    return (
      <Link to={to} className={style.link}>
        <i className={"material-icons-round " + style.scaleUpCenter}>{icon}</i>
        <p className={style.trackingInExpand}>{text}</p>
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
