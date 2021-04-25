import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import "../styles/global.css";
import "../styles/home.css";

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className="body-page">
          <section
            style={{ backgroundImage: "url('/img/sample.jpg')" }}
            className="sec-1"
          >
            <h2 className="barb-name">Barbara Photographie.</h2>
            {/* <a href=".sec-2"><img className="arrow" src='/img/arrow-down.png' alt="arr"></img></a> */}
          </section>

          <section className="sec-2">
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
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
