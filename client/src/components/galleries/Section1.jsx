import React from "react";

import "../../styles/section1.css";

function Section1({ galerieTitle }) {
  return (
    <div className="galerie-section-1">
      <div className="galerie-grid-container">
        <div className="galerie-text-area">
          <h3>{galerieTitle}</h3>
          <p className="galeries-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            congue nibh, vel venenatis sem. Proin tempus semper elementum.
            Maecenas mattis sed diam et ornare. Nunc a lacus non metus laoreet
            tristique.
          </p>
        </div>
        <div className="photo-area2">
          <img
            className="one-photo-of-a-gallery one-photo-of-a-gallery-3"
            src="/img/sample4.jpg"
            alt="galerie pic"
          />
        </div>
        <div className="photo-area1">
          <div className="sub-grid-1">
            <img
              className="one-photo-of-a-gallery one-photo-of-a-gallery-1"
              src="/img/sample8.jpg"
              alt="galerie pic"
            />
          </div>
          <div className="sub-grid-2">
            <img
              className="one-photo-of-a-gallery one-photo-of-a-gallery-2"
              src="/img/sample9.jpg"
              alt="galerie pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
