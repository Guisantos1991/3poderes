import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Separator from "../assets/icons/separator-carsblue.svg?react";

export default function MidSection() {
  const ref = useRef(null);
  const servicesRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Efeito de scroll para midSectionServices
  const { scrollYProgress: servicesScrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "center center"],
  });
  const servicesY = useTransform(servicesScrollYProgress, [0, 1], [100, 0]);
  const servicesOpacity = useTransform(servicesScrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="flex flex-col items-start justify-start w-full h-full md:mt-12">
      <div className="flex flex-col md:flex-row w-full h-186 md:h-160 p-4 md:p-10 items-center justify-center gap-2 md:gap-0">
        <div className="flex flex-col items-center justify-start w-full md:w-1/2 h-full">
          <motion.div className="flex flex-col items-center justify-start w-full h-full p-2 mb-8 md:mb-45">
            <img
              src="/images/headerBanner.jpeg"
              alt="Mid Section"
              className="w-full md:w-3/4 h-48 md:h-full object-contain rounded-lg shadow-md mt-24"
            />
          </motion.div>
        </div>
        <motion.div
          id="MidSection-Right"
          ref={ref}
          style={{ x, opacity }}
          className="flex flex-col items-start justify-center w-full md:w-1/2 h-200 p-2 md:p-10 gap-4 md:gap-10"
        >
          <div className="flex flex-col items-center justify-start w-full h-full mt-2 p-2 gap-2">
            <div className="flex flex-row items-center justify-center w-full h-8 gap-2">
              <div className="flex flex-col items-center justify-center w-8 h-full">
                <Separator className="w-6 h-4" />
              </div>
              <div className="flex items-center justify-start w-full h-full font-dmSans text-lg md:text-xl text-red-500">
                <h1>O que fazemos?</h1>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-auto md:h-52 p-2 gap-4 md:gap-8">
              <h1 className="font-daysOne text-xl md:text-3xl text-black">
                Vai viajar? Nós cuidamos de tudo pra você!
              </h1>
              <p className="font-dmSans text-base md:text-lg text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                aut libero nobis! Consequuntur odio perferendis iste, fuga
                quaerat fugiat temporibus iusto ea animi quam nulla corrupti
                quibusdam tenetur sequi quae!
              </p>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-56 md:h-[32rem] bg-contain bg-no-repeat bg-center rounded-b-lg mb-0 md:mb-4">
              <div
                id="midSectionServicesImage"
                className="w-full h-full rounded-b-lg bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: "url('/images/services2.jpeg')",
                }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col items-center justify-center w-full h-auto md:h-144 p-2 md:p-6 pb-0 mb-0"
        id="midSectionServices"
        ref={servicesRef}
        style={{ y: servicesY, opacity: servicesOpacity }}
      >
        <div className="flex flex-col md:flex-row w-full md:w-full h-auto md:h-full gap-4 md:gap-0 items-center justify-center md:mt-12 sm:mt-[-600px]">
          <div className="flex flex-col items-center justify-center w-full h-full mb-4 md:mb-0">
            <div className="flex w-full md:w-3/4 h-20 md:h-36 flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-start w-full h-8 md:h-12 gap-2">
                <Separator className="w-6 h-4 " />
                <h1 className="font-daysOne text-sm md:text-base text-red-500 self-">
                  Como podemos te ajudar?
                </h1>
              </div>
              <h1 className="font-daysOne text-xl md:text-3xl text-black">
                Nossos Serviços
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-96 h-auto md:h-5/6 ">
              <div className="flex flex-col w-full h-full">
                <div
                  className="flex w-full h-[45vw] md:h-96 bg-cover bg-no-repeat bg-center"
                  style={{ backgroundImage: "url('/images/services5.png')" }}
                ></div>
                <div className="flex w-full h-10 md:h-1/6 items-center justify-center md:w-96 ">
                  <h1 className="font-daysOne text-lg md:text-2xl text-red-500">
                    Oléos e Filtros
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full mb-4 md:mb-0">
            <div className="flex w-full md:w-96 h-20 md:h-36" />
            <div className="flex flex-col items-center justify-center w-full md:w-100 h-auto md:h-5/6">
              <div className="flex flex-col w-full h-full">
                <div
                  className="flex w-full h-[45vw] md:h-96 bg-cover bg-no-repeat bg-center"
                  style={{ backgroundImage: "url('/images/services7.png')" }}
                ></div>
                <div className="flex w-full h-10 md:h-1/6 items-center justify-center md:w-full ">
                  <h1 className="font-daysOne text-lg md:text-2xl text-red-500">
                    Alinhamento e Balanceamento
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex w-full md:w-100 h-20 md:h-36" />
            <div className="flex flex-col items-center justify-center w-full md:w-3/4 h-auto md:h-5/6">
              <div className="flex flex-col w-full h-full">
                <div
                  className="flex w-full h-[45vw] md:h-96 bg-cover bg-no-repeat bg-center"
                  style={{ backgroundImage: "url('/images/services6.png')" }}
                ></div>
                <div className="flex w-full h-10 md:h-1/6 items-center justify-center">
                  <h1 className="font-daysOne text-lg md:text-2xl text-red-500">
                    Mecânica Geral
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
