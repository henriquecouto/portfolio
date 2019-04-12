import React, { Component } from "react";

import styles from "./index.css";

export default class Loading extends Component {
  render() {
    return (
      <div className={styles.spinner}>
        <div className={styles.cube1} />
        <div className={styles.cube2} />
      </div>
    );
  }
}
