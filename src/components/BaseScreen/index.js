import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./index.css";

class BaseScreen extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <div className={styles.root}>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}

BaseScreen.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default BaseScreen;
