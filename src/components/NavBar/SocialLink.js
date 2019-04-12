import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./SocialLink.css";

class SocialLink extends Component {
  render() {
    const { to, icon } = this.props;
    return (
      <button>
        <a href={to} target="_blank" rel="noopener noreferrer">
          <i className={`fab ${icon} fa-xs ${styles.icon}`} />
        </a>
      </button>
    );
  }
}

SocialLink.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default SocialLink;
