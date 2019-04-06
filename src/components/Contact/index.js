import React, { Component } from "react";

import styles from "./index.css";

export default class Home extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>Contato</h1>
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
      </div>
    );
  }
}
