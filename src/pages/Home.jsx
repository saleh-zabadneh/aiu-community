import { useScrollToTopOnRouteChange } from "@/hooks/useScrollToTopOnRouteChange";
import Layout from "@/components/layout/Layout";
import SectionHero from "@/features/home/SectionHero";
import SectionELearningSystem from "@/features/home/SectionELearningSystem";
import SectionChatbot from "@/features/home/SectionChatbot";
import SectionDeveloperCommunity from "@/features/home/SectionDeveloperCommunity";
import { Team } from "@/features/developers/Team";
import { CardScale } from "@/components/hover.dev/card/CardScale";
import SectionAdvertisement from "@/features/home/SectionAdvertisement";
import { AuroraHero } from "@/components/hover.dev/hero/AuroraHero";
import { BentoGridDemo } from "@/components/magicui/demo/bentoGridDemo/BentoGridDemo";
import { useEffect } from "react";

const Home = () => {
  useScrollToTopOnRouteChange();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <SectionHero />
      <SectionELearningSystem />
      <SectionDeveloperCommunity />
      <CardScale
        text={"Share Your Talents "}
        text2={"With AIU Community Services"}
      />
      <SectionAdvertisement />

      <BentoGridDemo />
      <AuroraHero />
      <SectionChatbot />

      <Team />
    </Layout>
  );
};

export default Home;
