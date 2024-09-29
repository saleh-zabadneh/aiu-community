// // Room.js
// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// import Message from "./Message";
// import FileUpload from "./FileUpload";
// import { useQueryClient } from "@tanstack/react-query";

// const socket = io("http://localhost:5000"); // Replace with your server URL

// const Room = () => {
//   const queryClient = useQueryClient();
//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState("");

//   useEffect(() => {
//     // Socket event listeners
//     socket.on("message", (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     socket.emit("chat message", messageInput);
//     setMessageInput("");
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-1 p-4 overflow-y-auto">
//         {messages.map((msg, index) => (
//           <Message key={index} message={msg} />
//         ))}
//       </div>
//       <div className="p-4 border-t">
//         <input
//           type="text"
//           value={messageInput}
//           onChange={(e) => setMessageInput(e.target.value)}
//           placeholder="Type your message..."
//           className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//         />
//         <button
//           onClick={sendMessage}
//           className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//         >
//           Send
//         </button>
//         <FileUpload />
//       </div>
//     </div>
//   );
// };

// export default Room;
