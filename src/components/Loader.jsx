import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-dark relative">
      <video
        className="w-64 h-64 object-cover rounded-lg shadow-lg opacity-80 transition-opacity duration-500 ease-in-out"
        src="/loadingvideo.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default Loader;
