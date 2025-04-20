import React from "react";

function BlogImage({ src, alt, caption }) {
  return (
    <div className="blog-image-container">
      <img src={src} alt={alt} className="blog-image" />
      {caption && <p className="blog-image-caption">{caption}</p>}
    </div>
  );
}

export default BlogImage;
