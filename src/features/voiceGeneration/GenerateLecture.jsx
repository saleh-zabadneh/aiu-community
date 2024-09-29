import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { Input } from "@/components/ui/input";
import PingLoader from "@/components/hover.dev/loaders/PingLoader";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileAudio } from "lucide-react";
import AnimatedBoxRotate from "@/components/hover.dev/animatedBox/AnimatedBoxRotate";
// PingLoader
{
  /* <section className="relative overflow-hidden bg-zinc-950">
        <Content />
        <Beams />
        <GradientGrid />
      </section> */
}

const GlowingChip = ({ children }) => {
  return (
    <span className="relative z-10 mb-4 inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-3 py-1.5 text-xs text-zinc-50 md:mb-0">
      {children}
      <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0" />
    </span>
  );
};

const SplashButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        "rounded-md bg-gradient-to-br from-blue-400 to-blue-700 px-4 py-2 text-zinc-50 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

const GhostButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        "rounded-md px-4 py-2 text-zinc-100 transition-all hover:scale-[1.02] hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.98]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const Beams = () => {
  const { width } = useWindowSize();

  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = [
    {
      top: GRID_BOX_SIZE * 0,
      left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 5,
        delay: 2,
      },
    },
    {
      top: GRID_BOX_SIZE * 12,
      left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 10,
        delay: 4,
      },
    },
    {
      top: GRID_BOX_SIZE * 3,
      left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
    },
    {
      top: GRID_BOX_SIZE * 9,
      left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
      transition: {
        duration: 2,
        repeatDelay: 7.5,
        delay: 3.5,
      },
    },
    {
      top: 0,
      left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
      transition: {
        duration: 3,
        repeatDelay: 2,
        delay: 1,
      },
    },
    {
      top: GRID_BOX_SIZE * 2,
      left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
      transition: {
        duration: 5,
        repeatDelay: 5,
        delay: 5,
      },
    },
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export const Beam = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        y: 32 * 8,
      }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1.5,
        ...transition,
      }}
      style={{
        top,
        left,
      }}
      className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
    />
  );
};

export const GradientGrid = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
      }}
      className="absolute inset-0 z-0"
    >
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 58 138 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </motion.div>
  );
};

export const GRID_BOX_SIZE = 32;
export const BEAM_WIDTH_OFFSET = 1;

