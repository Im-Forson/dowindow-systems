import { Link } from "react-router";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-center px-4 overflow-hidden">
      
      {/* Animated 404 number */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[120px] md:text-[180px] font-extrabold text-[#2D3047] drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-[18px] md:text-[22px] text-gray-700 font-medium mb-6"
      >
        Oops! The page you're looking for doesn’t exist.
      </motion.p>

      {/* Back button with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-[#2D3047] text-white font-semibold rounded-md hover:bg-[#403E5B] shadow-lg transition-all duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Decorative moving background */}
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#2D3047] via-[brown] to-[#2D3047] opacity-60"
      ></motion.div>
    </div>
  );
}
