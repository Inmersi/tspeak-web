import React, { useState } from 'react';
import videoPlay from "../assets/images/video-play.png"; // Your video thumbnail image

const Information = () => {
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const videoUrl = "https://www.youtube.com/embed/SYT8wjrGw4U"; // Correct YouTube embed URL

  const handleClick = () => {
    setShowModal(true); // Show the video modal
  };

  const handleClose = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full md:w-9/12 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Thumbnail */}
        <div className="flex justify-center w-full md:w-1/2">
          <div className="relative">
            {!showModal ? (
              <img
                src={videoPlay}
                alt="Video Thumbnail"
                className="rounded-lg cursor-pointer"
                onClick={handleClick}
              />
            ) : null}
          </div>
        </div>

        {/* Video Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute text-white bg-black p-3 rounded-full shadow-lg hover:bg-opacity-75"
                style={{
                    width: '40px',  // Adjust the size of the button
                    height: '40px',
                    fontSize: '18px',  // Adjust the size of the 'X'
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    right: '-15px',
                    top: '-15px',
                    border: '4px solid white',  // Add the thick white border here
                }}
                >
                X
                </button>

              
              {/* Video Iframe */}
              <iframe
                width="640"
                height="360"
                src={videoUrl}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Con nuestra funcionalidad exclusiva ofrecemos terapias y aprendizajes a otro nivel
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-justify">
            Ofrecemos una experiencia única al permitir la reproducción del contenido terapéutico a pantalla completa dentro de la app o durante el uso de otras aplicaciones, optimizando el tiempo de uso del celular.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
