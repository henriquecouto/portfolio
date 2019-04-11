import React, { Component } from "react";
import { Link } from "react-router-dom";

import BaseScreen from "../BaseScreen";
import styles from "./index.css";

import perfil from "../../assets/perfil.jpg";

export default class Home extends Component {
  render() {
    return (
      <BaseScreen title="Henrique Couto">
        <>
          <div className={styles.text}>
            <div className={styles.perfil}>
              <img src={perfil} alt="perfil" />
            </div>
            <p>
              <span className={styles.spot}>Olá,</span> eu sou Desenvolvedor Web
              Full Stack, atualmente estou cursando Bacharel em Sistemas de
              Informação.
            </p>
            <p>
              Tenho trabalhado principalmente com{" "}
              <span className={styles.spot}>ReactJS</span> no Front-end e{" "}
              <span className={styles.spot}>Express</span> no Back-end, porém
              estou disponível para pegar e aprender outras linguagens e
              frameworks!
            </p>
            <p className={styles.spot}>
              Se você deseja desenvolver uma aplicação com tecnologias Web, eu
              adoraria trabalhar nela com você!
            </p>
          </div>
          <div className={styles.social}>
            <Link to="/contact">ENVIE UMA MENSAGEM</Link>
          </div>
        </>
      </BaseScreen>
    );
  }
}
