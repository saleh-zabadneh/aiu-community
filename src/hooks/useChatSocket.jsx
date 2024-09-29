// useChatSocket.js
import { useEffect, useState } from "react";
import io from "socket.io-client";

const SOCKET_SERVER_URL = "http://192.168.1.166:9320/api"; // Replace with your socket server URL

const useChatSocket = (roomId, userId, onMessageReceived) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL, {
      query: { roomId, userId },
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [roomId, userId]);

  useEffect(() => {
    if (!socket) return;

    socket.on("message", onMessageReceived);

    return () => {
      socket.off("message", onMessageReceived);
    };
  }, [socket, onMessageReceived]);

  const sendMessage = (message) => {
    if (socket) {
      socket.emit("message", message);
    }
  };

  return { sendMessage };
};

export default useChatSocket;
