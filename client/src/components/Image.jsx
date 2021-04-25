import React from "react";

function Image({ source }) {
  return (
    <div>
      <img src={source} alt="not found" />
      {/* <p style={{color: 'white'}}>Yo</p> */}
    </div>
  );
}

export default Image;
