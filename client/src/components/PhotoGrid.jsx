import React from "react";

const PhotoGrid = ({ setSelectedImg, setImgDesc, docs }) => {

  console.log('photogrid docs :', docs);

  return (
    <div className="gallery-container">
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
