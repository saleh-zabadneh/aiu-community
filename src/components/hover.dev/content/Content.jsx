import { Grid } from "../grid/Grid";
import { SimpleGrid } from "../grid/SimpleGrid";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { SectionHeading } from "../utils/SectionHeading";
import { SectionHeadingSpacing } from "../utils/SectionHeadingSpacing";
import { SectionSubheading } from "../utils/SectionSubheading";

export const Content = ({ headerOne, headerTwo, headerText }) => {
  return (
    <section>
      <MaxWidthWrapper className="relative z-20 pt-20 pb-20 md:pb-28 md:pt-40">
        <SectionHeadingSpacing>
          <SectionHeading>
            {headerOne || "Show the people"}
            <br />
            <span className="text-transparent bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text">
              {headerTwo || "what makes you great "}
            </span>
          </SectionHeading>
          <SectionSubheading>
            {headerText ||
              "Here is a good way to show some high levels pros as to what your product does and for who. "}
          </SectionSubheading>
        </SectionHeadingSpacing>

        <Grid />
        {/* <div className="my-12 h-[1px] w-full bg-gradient-to-r from-blue-800/0 via-blue-400/50 to-blue-800/0 md:my-20" /> */}
        {/* <SimpleGrid /> */}
      </MaxWidthWrapper>
    </section>
  );
};
