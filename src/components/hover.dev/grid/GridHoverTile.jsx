import { motion } from "framer-motion";
import Tile from "@/components/hover.dev/tile/Tile";

const GridHoverTile = () => {
  return (
    <main className="relative w-full bg-neutral-950">
      {/* Grid background */}
      <section className="grid w-full h-screen grid-cols-20 overflow-y-clip">
        {Array.from(Array(20 * 12), (i) => (
          <Tile key={i} />
        ))}
      </section>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 mb-10 pointer-events-none font-poppins">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-black tracking-tight uppercase text-9xl text-neutral-100"
        >
          hello
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="w-1/2 text-xl tracking-wide text-center text-white"
        >
          Join my growing community of creative developers
        </motion.p>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="px-10 py-3 text-3xl bg-indigo-700 border border-indigo-900 rounded-full pointer-events-auto text-neutral-100"
        >
          Subscribe
        </motion.button>
      </div>
    </main>
  );
};

export default GridHoverTile;
