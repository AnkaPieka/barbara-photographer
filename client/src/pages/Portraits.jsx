import React, { useState } from "react";
import PhotoGrid from "../components/PhotoGrid";
import Modal from '../components/Modal';

import "../styles/global.css";

const Portraits = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [imgDesc, setImgDesc] = useState(null);

  // const onClick = () => {
  //   alert("You can't do that");
  // };

  return (
    <div className="body-page">
      <PhotoGrid setSelectedImg={setSelectedImg} setImgDesc={setImgDesc} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} imgDesc={imgDesc} setImgDesc={setImgDesc} />}
    </div>
  );
};

export default Portraits;
