import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";
import { getApi } from "@/services/apis/apiGet"; // Assuming your API service functions are correctly imported
import useChatSocket from "@/hooks/useChatSocket";

function ChatComponent({ roomId }) {
  const { user } = useAuth();

  // State to handle message input
  const [messageInput, setMessageInput] = useState("");
  // State to handle file input
  const [fileInput, setFileInput] = useState(null);

  // Fetch messages using React Query
  const {
    isLoading,
    error,
    data: messages,
    refetch,
  } = useQuery([`message ${roomId}`, { roomId }], () =>
    getApi(user ? user.token : "no token", ``)
  );

  // Initialize chat socket for real-time communication
  const { sendMessage, sendFile } = useChatSocket(
    roomId,
    user.id,
    (message) => {
      console.log(message);
      // Handle new message received
      refetch(); // Refresh messages on new message
    },
    (fileData) => {
      console.log(fileData);
      // Handle file received
    }
  );

  // Function to handle sending messages
  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      sendMessage({ type: "text", content: messageInput });
      setMessageInput(""); // Clear input after sending
    }
  };

  // Function to handle sending files
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    sendFile(file);
    setFileInput(null); // Clear input after sending
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Render messages */}
      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <p>Loading messages...</p>
        ) : error ? (
          <p>Error loading messages: {error.message}</p>
        ) : (
          <ul>
            {messages.map((message, index) => (
              <li key={index} className="mb-2">
                {message.type === "text" ? (
                  <p className="p-2 bg-gray-200 rounded-lg">
                    {message.content}
                  </p>
                ) : message.type === "file" ? (
                  <div className="flex items-center space-x-2">
                    <p className="p-2 bg-gray-200 rounded-lg">
                      File: {message.fileName}
                    </p>
                    <a
                      href={message.file}
                      download
                      className="text-blue-500 underline"
                    >
                      Download
                    </a>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Input area for message and file */}
      <div className="flex items-center p-2 space-x-2">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
        <input
          type="file"
          onChange={handleFileUpload}
          className="hidden"
          ref={(fileInput) => setFileInput(fileInput)}
        />
        <button
          onClick={() => fileInput && fileInput.click()}
          className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none"
        >
          Send File
        </button>
      </div>
    </div>
  );
}

export default ChatComponent;
