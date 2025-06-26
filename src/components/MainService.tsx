import { motion, useScroll, useTransform } from "framer-motion";
import Separator from "../assets/icons/separator-carsblue.svg?react";
import Disc from "../assets/icons/disc.svg?react";
import { useRef, useEffect, useState } from "react";

export default function MainService() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  // Estado para alternar a cor
  const [isRed700, setIsRed700] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRed700((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div ref={ref} style={{ y }}>
      <div className="flex flex-col items-center justify-center w-full h-220 p-10">
        <div className="flex w-full h-full flex-row justify-end items-center">
          <div
            className="flex flex-col items-center justify-center w-5/6 h-full relative bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/images/headerBanner.jpeg')",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-center justify-center w-120 h-120 absolute -left-30 top-10 z-10 gap-2 bg-white rounded-lg shadow-md mt-40">
              <div className="flex flex-row items-center justify-start w-full h-16 ml-4 gap-2">
                <Separator className="w-6 h-4" />
                <h1 className="font-daysOne text-base text-red-500 gap-2">
                  Com o melhor atendimento!
                </h1>
              </div>
              <div className="flex flex-col items-start justify-center w-full h-80 gap-4 ml-4">
                <h1 className="font-daysOne text-2xl text-black">
                  Com uma equipe qualificada, comprometida e experiente!
                </h1>
                <p className="font-dmSans text-base text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quos.
                </p>
                <div className="flex flex-row items-center justify-start w-full h-2 gap-2 mt-6">
                  <Disc className="w-3 h-3" />
                  <p className="font-dmSans text-sm text-black">
                    Duas unidades.
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-2 gap-2">
                  <Disc className="w-3 h-3" />
                  <p className="font-dmSans text-sm text-black">
                    Equipamentos de alta qualidade.
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-2 gap-2">
                  <Disc className="w-3 h-3" />
                  <p className="font-dmSans text-sm text-black">
                    Peças e acessórios.
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-2 gap-2">
                  <Disc className="w-3 h-3" />
                  <p className="font-dmSans text-sm text-black">
                    Prazo diferenciado.
                  </p>
                </div>
              </div>
              <div
                className={`flex flex-col items-center justify-center w-full h-16 mt-4 ${
                  isRed700 ? "bg-red-700" : "bg-red-500"
                }`}
                id="venha-conferir"
              >
                <h1 className="font-daysOne text-2xl text-white">
                  VENHA CONFERIR
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
