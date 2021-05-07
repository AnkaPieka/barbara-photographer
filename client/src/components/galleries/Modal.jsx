import React from "react";

import "../../styles/modal.css";

const Modal = ({ selectedImg, setSelectedImg, imgDesc, setImgDesc, docs }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const prevButtonClick = () => {
    docs.map((doc) => {
      for (let i = 0; i < docs.length; i++) {
        if (doc.url === selectedImg && docs.indexOf(doc) !== 0) {
          const prevIndex = docs.indexOf(doc) - 1;
          setSelectedImg(docs[prevIndex].url);
          setImgDesc(docs[prevIndex].desc);
        }
      }
    });
  };

  const nextButtonClick = () => {
    docs.map((doc) => {
      console.log('next')
      for (let i = 0; i < docs.length; i++) {
        if (doc.url === selectedImg && docs.indexOf(doc) !== docs.length - 1) {
          const nextIndex = docs.indexOf(doc) + 1;
          setSelectedImg(docs[nextIndex].url);
          setImgDesc(docs[nextIndex].desc);
        }
      }
    });
  };

  return (
    <div>
      <div className="backdrop" onClick={handleClick}>
        <button className="modal-btn prev-btn" onClick={prevButtonClick}>
          Previous
        </button>
        <div className="img-lgd-container">
          <img src={selectedImg} alt="one pic" />
          <div className="pic-lgd">
            {imgDesc ? <p>{imgDesc}</p> : <p>No description</p>}
          </div>
        </div>
        <button className="modal-btn next-btn" onClick={nextButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Modal;
