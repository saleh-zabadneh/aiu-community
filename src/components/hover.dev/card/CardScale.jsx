import { GridPatternLinearGradient } from "@/components/magicui/demo/grid/GridPatternLinearGradient";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CreateStudentService from "@/features/studentServices/CreateStudentService";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SplashButton } from "../button/SplashButton";

export const CardScale = ({
  text,
  text2,
  isLearnMore = true,
  createService = false,
}) => {
  return (
    <>
      <>
        <section className="px-4 py-12 mx-auto text-white max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-end md:px-8">
            <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
              {text}
              <span className="text-slate-400">{text2} </span>
            </h2>
            {createService && (
              <Drawer className="">
                <DrawerTrigger asChild>
                  <SplashButton
                    variant="outline"
                    className="w-full text-center max-w-56"
                  >
                    Create New Service
                  </SplashButton>
                </DrawerTrigger>
                <DrawerContent className="mb-8">
                  <div className="w-full max-w-xl mx-auto">
                    <DrawerHeader>
                      <DrawerTitle>Create New Service</DrawerTitle>
                      <DrawerDescription>
                        Add Your Service Details Data
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0 ">
                      <CreateStudentService />
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            )}
            {isLearnMore && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 font-medium text-white transition-colors rounded-lg shadow-xl whitespace-nowrap bg-slate-900 hover:bg-slate-700"
              >
                <Link to="/students/services/all-category">Learn more</Link>
              </motion.button>
            )}
          </div>
          <div className="grid grid-cols-12 gap-4 mb-4">
            <BounceCard className="col-span-12 md:col-span-4">
              <Link to="/students/services/all-category/1">
                <CardTitle>Graphic Design</CardTitle>
                <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                  <span className="block font-semibold text-center text-indigo-50">
                    Explore Top Graphic Designers in AIU
                  </span>
                </div>
              </Link>
            </BounceCard>
            <BounceCard className="col-span-12 md:col-span-8">
              <Link to="/students/services/all-category/3">
                <CardTitle>Content Creator</CardTitle>
                <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                  <span className="block font-semibold text-center text-orange-50">
                    Explore Top Content Creator in AIU
                  </span>
                </div>
              </Link>
            </BounceCard>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <BounceCard className="col-span-12 md:col-span-8">
              <Link to="/students/services/all-category/2">
                <CardTitle>Photographers</CardTitle>
                <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                  <span className="block font-semibold text-center text-emerald-50">
                    Explore Top Photographers in AIU
                  </span>
                </div>
              </Link>
            </BounceCard>
            <BounceCard className="col-span-12 md:col-span-4">
              <Link to="/students/services/all-category/4">
                <CardTitle>And finally Video Editing</CardTitle>
                <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                  <span className="block font-semibold text-center text-red-50">
                    Explore Top Video Editors in AIU
                  </span>
                </div>
              </Link>
            </BounceCard>
          </div>
        </section>{" "}
        {/* <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div> */}
        {/*             <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
         */}
        {/* shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)] */}
        {/* shadow-[5px_25px_281px_23px_rgba(154,_134,_130,_0.64)] */}
        {/* shadow-[8px_9px_249px_45px_rgba(145,_46,_106,_0.26)] */}
        {/* shadow-[6px_23px_207px_73px_rgba(182,_54,_66,_0.21)] */}
        {/* shadow-[9px_26px_284px_85px_rgba(162,_203,_236,_0.11)] */}
        {/* shadow-[4px_26px_245px_43px_rgba(148,_207,_251,_0.75)] */}
      </>
    </>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-800 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-3xl font-semibold text-center">{children}</h3>
  );
};
