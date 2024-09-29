import React from "react";
import { FiCheck, FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const HomePost = () => {
  return (
    <section
      style={{
        backgroundImage:
          "radial-gradient(100% 100% at 50% 0%, rgba(13,13,17,1), rgba(9,9,11,1))",
      }}
      className="relative overflow-hidden bg-zinc-950 text-zinc-200 selection:bg-zinc-600"
    >
      <div className="relative z-10 max-w-5xl px-4 py-20 mx-auto md:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl font-semibold leading-tight text-center sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Community Posts
          </h2>
          <p className="text-base text-center text-zinc-400 md:text-lg">
            Explore your community and all posts it is the new aiu cloud
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PriceCard
            tier="Featrue Name"
            price=" Community"
            bestFor="how it works "
            CTA={
              <GhostButton className="w-full">Get started With Aiu</GhostButton>
            }
            benefits={[
              { text: "One ", checked: true },
              { text: "One", checked: true },
              { text: "One", checked: true },
              { text: "One", checked: true },
              { text: "One", checked: true },
              { text: "One", checked: false },
            ]}
          />
          <PriceCard
            tier="2"
            price="2"
            bestFor="2"
            CTA={
              <GhostButton className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200 hover:text-zinc-900">
                2
              </GhostButton>
            }
            benefits={[
              { text: "Two ", checked: false },
              { text: "Two", checked: false },
              { text: "Two", checked: false },
              { text: "Two", checked: false },
              { text: "Two", checked: true },
              { text: "Two", checked: false },
            ]}
          />
          <PriceCard
            tier="3"
            price="3"
            bestFor="3"
            CTA={<GhostButton className="w-full">3</GhostButton>}
            benefits={[
              { text: "Three ", checked: true },
              { text: "Three", checked: true },
              { text: "Three", checked: true },
              { text: "Three", checked: false },
              { text: "Three", checked: true },
              { text: "Three", checked: false },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const PriceCard = ({ tier, price, bestFor, CTA, benefits }) => {
  return (
    <Card>
      <div className="flex flex-col items-center pb-6 border-b border-zinc-700">
        <span className="inline-block mb-6 text-zinc-50">{tier}</span>
        <span className="inline-block mb-3 text-4xl font-medium ">{price}</span>
        <span className="text-center text-transparent bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text">
          {bestFor}
        </span>
      </div>

      <div className="space-y-4 py-9">
        {benefits.map((b, i) => (
          <Benefit {...b} key={i} />
        ))}
      </div>

      {CTA}
    </Card>
  );
};

const Benefit = ({ text, checked }) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid text-sm bg-blue-600 rounded-full size-5 place-content-center text-zinc-50">
          <FiCheck />
        </span>
      ) : (
        <span className="grid text-sm rounded-full size-5 place-content-center bg-zinc-800 text-zinc-400">
          <FiX />
        </span>
      )}
      <span className="text-sm text-zinc-300">{text}</span>
    </div>
  );
};

const Card = ({ className, children, style = {} }) => {
  return (
    <motion.div
      initial={{
        filter: "blur(2px)",
      }}
      whileInView={{
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.25,
      }}
      style={style}
      className={twMerge(
        "relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const GhostButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        "rounded-md px-4 py-2 text-lg text-zinc-100 transition-all hover:scale-[1.02] hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.98]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
