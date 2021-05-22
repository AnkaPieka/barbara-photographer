import React from "react";

function Image({ source, imgText }) {
  return (
    <div>
      <div className="homepage-text-photo-container">
        <img className="homepage-photo" src={source} alt="not found" />
        <p className="text-over-photo">{ imgText }</p>
      </div>
    </div>
  );
}

export default Image;
