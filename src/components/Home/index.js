import React, { Component } from "react";
import { Link } from "react-router-dom";

import BaseScreen from "../BaseScreen";
import styles from "./index.css";

export default class Home extends Component {
  render() {
    return (
      <BaseScreen title="Henrique Couto">
        <>
          <div className={styles.text}>
            Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent
            taciti sociosqu ad litora torquent. Detraxit consequat et quo num
            tendi nada. Nullam volutpat risus nec leo commodo, ut interdum diam
            laoreet. Sed non consequat odio. Nec orci ornare consequat. Praesent
            lacinia ultrices consectetur. Sed non ipsum felis. Mussum Ipsum,
            cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad
            litora torquent. Detraxit consequat et quo num tendi nada. Nullam
            volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non
            consequat odio. Nec orci ornare consequat. Praesent lacinia ultrices
            consectetur. Sed non ipsum felis. Mussum Ipsum, cacilds vidis litro
            abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.
            Detraxit consequat et quo num tendi nada. Nullam volutpat risus nec
            leo commodo, ut interdum diam laoreet. Sed non consequat odio. Nec
            orci ornare consequat. Praesent lacinia ultrices consectetur. Sed
            non ipsum felis. Mussum Ipsum, cacilds vidis litro abertis. Viva
            Forevis aptent taciti sociosqu ad litora torquent. Detraxit
            consequat et quo num tendi nada. Nullam volutpat risus nec leo
            commodo, ut interdum diam laoreet. Sed non consequat odio. Nec orci
            ornare consequat. Praesent lacinia ultrices consectetur. Sed non
            ipsum felis.
          </div>
          <div className={styles.social}>
            <Link to="/contact">ENVIE UMA MENSAGEM</Link>
          </div>
        </>
      </BaseScreen>
    );
  }
}
