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
        <h1 className="text-2xl font-bold">OrbitHub</h1>
        <div className="space-x-4">
          <a href="#home" className="hover:no-underline">Home</a>
          <a href="#about" className="hover:no-underline">About</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
