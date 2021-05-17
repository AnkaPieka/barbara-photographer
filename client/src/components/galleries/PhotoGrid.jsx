import React from "react";

import "../../styles/gallery.css";

const PhotoGrid = ({ setSelectedImg, setImgDesc, docs }) => {

  console.log('photogrid docs :', docs);

  return (
    <div className="gallery-container img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => {
              console.log('yo', doc)
              setSelectedImg(doc.url);
              setImgDesc(doc.desc);
            }}
          >
            <img
              src={doc.url}
              alt="pic"
            />
          </div>
        ))}
    </div>
  );
};

export default PhotoGrid;
