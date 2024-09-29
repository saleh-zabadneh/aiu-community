import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { FiArrowRight, FiGitPullRequest, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ServiceCardSmall3D = ({ service }) => {
  return (
    <div className="p-8 text-white">
      <div className="w-full max-w-lg">
        <Link
          to={`/students/services/all-category/${service.category_id}/${service.id}`}
        >
          <ThreeDHoverScreenCard service={service} />
        </Link>
      </div>
    </div>
  );
};

const ThreeDHoverScreenCard = ({ service }) => {
  return (
    <motion.div
      whileHover="hovered"
      className="p-6 border-2 cursor-pointer rounded-xl"
    >
      <ScreenMock service={service} />
      <CardCopy service={service} />
    </motion.div>
  );
};

const ScreenMock = ({ service }) => {
  return (
    // Light Gradient Background

    <motion.img
      src={service?.files[0]?.path || service?.full_name || ""}
      variants={{
        hovered: {
          rotateY: "15deg",
          rotateX: "2.5deg",
          x: -10,
        },
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      transition={{
        duration: 0.35,
      }}
      className="w-full p-4 h-80 rounded-2xl bg-gradient-to-br from-violet-300 to-indigo-300"
    ></motion.img>
  );
};

const CardCopy = ({ service }) => {
  return (
    <div className="flex items-center mt-6">
      <motion.div
        variants={{
          hovered: {
            x: 0,
            opacity: 1,
          },
        }}
        style={{
          x: -40,
          opacity: 0,
        }}
        transition={{
          duration: 0.35,
        }}
      >
        <FiArrowRight className="mr-4 text-2xl" />
      </motion.div>
      <motion.div
        variants={{
          hovered: {
            x: 0,
          },
        }}
        style={{
          x: -40,
        }}
        transition={{
          duration: 0.35,
        }}
      >
        <div className="flex justify-between">
          <div className="flex gap-1 mb-2">
            <Avatar>
              <AvatarImage src={service.image || ""} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h4 className="mb-1 text-2xl font-bold">
              {service?.full_name || ""}
            </h4>
          </div>
          <span className="ml-12 text-slate-400">
            {service?.faculty ||
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet debitis nam cumque?"}
          </span>
        </div>
        <span className="text-slate-400">
          {service?.content ||
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet debitis nam cumque?"}
        </span>
      </motion.div>
    </div>
  );
};

export default ServiceCardSmall3D;
