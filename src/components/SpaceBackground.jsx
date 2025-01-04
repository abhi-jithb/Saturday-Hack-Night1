import React from "react";
import { motion } from "framer-motion";

const SpaceBackground = () => {
  const starVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-dark">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={starVariants}
          initial="initial"
          animate="animate"
        />
      ))}
    </div>
  );
};

export default SpaceBackground;
