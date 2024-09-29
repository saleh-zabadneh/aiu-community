import Layout from "@/components/layout/Layout";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const CharRoomTemplate = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen bg-[#1a1a1a] text-white">
        <header className="bg-[#2c2c2c] px-4 py-3 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8 border-2 border-[#6b49c8]">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>GC</AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-semibold">Group Chat</h2>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#6b49c8] hover:bg-[#3e3e3e]"
            >
              <SearchIcon className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#6b49c8] hover:bg-[#3e3e3e]"
            >
              <MenuIcon className="w-5 h-5" />
            </Button>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-4 bg-gradient-to-b from-[#1a1a1a] to-[#2c2c2c]">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Avatar className="w-10 h-10 border-2 border-[#6b49c8]">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="bg-[#2c2c2c] rounded-lg p-3 max-w-[70%] shadow-lg">
                <div className="font-semibold">John Doe</div>
                <p className="text-sm">Hey everyone, how is it going?</p>
              </div>
            </div>
            <div className="flex items-start justify-end gap-4">
              <div className="bg-[#6b49c8] rounded-lg p-3 max-w-[70%] shadow-lg">
                <div className="font-semibold">Jane Smith</div>
                <p className="text-sm">Great, thanks for asking!</p>
              </div>
              <Avatar className="w-10 h-10 border-2 border-[#6b49c8]">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="w-10 h-10 border-2 border-[#6b49c8]">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <div className="bg-[#2c2c2c] rounded-lg p-3 max-w-[70%] shadow-lg">
                <div className="font-semibold">Alex Lee</div>
                <p className="text-sm">Doing well, how about you?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#2c2c2c] px-4 py-3 flex items-center gap-3 shadow-t-lg">
          <Input
            placeholder="Type your message..."
            className="flex-1 bg-[#3e3e3e] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b49c8]"
          />
          <Button
            variant="ghost"
            size="icon"
            className="text-[#6b49c8] hover:bg-[#3e3e3e] rounded-full"
          >
            <SendIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CharRoomTemplate;

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
