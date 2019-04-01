import React, { Component } from "react";

import styles from "./index.css";

const primary = ["olá,", "eu", "me", "chamo"];

const name = ["h", "e", "n", "r", "i", "q", "u", "e", "c", "o", "u", "t", "o"];

const desc = [["desenvolvedor"], ["web"], ["full-stack"]];

class Home extends Component {
  render() {
    return (
      <>
        <div className="column">
          <p>
            <div className={styles.primary}>
              {primary.map((word, key) => (
                <span
                  key={key}
                  className={styles.nameLetter}
                  style={{
                    animationDelay: `${(key + 4) / 6}s`,
                    marginRight: key !== 3 && 20
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
            <br />
            <div className={styles.name}>
              {name.map((letter, key) => (
                <span
                  key={key}
                  className={styles.nameLetter}
                  style={{
                    animationDelay: `${(key + 10) / 5}s`,
                    marginRight: key === 7 ? 20 : 2
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <hr />
            {desc.map((word, key) => (
              <div key={key} className={styles.desc}>
                <span
                  className={styles.nameLetter}
                  style={{
                    animationDelay: `${(key + 35) / 8}s`,
                    marginRight: 5
                  }}
                >
                  {word}
                </span>
              </div>
            ))}
          </p>
        </div>
      </>
    );
  }
}

export default Home;
