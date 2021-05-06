import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import PhotoGrid from "../components/PhotoGrid";
import Modal from '../components/Modal';

import "../styles/global.css";

const Portraits = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [imgDesc, setImgDesc] = useState(null);
  const { docs } = useFirestore("portraits");


  return (
    <div className="body-page">
      <PhotoGrid setSelectedImg={setSelectedImg} setImgDesc={setImgDesc} docs={docs} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} imgDesc={imgDesc} setImgDesc={setImgDesc} docs={docs} />}
    </div>
  );
};

export default Portraits;
