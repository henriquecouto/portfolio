import React, { Component } from "react";

import logo from "../../assets/logo1.svg";

import styles from "./index.css";

export default class LogoSwing extends Component {
  render() {
    return (
      <figure className={styles.swing}>
        <img
          alt="Logo balançando como se estivesse pendurada"
          src={logo}
          className={styles.logoImg}
        />
      </figure>
    );
  }
}
