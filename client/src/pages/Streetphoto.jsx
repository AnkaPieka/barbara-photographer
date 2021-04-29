import React, { PureComponent } from "react";
import Gallery from "react-photo-gallery";

import "../styles/global.css";
import "../styles/gallery.css";

export class Streetphoto extends PureComponent {
  render() {
    const photos = [
      {
        src: "/img/sample.jpg",
        width: 4.5,
        height: 3,
      },
      {
        src: "/img/sample2.jpg",
        width: 1,
        height: 1,
      },
      {
        src: "/img/sample4.jpg",
        width: 3,
        height: 4,
      },
      {
        src: "/img/sample3.jpg",
        width: 4,
        height: 3,
      },
    ];

    const onClick = () => {
      alert("You can't do that");
    };

    return (
      <div className="body-page">
        <div className="gallery-margin">
          <Gallery photos={photos} onClick={onClick} />
        </div>
      </div>
    );
  }
}

export default Streetphoto;
