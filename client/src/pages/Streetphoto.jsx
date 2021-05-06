import React, { useState } from "react";
import PhotoGrid from "../components/PhotoGrid";
import useFirestore from "../hooks/useFirestore";
import Modal from '../components/Modal';


import "../styles/global.css";
import "../styles/gallery.css";

const Streetphoto = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [imgDesc, setImgDesc] = useState(null);
  const { docs } = useFirestore("rue");


    return (
      <div className="body-page">
      <PhotoGrid setSelectedImg={setSelectedImg} setImgDesc={setImgDesc} docs={docs} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} imgDesc={imgDesc} setImgDesc={setImgDesc} />}
    </div>
    );
}

export default Streetphoto;
