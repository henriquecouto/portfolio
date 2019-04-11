import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./index.css";

class CardSkill extends Component {
  render() {
    const { image, name } = this.props;
    return (
      <div className={styles.element}>
        <img align="left" src={image} alt={`logo ${name}`} />
        {name}
      </div>
    );
  }
}

CardSkill.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default CardSkill;
