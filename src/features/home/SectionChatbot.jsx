import useLazyLoad from "@/hooks/useLazyLoad";
import HomeChatbot from "../chatbot/HomeChatbot";
import { PulseBeams } from "@/components/aceternity/PulseBeam";
import Tile from "@/components/hover.dev/tile/Tile";
import ShimmerButton from "@/components/magicui/ShimmerButton";
import { FaRobot } from "react-icons/fa";

const SectionChatbot = () => {
  // const PulseBeams = useLazyLoad(
  //   () => import("@/components/aceternity/PulseBeam"),
  //   "PulseBeams"
  // );
  // const Tile = useLazyLoad(() => import("@/components/hover.dev/tile/Tile"));
  return (
    <>
      <div className="flex flex-col md:px-12 md:flex-row">
        <div className="w-full md:full">
          <div className="relative w-full bg-neutral-950">
            <section className="grid w-full h-screen grid-cols-20 overflow-y-clip">
              {Array.from(Array(20 * 12), (i) => (
                <Tile key={i} color="#334155" />
              ))}
            </section>
            <div className="flex items-center ">
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 mb-10 pointer-events-none font-poppins">
                <PulseBeams text={"AIU Chatbot ! Comming Soon"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionChatbot;
