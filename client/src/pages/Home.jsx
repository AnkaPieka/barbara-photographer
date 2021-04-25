import React, { PureComponent } from "react";
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
          </section>

          <section className="sec-2">
            <h2 className="sec-2-title">Galeries</h2>
            <div className="imgs-container">
              <div className="img">
                <Image source="/img/sample2.jpg" />
                <p className="img-lgd">Portraits</p>
              </div>
              <div className="img">
                <Image source="/img/sample3.jpg" />
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
