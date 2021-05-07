import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import PhotoGrid from "../components/galleries/PhotoGrid";
import Modal from "../components/galleries/Modal";
import Highlight from "../components/galleries/Highlight";

import "../styles/global.css";
import "../styles/gallery.css";

const Portraits = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [imgDesc, setImgDesc] = useState(null);
  const { docs } = useFirestore("portraits");

  return (
    <div className="body-page-galleries">
      <Highlight />
      <PhotoGrid
        setSelectedImg={setSelectedImg}
        setImgDesc={setImgDesc}
        docs={docs}
      />
      {selectedImg && (
        <Modal
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          imgDesc={imgDesc}
          setImgDesc={setImgDesc}
          docs={docs}
        />
      )}
    </div>
  );
};

export default Portraits;
