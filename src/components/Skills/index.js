import React, { Component } from "react";
import BaseScreen from "../BaseScreen";
import CardSkill from "../CardSkill";

import styles from "./index.css";

import skills from "../../assets/skills";

export default class Skills extends Component {
  render() {
    return (
      <BaseScreen title="Minhas habilidades">
        <>
          <div className={styles.content}>
            {skills.map(skill => (
              <CardSkill key={skill.id} image={skill.img} name={skill.name} />
            ))}
          </div>
        </>
      </BaseScreen>
    );
  }
}
