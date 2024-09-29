import AllPaths from "@/features/blog/AllPaths";
import { useScrollToTopOnRouteChange } from "@/hooks/useScrollToTopOnRouteChange";
import { MaxWidthWrapper } from "@/components/hover.dev/utils/MaxWidthWrapper";
import { Minigrid } from "@/components/hover.dev/utils/Minigrid";
import { SectionHeading } from "@/components/hover.dev/utils/SectionHeading";
import { SectionHeadingSpacing } from "@/components/hover.dev/utils/SectionHeadingSpacing";
import { SectionSubheading } from "@/components/hover.dev/utils/SectionSubheading";
import ShimmerButton from "@/components/magicui/ShimmerButton";
import { IconCloudDemo } from "@/components/magicui/demo/iconCloudDemo/IconCloudDemo";
import { CodeIcon } from "@radix-ui/react-icons";
import Layout from "@/components/layout/Layout";
import { Stack } from "@phosphor-icons/react";
const Blog = () => {
  useScrollToTopOnRouteChange();
  return (
    <Layout>
      <div>
        <section className="relative py-24 overflow-hidden border-y border-zinc-700">
          <MaxWidthWrapper className="relative z-20 py-20 md:py-12">
            <span className="block p-3 mx-auto mb-3 text-3xl rounded shadow-md w-fit bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-blue-900">
              <Stack />
            </span>
            <SectionHeadingSpacing>
              <SectionHeading persistCenter>
                New Stack Overflow is Here in AIU Community
              </SectionHeading>
              <SectionSubheading persistCenter>
                select the path you want and start sharing
              </SectionSubheading>
            </SectionHeadingSpacing>
            <AllPaths />
            <IconCloudDemo />

            <ShimmerButton className="flex items-center justify-center gap-2 mx-auto mt-12 shadow-2xl">
              <CodeIcon width={"36"} />
              Lets Code
            </ShimmerButton>
          </MaxWidthWrapper>
          <Minigrid />
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
