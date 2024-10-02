import React, { useState } from "react";
import AppLayout from "../components/layout/AppLayout.jsx";
import FileMenu from "../components/dialogs/FileMenu.jsx";
import { sampleMessages } from "../utils/sampleData.js";
import MessageComponent from "../components/shared/MessageComponent.jsx";

const user = {
  _id: "001",
  name: "Ivansh Jatale",
};
const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(sampleMessages);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="h-[100%] bg-gray-300 overflow-x-hidden overflow-y-auto">
        {messages.map((message) => (
          <MessageComponent message={message} user={user} />
        ))}
      </div>
      <div className="flex items-center p-3 bg-gray-100 rounded-lg shadow-md">
        <FileMenu isOpen={isOpen} />
        {/* Attachment Icon */}
        <button
          onClick={toggleMenu}
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.172 7l-3.586 3.586a2 2 0 002.828 2.828L17.414 10m0 0L7 20.414M17.414 10L17 10M17.414 10a2 2 0 00-2.828-2.828L7 17.586M17.414 10L17.414 10"
            />
          </svg>
        </button>

        {/* Input Box */}
        <input
          type="text"
          className="flex-grow mx-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type a message..."
        />

        {/* Send Button */}
        <button className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default AppLayout()(Chat);
