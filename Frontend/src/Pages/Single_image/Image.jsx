import React from 'react';
import { useParams } from 'react-router-dom';
import './Image.css'

const Image = () => {
  const { imageId } = useParams();

  const imageUrl = decodeURIComponent(imageId); 

  return (
    <div className="image-display">
      <img src={imageUrl}  className="large-image" />
    </div>
  );
}

export default Image;
