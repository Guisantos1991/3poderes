import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Separator from "../assets/icons/separator-carsblue.svg?react";

export default function MidSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (


    <div className="flex flex-col items-start justify-start w-full h-full">
    <div className="flex flex-row w-full h-204 p-10 items-center justify-center">
      <div className="flex flex-col items-start justify-start w-1/2 h-full ">
        <motion.div
          className="flex flex-col items-center justify-start w-full h-full p-2 mb-45"
        >
          <img
            src="/images/headerBanner.jpeg"
            alt="Mid Section"
            className="w-3/4 h-full object-contain"
          />
        </motion.div>
      </div>
      <motion.div
        id="MidSection-Right"
        ref={ref}
        style={{ x, opacity }}
        className="flex flex-col items-start justify-center w-1/2 h-full p-10 gap-10"
      >
        <div className="flex flex-col items-center justify-start w-full h-full mt-2 p-2 gap-2">
          <div className="flex flex-row items-center justify-center w-full h-8 gap-2">
            <div className="flex flex-col items-center justify-center w-8 h-full">
              <Separator className="w-6 h-4" />
            </div>
            <div className="flex items-center justify-start w-full h-full font-dmSans text-xl text-red-500">
              <h1>O que fazemos?</h1>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full h-52  p-2 gap-8">
            <h1 className="font-daysOne text-3xl text-black">
              Vai viajar? Nós cuidamos de tudo pra você!
            </h1>
            <p className="font-dmSans text-l text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aut
              libero nobis! Consequuntur odio perferendis iste, fuga quaerat
              fugiat temporibus iusto ea animi quam nulla corrupti quibusdam
              tenetur sequi quae!
            </p>
          </div>
          <div className="flex flex-col items-start justify-center w-full h-full bg-contain bg-no-repeat bg-center rounded-b-lg">
            <div
              className="flex w-full h-full rounded-b-lg bg-contain bg-no-repeat bg-start"
              style={{ backgroundImage: "url('/images/services2.jpeg')" }}
            ></div>
          </div>
        </div>
      </motion.div>
      
    </div></div>
  );
}
