import React, { Component } from "react";

import styles from "./index.css";
import BaseScreen from "../BaseScreen";

export default class Contact extends Component {
  render() {
    return (
      <BaseScreen title="Contato">
        <form action="/" method="post">
          <input
            required
            className={styles.input}
            type="text"
            name="name"
            placeholder="NOME"
          />
          <input
            required
            className={styles.input}
            type="email"
            name="email"
            placeholder="EMAIL"
          />
          <input
            className={styles.input}
            type="text"
            name="subject"
            placeholder="ASSUNTO (opcional)"
          />
          <textarea
            required
            className={styles.input}
            name="msg"
            placeholder="MENSAGEM"
          />
          <button className={styles.button}>ENVIAR</button>
        </form>
      </BaseScreen>
    );
  }
}
