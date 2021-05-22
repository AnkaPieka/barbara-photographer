import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
import Image from "../components/Image";
import Footer from "../components/Footer"

import "../styles/global.css";
import "../styles/home.css";

export class Home extends PureComponent {
  render() {
    return (
      <div className="body-page">
        <section className="sections">
          <h2 className="barb-name">Barbara Photographie.</h2>
          <Image source="/img/sample3.jpg" imgText="Portraits." />
        </section>

        <section className="sections">
          <Image source="/img/sample4.jpg" imgText="Photo de rue." />
        </section>

        <section className="sections">
          <Image source="/img/sample5.jpg" imgText="Marques."/>
        </section>

        <Footer />

        {/* <section id="galeries" className="sec-2">
            <h2>
              <Link to="/galeries" className="sec-2-title">
                Galeries
              </Link>
            </h2>
            <div className="imgs-container">
              <div className="img">
                <Link to="/portraits">
                  <Image source="/img/sample2.jpg" />
                </Link>
                <p className="img-lgd">Portraits</p>
              </div>
              <div className="img">
                <Link to="/photo-de-rue">
                  <Image source="/img/sample3.jpg" />
                </Link>
                <p className="img-lgd">Photographie de rue</p>
              </div>
            </div>
          </section> */}
      </div>
    );
  }
}

export default Home;
