import { SiTwitter } from "react-icons/si";
import { CalloutChip } from "../utils/CalloutChip";
import { Card } from "../utils/Card";
import { CornerBlur } from "../utils/CornerBlur";

export const MiniCard2 = () => {
  return (
    <div className="col-span-2 h-[415px] sm:h-[375px] md:col-span-1">
      <Card>
        <CalloutChip>Callout #3</CalloutChip>
        <p className="mb-1.5 text-2xl">Interact With Others</p>
        <p className="text-zinc-400">
          On any post you see on the feed you can like, comment or even save the
          post for later for you to see.
        </p>

        <div className="absolute z-10 p-4 border -bottom-2 left-2 right-2 h-44 rounded-xl border-zinc-700 bg-zinc-800/50">
          <div className="flex gap-3 mb-3">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Don"
              alt="Placeholder image for faux user Don Donaldson"
              className="rounded-full size-10 shrink-0"
            />
            <div>
              <p className="text-sm font-semibold text-zinc-50">
                Saleh Zabadneh
              </p>
              <p className="text-xs text-zinc-400">@donnydiesel</p>
            </div>
          </div>
          <p>
            <span className="font-semibold text-blue-300">@salehZabadneh</span>
            &apos; This is best platform ever created ! Now i don&apos;t miss
            anything happening on campus ❤️
          </p>

          <SiTwitter className="absolute right-4 top-4 text-[#1F9AF1]" />
        </div>

        <CornerBlur />
      </Card>
    </div>
  );
};
