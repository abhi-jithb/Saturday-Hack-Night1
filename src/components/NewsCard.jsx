import React from "react";
import { motion } from "framer-motion";

const NewsCard = ({ title, description, url, image }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description.slice(0, 100)}...</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Read more
        </a>
      </div>
    </motion.div>
  );
};

export default NewsCard;
