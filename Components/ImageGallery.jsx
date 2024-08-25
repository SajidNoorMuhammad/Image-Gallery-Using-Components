import React from "react";

const ImageGallery = ({ images }) => {
    return (
        <div className="image-container" >
            {images.map((images, index) => (
                <div key={index} >
                    <img  src={images.url} /> 
                </div>
            ))}
        </div>
    )
}

export default ImageGallery;