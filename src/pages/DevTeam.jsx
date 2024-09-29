import {
  Beams,
  GradientGrid,
} from "@/components/hover.dev/hero/ِAnimatedDarkGridHero";
import Layout from "@/components/layout/Layout";
import { OrbitingCirclesDemo } from "@/components/magicui/demo/orbitingCircles/OrbitingCirclesDemo";
import { GridCards } from "@/features/developers/TeamGrid";
import { motion } from "framer-motion";

const DevTeam = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-zinc-950">
        <Content />
        <Beams />
        <GradientGrid />
      </section>
    </Layout>
  );
};

export default DevTeam;
const Content = () => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center max-w-6xl px-4 py-24 mx-auto md:px-8 md:py-36">
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          ease: "easeInOut",
        }}
        className="relative"
      ></motion.div>
      <motion.h1
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.25,
          ease: "easeInOut",
        }}
        className="mb-3 text-3xl font-bold leading-tight text-center text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight"
      >
        Meet Our Creative Dev Team
      </motion.h1>
      <motion.h1
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.25,
          ease: "easeInOut",
        }}
        className="w-full max-w-full mb-3 text-3xl font-bold leading-tight text-center text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight"
      >
        <GridCards />
        <OrbitingCirclesDemo />
      </motion.h1>
    </div>
  );
};
