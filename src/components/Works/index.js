import React, { Component } from "react";
import BaseScreen from "../BaseScreen";

import styles from "./index.css";

export default class Works extends Component {
  render() {
    return (
      <BaseScreen title="Trabalhos">
        <>
          <div className={styles.text}>Conteúdo</div>
        </>
      </BaseScreen>
    );
  }
}
