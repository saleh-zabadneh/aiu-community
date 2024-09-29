import { CodeCard } from "@/components/hover.dev/code/CodeCard";
import { Stepper } from "@/components/hover.dev/code/Stepper";
import { MaxWidthWrapper } from "@/components/hover.dev/utils/MaxWidthWrapper";
import { Minigrid } from "@/components/hover.dev/utils/Minigrid";
import { SectionHeading } from "@/components/hover.dev/utils/SectionHeading";
import { SectionHeadingSpacing } from "@/components/hover.dev/utils/SectionHeadingSpacing";
import { SectionSubheading } from "@/components/hover.dev/utils/SectionSubheading";
import { IconCloudDemo } from "@/components/magicui/demo/iconCloudDemo/IconCloudDemo";
import { FiZap } from "react-icons/fi";
import { ConfettiStars } from "../../components/magicui/demo/confetti/Stars";

const SectionDeveloperCommunity = () => {
  return (
    <section className="relative overflow-hidden border-y border-zinc-700">
      <MaxWidthWrapper className="relative z-20 py-20 md:py-36">
        <span className="block p-3 mx-auto mb-3 text-3xl rounded shadow-md w-fit bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-blue-900">
          <FiZap />
        </span>
        <SectionHeadingSpacing>
          <SectionHeading persistCenter>
            Are You a Developer ? <br /> Share Your Experience in The Developer
            Community
          </SectionHeading>
          <SectionSubheading persistCenter>
            modeled after Stack Overflow. Engage with fellow developers,
            exchange knowledge, solve coding challenges{" "}
          </SectionSubheading>
        </SectionHeadingSpacing>
        <CodeCard />
        <Stepper />
        <IconCloudDemo />
        {/* <div className="flex justify-between mx-auto">
        </div> */}
        <ConfettiStars />
      </MaxWidthWrapper>
      <Minigrid />
    </section>
  );
};

export default SectionDeveloperCommunity;
