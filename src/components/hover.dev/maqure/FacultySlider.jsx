import { motion } from "framer-motion";

export const FacultySlider = () => {
  return (
    <section className="relative py-6 mx-auto overflow-hidden border-b max-w-7xl border-zinc-700">
      <span className="block mx-auto text-lg text-center text-transparent mb-9 w-fit bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text">
        Trusted by companies of all sizes
      </span>
      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
      </div>

      <div className="absolute top-0 bottom-0 left-0 w-1/3 max-w-64 bg-gradient-to-r from-zinc-950 to-zinc-950/0" />
      <div className="absolute top-0 bottom-0 right-0 w-1/3 max-w-64 bg-gradient-to-l from-zinc-950 to-zinc-950/0" />
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-12 px-6"
    >
      {children}
    </motion.div>
  );
};

const LogoItems = () => (
  <>
    <div>Information and Communication Technology Engineering</div>
    <div>Business Administration</div>
    <div>Parmacy</div>
    <div>Dentistry</div>
    <div> Architecture Engineering</div>
    <div>Civil Engineering</div>
    <div>Arts</div>
    <div>Drama</div>
  </>
);
