import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.css";
import MyLink from "./MyLink";
import SocialLink from "./SocialLink";
import logo from "../../assets/logo.svg";

class SideBar extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <div className="sidenav">
          <div className="section">
            <Link to="/">
              <img src={logo} className="logo" alt="Logo H" />
            </Link>
          </div>

          <div className="section">
            <MyLink to="/" icon="home" text="INÍCIO" />
            <MyLink to="/contact" icon="mail" text="CONTATO" />
            <MyLink to="/works" icon="dashboard" text="TRABALHOS" />
            <MyLink to="/about" icon="person" text="SOBRE" />
          </div>

          <div className="section">
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

        <div className="main">{children}</div>
      </>
    );
  }
}

SideBar.propTypes = {
  children: PropTypes.object.isRequired
};

export default SideBar;
