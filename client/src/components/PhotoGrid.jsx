import React from "react";
import useFirestore from "../hooks/useFirestore";
import useStorage from "../hooks/useStorage";

const PhotoGrid = ({ setSelectedImg, setImgDesc }) => {

  const { docs } = useFirestore("barbara");
  // const { url } = useStorage(file);
  console.log(docs);
  console.log(('yo'))

  return (
    <div className="gallery-container">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => {
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
