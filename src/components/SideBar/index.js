import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./index.css";
import MyLink from "./MyLink";
import SocialLink from "./SocialLink";
import logo from "../../assets/logo.svg";

class SideBar extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <div className={styles.sidenav}>
          <Link to="/">
            <div className={styles.section}>
              <img src={logo} className={styles.logo} alt="Logo H" />
            </div>
          </Link>

          <div className={styles.section}>
            <MyLink to="/" icon="home" text="INÍCIO" />
            <MyLink to="/contact" icon="chat" text="CONTATO" />
            <MyLink to="/works" icon="work" text="TRABALHOS" />
            <MyLink to="/skills" icon="category" text="HABILIDADES" />
          </div>

          <div className={styles.section}>
            <SocialLink
              to="https://www.facebook.com/henriqcouto"
              icon="fa-facebook"
            />
            <SocialLink
              to="https://github.com/henriquecouto"
              icon="fa-github"
            />
            <SocialLink
              to="https://www.linkedin.com/in/henrique-couto-3287b1133/"
              icon="fa-linkedin"
            />
          </div>
        </div>
        <div className={styles.main}>{children}</div>
      </>
    );
  }
}

SideBar.propTypes = {
  children: PropTypes.array.isRequired
};

export default SideBar;