const GenerateLecture = () => {
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [text, setText] = useState("");
  const [generatingAudio, setGeneratingAudio] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [voice, setVoice] = useState("default");

  const handleFileUpload = (event) => {
    setLoading(true);
    // Dummy loading logic
    setTimeout(() => {
      setLoading(false);
      setUploaded(true);
      setText(
        `Good morning, everyone! Today, we're going to explore the fascinating world of fuzzy sets. Now, I know some of you might be thinking, "What's so fuzzy about it?" But trust me, by the end of this lecture, you'll understand why fuzzy sets are a game-changer in many areas of mathematics and engineering.

        Let's start with the basics. A fuzzy set is represented by the notation AÎ±, where Î¼A(x) â‰¥ Î± for all x âˆˆ X. Think of it like a membership function that tells you how much an element x belongs to the set A. The value Î± represents the minimum degree of membership required for x to be considered part of A.
        
        Now, let's consider an example. Suppose we have a set X = {1, 2, 3} and a fuzzy set A = 0.3/1 + 0.5/2 + 1/3. What does this mean? Well, the number before each element in X represents the degree of membership for that element in A. So, if Î¼A(1) = 0.3, it means that 1 is only partially a member of A – not entirely, but to some extent.
        
        Now, let's talk about operations on fuzzy sets. We have two main ones: "aA" and "Aa". The first one, "aA", is defined as {Î¼A(x) \* a, âˆ€x âˆˆ X}, where a is a scalar. Think of it like scaling the membership values by a factor of a.
        
        For example, let's say we have A = {0.5/a, 0.3/b, 0.2/c, 1/d} and a = 0.5. Then aA would be {0.25/a, 0.15/b, 0.1/c, 0.5/d}. See how the membership values are scaled down by half?
        
        The second operation, "Aa", is similar, but with a twist. Instead of scaling the membership values, it's like moving the entire fuzzy set A to the right by a factor of a.
        
        Let's try another example. Suppose we have A = {0.5/a, 0.3/b, 0.2/c, 1/d} and a = 2. Then Aa would be {0.25/a, 0.09/b, 0.04/c, 1/d}. See how the membership values are stretched out to the right?
        
        Now that we have a good understanding of fuzzy sets and their operations, let's talk about fuzzy rules. Classical rules can be expressed in a binary language of Boolean logic – true or false, yes or no. But fuzzy rules are different. They use linguistic variables like "speed" with ranges and words like "fast" and "slow", rather than just true or false.
        
        For example, we might have two fuzzy rules:
        
        * Rule 1: If speed is fast, then stopping_distance is long.
        * Rule 2: If speed is slow, then stopping_distance is short.
        
        These rules are more nuanced than classical rules because they take into account the uncertainty and ambiguity of real-world situations. And that's what makes them so powerful!
        
        Now, let's move on to some examples from everyday life. Imagine you're controlling an air-conditioner with five control switches: COLD, COOL, PLEASANT, WARM, and HOT. Each switch corresponds to a specific speed of the motor controlling the fan – MINIMAL, SLOW, MEDIUM, FAST, and BLAST.
        
        The rules governing the air-conditioner's behavior are straightforward:
        
        * If the temperature is COLD, then the speed should be MINIMAL.
        * And so on...
        
        These rules are fuzzy because they use linguistic variables like "temperature" and "speed", rather than just true or false. They're also more realistic because they take into account the uncertainty of real-world situations.
        
        Now, let's talk about the output of an antecedent evaluation. In fuzzy logic, this output is a truth value represented by a number between 0 and 1. This truth value is then applied to the consequent membership function.
        
        To evaluate the disjunction (OR) of rule antecedents, we use the "union" fuzzy operation. Think of it like combining the membership values of multiple rules using a logical OR operator.
        
        Finally, let's talk about defuzzification methods. One popular method is the centroid defuzzification method. It finds the centre of gravity (centroid) of an aggregated fuzzy set A on the interval [a, b]. This can be used to estimate the centroid of a fuzzy set.
        
        In conclusion, fuzzy sets and their operations are powerful tools for modeling uncertainty in real-world situations. They offer a more nuanced approach to decision-making than classical rules, and they're used in many areas of mathematics and engineering. So, I hope you've enjoyed this journey into the world of fuzzy sets – it's been a wild ride!`
      );
    }, 2000);
  };

  const handleGenerateAudio = () => {
    setGeneratingAudio(true);
    // Dummy audio generation logic
    setTimeout(() => {
      setGeneratingAudio(false);
      setAudioUrl("/static/FZIAudio.wav"); // Sample audio URL
    }, 2000);
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950">
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
        >
          <GlowingChip>Pdf To Audio</GlowingChip>
        </motion.div>
        {!uploaded ? (
          <>
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
              Upload PDF&gt;Let AI Works ✨
            </motion.h1>
            <Input
              type="file"
              onChange={handleFileUpload}
              className="block w-full max-w-md mt-16 mb-2 text-sm font-medium text-card-foreground "
            />
          </>
        ) : (
          <>
            {loading ? (
              <>
                <PingLoader />
              </>
            ) : (
              <>
                <div className="w-full mt-12 mb-4 max-w-7xl">
                  <Label className="block py-2 text-4xl font-medium text-gray-200">
                    Generated Lecture
                  </Label>
                  <Textarea
                    className="overflow-y-auto text-lg"
                    rows="10"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></Textarea>
                </div>
              </>
            )}
            <div className="w-full max-w-4xl">
              <Label className="block py-4 text-3xl font-medium text-gray-100">
                Select Voice
              </Label>
              <Select
                disabled={generatingAudio}
                onValueChange={(value) => setVoice(value)}
                className="w-full"
              >
                <SelectTrigger className="w-full px-3 py-2 transition-shadow border rounded-md border-zinc-700 bg-zinc-900 placeholder-zinc-500 ring-1 ring-transparent focus:outline-0 focus:ring-blue-700">
                  <SelectValue placeholder="Select Voice" />
                </SelectTrigger>
                <SelectContent className="text-white bg-zinc-900">
                  <SelectItem value="default">Default Voice</SelectItem>
                  <SelectItem value="voice1">Maria Alhosni</SelectItem>
                  <SelectItem value="voice2">Saleh Zabadneh</SelectItem>
                  <SelectItem value="voice2">Anas Hallak</SelectItem>
                  <SelectItem value="voice2">Jonas Schmedtmann </SelectItem>
                  <SelectItem value="voice2">Abdalrahman Marzuokah</SelectItem>
                  <SelectItem value="voice2">
                    Maximilian Schwarzmüller
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <SplashButton
              onClick={handleGenerateAudio}
              className="flex items-center gap-2 mt-12"
            >
              Generate Audio
              <FileAudio />
            </SplashButton>
            {generatingAudio && (
              <div className="mt-32">
                <PingLoader />
              </div>
            )}
            {audioUrl && !generatingAudio && (
              <div className="my-12">
                <audio controls>
                  <source src={audioUrl} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
                <div className="w-full max-w-5xl mt-2">
                  <a
                    href={audioUrl}
                    download="generated-audio.mp3"
                    // className="px-4 py-2 text-white bg-green-500 rounded-md shadow-sm hover:bg-green-700"
                  >
                    <AnimatedBoxRotate
                      text=""
                      one="Download"
                      two="Download"
                      three="Download"
                      four="Download"
                    />
                  </a>
                </div>
              </div>
            )}
          </>
        )}

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
            delay: 0.75,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-6 sm:flex-row"
        >
          {/* <Link to="/login">
            <SplashButton className="flex items-center gap-2">
              Try it now
              <FiArrowRight />
            </SplashButton>
          </Link> */}
          {/* <GhostButton className="px-4 py-2 rounded-md text-zinc-100">
            Learn more
          </GhostButton> */}
        </motion.div>
      </div>
      <Beams />
      <GradientGrid />
    </section>
  );
};

export default GenerateLecture;
