import React, { Component } from "react";
import BaseScreen from "../BaseScreen";

import styles from "./index.css";

export default class About extends Component {
  render() {
    return (
      <BaseScreen title="Sobre">
        <>
          <div className={styles.text}>Conteúdo</div>
        </>
      </BaseScreen>
    );
  }
}
