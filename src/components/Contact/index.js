import React, { Component } from "react";

import styles from "./index.css";
import BaseScreen from "../BaseScreen";

import { fs } from "../../utils/firebase";
import Loading from "../Loading";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  msg: "",
  nameError: false,
  emailError: false,
  msgError: false,
  sendStatus: "none"
};

export default class Contact extends Component {
  state = INITIAL_STATE;

  handleChange = ({ target: { name, value } }) => {
    if (name === "subject") {
      this.setState({
        subject: value
      });
    } else {
      this.setState({
        [name]: value,
        [`${name}Error`]: !(value !== "")
      });
    }
  };

  inputClick = ({ target: { name, value } }) => {
    if (value === "") {
      this.setState({
        [`${name}Error`]: true
      });
    }
  };

  handleChangeEmail = ({ target: { value } }) => {
    const ok = this.ValidateEmail(value);
    this.setState({
      email: value,
      emailError: ok
    });
  };

  ValidateEmail = mail => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(mail)) {
      return false;
    }
    return true;
  };

  verifyFields = () => {
    const { name, email, msg } = this.state;
    let ok = true;

    if (name === "") {
      this.setState({ nameError: true });
      ok = false;
    } else {
      this.setState({ nameError: false });
    }

    if (email === "" || this.ValidateEmail(email)) {
      this.setState({ emailError: true });
      ok = false;
    } else {
      this.setState({ emailError: false });
    }

    if (msg === "") {
      this.setState({ msgError: true });
      ok = false;
    } else {
      this.setState({ msgError: false });
    }

    return ok;
  };

  send = () => {
    const ok = this.verifyFields();
    if (ok) {
      this.setState({ sendStatus: "loading" });
      const { name, email, subject, msg } = this.state;
      fs.collection("messages")
        .add({ name, email, subject, msg })
        .then(() => this.setState({ sendStatus: "ready" }))
        .catch(() => this.setState({ sendStatus: "error" }));
    }
  };

  back = reset => () => {
    if (reset) {
      this.setState(INITIAL_STATE);
    } else {
      this.setState({ sendStatus: "none" });
    }
  };

  render() {
    const {
      name,
      email,
      subject,
      msg,
      nameError,
      emailError,
      msgError,
      sendStatus
    } = this.state;

    const isError =
      nameError || emailError || msgError || !name || !email || !msg;

    return (
      <>
        {sendStatus === "none" && (
          <BaseScreen title="Envie uma mensagem">
            <div className={styles.contact}>
              <input
                className={
                  nameError ? styles.input + " " + styles.error : styles.input
                }
                type="text"
                name="name"
                placeholder="Nome"
                value={name}
                onChange={this.handleChange}
                onClick={this.inputClick}
                onFocus={this.inputClick}
              />
              <input
                className={
                  emailError ? styles.input + " " + styles.error : styles.input
                }
                type="email"
                name="email"
                placeholder="Email: usuario@email.com"
                value={email}
                onChange={this.handleChangeEmail}
                onClick={this.inputClick}
                onFocus={this.inputClick}
              />
              <input
                className={styles.input}
                type="text"
                name="subject"
                placeholder="Assunto"
                value={subject}
                onChange={this.handleChange}
              />
              <textarea
                className={
                  msgError
                    ? styles.input + " " + styles.message + " " + styles.error
                    : styles.input + " " + styles.message
                }
                name="msg"
                placeholder="Sua mensagem aqui"
                value={msg}
                onChange={this.handleChange}
                onClick={this.inputClick}
                onFocus={this.inputClick}
              />
              <button
                disabled={isError}
                className={isError ? styles.disabled : styles.enabled}
                onClick={this.send}
              >
                ENVIAR
              </button>
            </div>
          </BaseScreen>
        )}
        {sendStatus === "loading" && (
          <BaseScreen title="Enviando...">
            <Loading />
          </BaseScreen>
        )}
        {sendStatus === "ready" && (
          <BaseScreen title="Pronto!">
            <>
              <p>Sua mensagem foi enviada</p>
              <button className={styles.enabled} onClick={this.back(true)}>
                Voltar
              </button>
            </>
          </BaseScreen>
        )}
        {sendStatus === "error" && (
          <BaseScreen title="Ops...">
            <>
              <p>
                Ocorreu um probleminha ao enviar sua mensagem, gostaria de
                tentar novamente?
              </p>
              <button className={styles.enabled} onClick={this.back(false)}>
                Voltar
              </button>
            </>
          </BaseScreen>
        )}
      </>
    );
  }
}
