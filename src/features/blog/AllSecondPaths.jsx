import { useGet } from "@/cache/reactquery/useGet";
import Spinner from "@/components/global/Spinner";
import { Empty } from "@phosphor-icons/react";
import { Link, useParams } from "react-router-dom";
import { MaxWidthWrapper } from "@/components/hover.dev/utils/MaxWidthWrapper";
import { Minigrid } from "@/components/hover.dev/utils/Minigrid";
import { SectionHeading } from "@/components/hover.dev/utils/SectionHeading";
import { SectionHeadingSpacing } from "@/components/hover.dev/utils/SectionHeadingSpacing";
import { SectionSubheading } from "@/components/hover.dev/utils/SectionSubheading";
import ShimmerButton from "@/components/magicui/ShimmerButton";
import { IconCloudDemo } from "@/components/magicui/demo/iconCloudDemo/IconCloudDemo";
import { CodeIcon } from "@radix-ui/react-icons";
import { FiZap } from "react-icons/fi";
import { DeviceMobile, Robot } from "@phosphor-icons/react";
import { MobileIcon } from "@radix-ui/react-icons";
import { IconBook } from "@tabler/icons-react";
import { BlogSecondPathCard } from "./BlogSecondPathCard";
import { FiCode, FiDollarSign, FiGift, FiMail } from "react-icons/fi";

import { Database } from "lucide-react";
import { CodeLoader } from "@/components/hover.dev/loaders/CodeLoader";
import Layout from "@/components/layout/Layout";

const AllSecondPaths = () => {
  const { pathId } = useParams();

  const pathNames = {
    1: { name: "Frontend", icon: FiCode },
    2: { name: "Backend", icon: Database },
    3: { name: "Mobile", icon: DeviceMobile },
    4: { name: "AI", icon: Robot },
    5: { name: "University Courses", icon: IconBook },
  };

  const {
    data: secondPathsData,
    isLoading: sedonPathsDataLoading,
    error: sedonPathsDataError,
    refetch: refetchPaths,
  } = useGet(`second path ${pathId}`, `/path/get/${pathId}`);
  if (sedonPathsDataLoading) return <CodeLoader />;
  if (!secondPathsData) return <Empty resourceName="" />;
  if (sedonPathsDataError) return <div>erro</div>;
  const pathNameData = pathNames[pathId];

  const { name: pathName, icon: PathIcon } = pathNameData || {};
  console.log(secondPathsData);
  return (
    <Layout>
      <section className="relative py-24 overflow-hidden border-y border-zinc-700">
        <MaxWidthWrapper className="relative z-20 py-20 md:py-12">
          <span className="block p-3 mx-auto mb-3 text-3xl rounded shadow-md w-fit bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-blue-900">
            {<PathIcon />}
          </span>
          <SectionHeadingSpacing>
            <SectionHeading persistCenter>
              Select <span className="text-red-200"> {pathName} </span>{" "}
              Technology
            </SectionHeading>
          </SectionHeadingSpacing>
          <div className="flex flex-wrap gap-4 mx-auto">
            {secondPathsData?.data?.tags.map((tag) => (
              <BlogSecondPathCard
                key={tag.id}
                text={tag.name}
                icon={PathIcon}
                link={`/blog/it/paths/${pathId}/${tag.id}/posts`}
              />
            ))}
          </div>
        </MaxWidthWrapper>
        <Minigrid />
      </section>
    </Layout>
  );
};

export default AllSecondPaths;
