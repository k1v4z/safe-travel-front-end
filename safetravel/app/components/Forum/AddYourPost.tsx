import React, { useState } from 'react';

function AddYourPost() {
  const [images, setImages] = useState([]); // State to hold selected images

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to Array
    const newImages = files.map(file => URL.createObjectURL(file)); // Generate object URLs for each image
    setImages((prevImages) => [...prevImages, ...newImages]); // Add new images to the state
  };

  // Remove image from the list
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index)); // Remove the image by index
  };

  return (
    <div className="border border-gray-300 rounded-lg p-2 mb-3">
      {/* Container for input and icons */}
      <div className="flex items-center space-x-2">
        {/* Text input area */}
        <input
          type="text"
          placeholder="Add to your post"
          className="flex-grow border-none outline-none h-8"
        />

        {/* Icons for actions */}
        <div className="flex items-center space-x-2">
          <img
            src="pictures/TripLocation_icon.png"
            alt="Location"
            className="w-6 h-7 cursor-pointer"
          />
          <img
            src="pictures/Webcam-Video.png"
            alt="Video"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="pictures/picture.png"
            alt="Picture"
            className="w-6 h-6 cursor-pointer mt-1"
            onClick={() => document.getElementById('image-upload').click()} // Trigger file input on icon click
          />
          <img
            src="pictures/Smiley-Happy.png"
            alt="Emoji"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>

      {/* Display selected images */}
      {images.length > 0 && (
        <div className="mt-3 flex space-x-2 overflow-x-auto">
          {images.map((image, index) => (
            <div key={index} className="relative w-20 h-20">
              <img
                src={image}
                alt={`Uploaded ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                onClick={() => handleRemoveImage(index)} // Remove image
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
              >
                ✖
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Hidden file input for image upload */}
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        style={{ display: 'none' }} // Hide the file input element
      />
    </div>
  );
}

export default AddYourPost;
