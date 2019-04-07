import React, { Component } from "react";
import BaseScreen from "../BaseScreen";

import styles from "./index.css";

export default class About extends Component {
  render() {
    return (
      <BaseScreen title="Sobre">
        <>
          <div className={styles.text}>
            Eu sou Desenvolvedor Web FullStack, atualmente cursando Bacharel em
            Sistemas de Informação pela Universidade Federal de Alagoas (UFAL).
            Tenho bastante interesse em User eXperience (UX) e Desenvolvimento
            Mobile. <h4>O que tenho a oferecer atualmente:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>ReactJS</li>
              <li>Express</li>
            </ul>
          </div>
        </>
      </BaseScreen>
    );
  }
}
