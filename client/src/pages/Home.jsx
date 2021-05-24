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
          {/* <h2 className="barb-name">Barbara Photographie.</h2> */}
          <Link to="/portraits"><Image source="/img/sample3.jpg" imgText="Portraits." /></Link>
        </section>

        <section className="sections">
          <Link to="/photo-de-rue"><Image source="/img/sample6.jpg" imgText="Photo de rue." /></Link>
        </section>

        <section className="sections">
          <Link to=""><Image source="/img/sample5.jpg" imgText="Marques."/></Link>
        </section>

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
