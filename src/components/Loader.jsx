import React, { useEffect, useState } from "react";

const Loader = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    const timeout = setTimeout(() => setFadeIn(true), 100); // Add a slight delay for effect
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark relative">
      <video
        className={`w-64 h-64 object-cover rounded-lg shadow-lg transition-opacity duration-1000 ease-in-out ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
        src="/loadingvideo.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default Loader;
