import React, { PureComponent } from "react";
import PhotoGrid from "../components/PhotoGrid";

import "../styles/global.css";
import "../styles/gallery.css";

export class Streetphoto extends PureComponent {
  render() {
    // const onClick = () => {
    //   alert("You can't do that");
    // };

    return (
      <div className="body-page">
        <PhotoGrid />
      </div>
    );
  }
}

export default Streetphoto;
