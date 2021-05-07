import React from "react";

import "../../styles/highlight.css";

function Hightlight() {
  return (
    <div>
      <div class="grid-container-highlight highlight-margin">
        <div class="photo">
          <img src="/img/sample2.jpg" alt="highlight"></img>
        </div>
        <div className="highlight-text">
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut congue nibh, vel venenatis sem. Proin tempus semper elementum. Maecenas mattis sed diam et ornare. Nunc a lacus non metus laoreet tristique. Maecenas rhoncus massa ut mi efficitur, congue blandit lacus mollis. Donec lacus velit, tincidunt in porta eu, tempor eget ipsum. Nullam tempor risus vitae velit ullamcorper feugiat. Nunc laoreet purus sit amet ante auctor, quis condimentum augue tempus.</p>
        </div>
      </div>
      <div class="grid-container-highlight-two highlight-margin">
        <div class="photo">
          <img src="/img/sample3.jpg" alt="highlight"></img>
        </div>
        <div className="highlight-text">
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut congue nibh, vel venenatis sem.</p>
        </div>
      </div>
      <div class="grid-container-highlight highlight-margin">
        <div class="photo">
          <img src="/img/sample.jpg" alt="highlight"></img>
        </div>
        <div className="highlight-text">
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut congue nibh, vel venenatis sem. Proin tempus semper elementum. Maecenas mattis sed diam et ornare. Nunc a lacus non metus laoreet tristique. Maecenas rhoncus massa ut mi efficitur, congue blandit lacus mollis. </p>
        </div>
      </div>
    </div>
  );
}

export default Hightlight;
