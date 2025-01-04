import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-dark/70 backdrop-blur-lg py-4 px-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between items-center text-white">
        <motion.img
          src="/logo.jpg"
          alt="OrbitHub Logo"
          className="w-12 h-12"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="space-x-4">
          <a href="#home" className="hover:no-underline">Home</a>
          <a href="#about" className="hover:no-underline">About</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
