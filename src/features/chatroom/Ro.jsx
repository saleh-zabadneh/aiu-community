import React, { useState, useEffect } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useGetRoom } from "@/cache/chat/useGetRoom";
import { useSendMessages } from "@/cache/chat/useSendMessages";
import { Input } from "@/components/ui/input";

window.Pusher = Pusher;

const ChatRoom = ({ roomId = 3 }) => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const { data, isLoading, error } = useGetRoom(
    `room ${roomId}`,
    `/room/get/${roomId}`
  );
  const { isCreating, createFunction } = useSendMessages(
    `message `,
    `message/send/${roomId}`
  );

  useEffect(() => {
    if (data) {
      setMessages(data.messages);
    }

    const echo = new Echo({
      broadcaster: "pusher", // The broadcaster is still "pusher" as per Laravel Echo setup
      key: "a954cfe8e6d8d9b83805",
      cluster: "eu",
      wsHost: "192.168.43.81", // Ensure this is the correct host for your Reverb server
      wsPort: 9320, // Ensure this is the correct port for your Reverb server
      forceTLS: false,
      disableStats: true,
    });

    echo.private(`room.${roomId}`).listen("MessageSent", (e) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          user_name: e.username,
          message: e.messageContent,
        },
      ]);
    });

    return () => {
      echo.disconnect();
    };
  }, [data, roomId]);

  const sendMessageFunction = (data) => {
    createFunction(data, {
      onSuccess: (resData) => {
        setMessageInput("");
      },
      onError: (errData) => {
        console.error(errData);
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Empty</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="chat-room">
      <div className="room-list">
        <h2>Room Name: {data?.room?.name}</h2>
      </div>
      <div className="messages">
        <div className="message-list">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <strong>{message.user_name}:</strong> {message.message}
            </div>
          ))}
        </div>
        <div className="message-input">
          <Input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            disabled={isCreating}
            onClick={() => sendMessageFunction(messageInput)}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
