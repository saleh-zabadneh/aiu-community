import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Layout from "@/components/layout/Layout";

export default function ChatbotLayout() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "مرحبا كيف يمكنني مساعدتك؟",
      isBot: true,
      avatar: "/placeholder-user.jpg",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const predefinedReplies = [
    "يمنح الطلاب في الجامعات الخاصة فصلا اضافيا وقصلا صيفيا  اذا كان المعدل التراكمي بين ال 1 و1.75 وفي حال الطالب لك يتمكن من رفع معدله يفصل من الجامعة اما اذا كان المعدل اكثر من1.75 واقل من 2 يمنح الطالب فصلين وفصلا صيفيا لينمكن من رفع معدله",
    "في حال تم ضبط حالة غش ضمن الامتحان يتم احالة الطالب الى لجنة انضباط بناء عليها يتم اتخاذ القرار المناسب",
    " في حال تم ضبط حالة غش ضمن الامتحان يتم احالة الطالب الى لجنة انضباظ بناء عليها يتم اتخاذ القرار المناسب  ",
  ];

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessageId = messages.length + 1;
      const newMessage = {
        id: newMessageId,
        text: inputValue,
        isBot: false,
        avatar: "/placeholder-user.jpg",
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        const replyIndex = Math.min(
          newMessageId - 2,
          predefinedReplies.length - 1
        );
        const botResponseText = predefinedReplies[replyIndex];
        const botResponse = {
          id: newMessageId + 1,
          text: botResponseText,
          isBot: true,
          avatar: "/placeholder-user.jpg",
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 2000);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col py-40 text-white">
        <div className="flex-1 p-6 overflow-auto">
          <div className="mb-20 text-center text-7xl">AIU Chatbot</div>
          <div className="flex flex-col gap-4 px-20">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.isBot ? "justify-start" : "justify-end self-end"
                }`}
              >
                <Avatar className="w-10 h-10 border">
                  <AvatarImage
                    src={message.isBot ? "/aiu.svg" : "/images/saleh.jpeg"}
                  />
                  <AvatarFallback>{message.isBot ? "B" : "U"}</AvatarFallback>
                </Avatar>
                <div
                  className={`px-4 py-3 rounded-2xl text-sm font-medium ${
                    message.isBot
                      ? "bg-gradient-to-br from-[#3b3b3b] to-[#4c4c4c] shadow-lg shadow-[#1e1e1e]/50"
                      : "bg-gradient-to-br from-[#5c5c5c] to-[#6c6c6c] shadow-lg shadow-[#2c2c2c]/50"
                  } animate-glow`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start justify-start gap-3">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/aiu.svg" />
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <div
                  className={`px-4 py-3 rounded-2xl text-sm font-medium bg-gradient-to-br from-[#3b3b3b] to-[#4c4c4c] shadow-lg shadow-[#1e1e1e]/50 animate-glow`}
                >
                  جاري التحميل...
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#2c2c2c] to-[#3c3c3c] px-6 py-4 max-w-5xl w-full justify-center mx-auto rounded-full mt-12 flex items-center gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleInputChange}
            className="flex-1 bg-transparent border-none outline-none text-sm font-medium px-4 py-2 rounded-2xl focus:ring-2 focus:ring-[#4b4b4b]"
          />
          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-br from-[#4b4b4b] to-[#5c5c5c] px-4 py-2 rounded-2xl text-sm font-medium shadow-lg shadow-[#1e1e1e]/50 hover:from-[#5c5c5c] hover:to-[#6c6c6c] transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </Layout>
  );
}
