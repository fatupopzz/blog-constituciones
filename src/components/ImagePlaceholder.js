import React from "react";

function ImagePlaceholder({ caption }) {
  return (
    <div className="image-placeholder">
      <div className="image-icon">
        <span>+</span>
      </div>
      <p>{caption}</p>
    </div>
  );
}

export default ImagePlaceholder;
