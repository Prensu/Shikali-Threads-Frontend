import React, { useState } from "react";
import { motion } from "framer-motion";
import Draggable from "react-draggable";
import { FaCommentDots } from "react-icons/fa"; // Professional chat icon

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Draggable>
      <div className="relative">
        {/* Draggable Chatbot Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-teal-400 to-teal-600 text-white p-2 rounded-full shadow-lg hover:shadow-2xl focus:outline-none transform transition-all duration-300 hover:scale-110 absolute bottom-0"
        >
          <FaCommentDots size={20} /> {/* New professional chat icon */}
        </button>

        {/* Chat Window */}
        {isOpen && (
          <motion.div
            className="absolute bottom-16 left-0 w-80 h-96 bg-white p-4 rounded-lg shadow-lg border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
          >
            <iframe
              width="100%"
              height="100%"
              allow="microphone;"
              src="https://console.dialogflow.com/api-client/demo/embedded/e632fdf7-0ea5-4daf-964d-91855ca562fd"
              title="Chatbot"
              className="rounded-lg"
            ></iframe>
          </motion.div>
        )}
      </div>
    </Draggable>
  );
};

export default Chatbot;
