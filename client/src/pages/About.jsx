import React, { PureComponent } from "react";

import "../styles/global.css";
import "../styles/about.css"

export class About extends PureComponent {
  render() {
    return (
      <section className="body-page">
        <div className="grid-container body-margin">
          <div className="title">
            <h2>Barbara.</h2>
          </div>
          <div className="photo">
            <img className="barbara" src="/img/sample4.jpg" alt="barbara portrait" />
          </div>
          <div className="desc">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
