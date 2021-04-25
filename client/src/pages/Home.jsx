import React, { PureComponent } from "react";

import "../styles/global.css";
import "../styles/home.css";

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className="body-page">
          <section style={{ backgroundImage: "url('/img/sample.jpg')"}} className="sec-1">
            <h2 className="barb-name">Barbara Photographie.</h2>
          </section>

          <section className="sec-2">
            <h2>Hi</h2>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
