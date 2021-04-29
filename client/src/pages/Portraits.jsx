import React, { PureComponent } from "react";
import Gallery from "react-photo-gallery";
import PhotoGrid from "../components/PhotoGrid";

import "../styles/global.css";

export class Portraits extends PureComponent {
  render() {
    const photos = [
      {
        src: "/img/sample.jpg",
        // width: 4,
        // height: 3,
      },
      {
        src: "/img/sample2.jpg",
        // width: 1,
        // height: 1,
      },
      {
        src: "/img/sample4.jpg",
        // width: 2,
        // height: 2,
      },
      {
        src: "/img/sample3.jpg",
        // width: 5,
        // height: 5,
      },
    ];

    const onClick = () => {
      alert("You can't do that");
    };

    return (
      <div className="body-page">
        <Gallery photos={photos} onClick={onClick} />
        {/* <PhotoGrid /> */}
      </div>
    );
  }
}

export default Portraits;
