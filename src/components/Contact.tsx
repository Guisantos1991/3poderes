import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Separator from "../assets/icons/separator-carswhite.svg?react";

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="flex flex-col items-center justify-center w-full h-180 p-8"
    >
      <div className="flex flex-row items-center justify-center w-3/4 h-full">
        <div
          className="flex flex-col items-center justify-center w-5/6 h-full relative right-50 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(/images/yellowBackground.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-start justify-start w-full h-full p-20 gap-4">
            <div className="flex flex-row items-center justify-start w-120 h-8 gap-2">
              <Separator />
              <h1
                className="text-black font-daysOne font-bold text-lg
          "
              >
                Agende seu serviço!
              </h1>
            </div>
            <div className="flex flex-row items-center justify-start w-160 h-16">
              <h1
                className="text-black font-daysOne font-bold text-2xl
          "
              >
                Com trabalho sério, qualidade e compromisso! Nós vamos te ajudar a manter seu carro em dia!
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-120 h-120 bg-black absolute right-75">
          <h1 className="text-white">Contact</h1>
        </div>
        
      </div>
    </motion.div>
  );
}
