import { LongCard } from "../card/LongCard";
import { MiniCard1 } from "../card/MiniCard1";
import { MiniCard2 } from "../card/MiniCard2";
import { Tower } from "../tower/Tower";

export const Grid = () => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
    <Tower />
    <div className="grid grid-cols-2 col-span-1 gap-4 lg:col-span-8 lg:grid-cols-2">
      <MiniCard1 />
      <MiniCard2 />
      <LongCard />
    </div>
  </div>
);
