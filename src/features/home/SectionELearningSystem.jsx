import AnimatedBoxRotate from "@/components/hover.dev/animatedBox/AnimatedBoxRotate";
import { Content } from "@/components/hover.dev/content/Content";
import { CornerBlur } from "@/components/hover.dev/utils/CornerBlur";
import { CornerGrid } from "@/components/hover.dev/utils/CornerGrid";
import { BentoGridDemo } from "@/components/magicui/demo/bentoGridDemo/BentoGridDemo";

const SectionELearningSystem = () => {
  return (
    <>
      {/* <section className="bg-backgorund">
      <BentoGridDemo />
    </section> */}

      <div id="features" className="relative overflow-hidden">
        <Content
          headerOne="Experience AIU Like Never Befor"
          headerTwo="The New Era of Social Community"
          headerText="Ultimate AIU Community has revolutionized the way the students will exprerience"
        />
        <CornerBlur />
        <CornerGrid />
        <AnimatedBoxRotate
          text=""
          one="Learn"
          two="Enjoy"
          three="Code"
          four="Design"
        />
      </div>
    </>
  );
};

export default SectionELearningSystem;
