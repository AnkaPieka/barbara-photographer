import React, { PureComponent } from "react";
import Image from "../components/Image";

import "../styles/global.css";
import "../styles/about.css"

export class About extends PureComponent {
  render() {
    return (
      <section className="body-page">
        <div class="grid-container body-margin">
          <div class="title">
            <h2>Barbara.</h2>
          </div>
          <div class="photo">
            <Image source="/img/sample4.jpg" />
          </div>
          <div class="desc">
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
