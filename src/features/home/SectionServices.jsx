import { CardScale } from "@/components/hover.dev/card/CardScale";
import useLazyLoad from "@/hooks/useLazyLoad";

const SectionServices = () => {
  //   const CardScale = useLazyLoad(
  //     () => import("@/components/aceternity/PulseBeam"),
  //     "PulseBeams"
  //   );
  return (
    <div>
      <CardScale />
    </div>
  );
};

export default SectionServices;
