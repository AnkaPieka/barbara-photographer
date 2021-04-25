import React, { PureComponent } from "react";
import { Link } from 'react-router-dom';
import "../styles/global.css";

export class Gallery extends PureComponent {
  render() {
    return (
      <div>
        <section className="body-page">
          <h2>Galerie</h2>
          <Link to="/photo-de-rue">Photo</Link>
          <Link to="/portraits">Portraits</Link>
        </section>
      </div>
    );
  }
}

export default Gallery;
