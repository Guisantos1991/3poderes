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
      <div className="flex flex-col items-center justify-center w-full min-h-[500px] md:h-176 p-0 md:p-8 mt-24">
        <div className="flex w-full h-full flex-col md:flex-row justify-center md:justify-end items-center">
          <div
            className="flex flex-col items-center justify-center w-full md:w-4/5 h-full relative"
            id="main-service"
          >
            {/* Card sobreposto no desktop, acima no mobile */}
            <div
              className="flex flex-col items-center justify-center w-full sm:w-11/12 max-w-xs sm:max-w-md md:max-w-lg bg-white/90 rounded-lg shadow-lg p-2 sm:p-4 gap-1 sm:gap-2 mb-4 md:w-96 md:h-96 md:absolute md:-left-52 md:top-1/2 md:-translate-y-1/2 md:z-10 main-service-card"
              id="mainServiceCard"
            >
              <div className="flex flex-row items-center justify-start w-full h-10 gap-1">
                <Separator className="w-5 h-3" />
                <h1 className="font-daysOne text-xs md:text-sm text-red-500 gap-1">
                  Com o melhor atendimento!
                </h1>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-2">
                <h1 className="font-daysOne text-base md:text-lg text-black">
                Equipe experiente, diagnóstico rápido e serviço sem enrolação.
                </h1>
                <p className="font-dmSans text-xs md:text-sm text-black">
                Na 3 Poderes, você é atendido por quem entende do assunto e fala a verdade.
                Aqui, o que precisa ser feito é explicado com clareza — e só é feito o necessário.
                </p>
                <div className="flex flex-row items-center justify-start w-full h-4 gap-1 mt-3">
                  <Disc className="w-3 h-3" />
                  <p className="font-dmSans text-xs md:text-sm text-black">
                    Duas unidades.
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-4 gap-1">
                  <Disc className="w-3 h-3" />
                  <p className="font-dmSans text-xs md:text-sm text-black">
                  Estrutura completa e moderna.
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-4 gap-1">
                  <Disc className="w-3 h-3" />
                  <p className="font-dmSans text-xs md:text-sm text-black">
                    Equipe técnica especializada.
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-4 gap-1">
                  <Disc className="w-3 h-3" />
                  <p className="font-dmSans text-xs md:text-sm text-black">
                    Atendimento com hora marcada.
                  </p>
                </div>
              </div>
              <div
                className={`flex flex-col items-center justify-center w-full h-12 md:h-10 mt-2 rounded-lg shadow-md transition-colors duration-500 ${
                  isRed700 ? "bg-red-700" : "bg-red-500"
                } hover:scale-105 active:scale-95 cursor-pointer`}
                id="venha-conferir"
              >
                <h1 className="font-daysOne text-base md:text-lg text-white tracking-wider animate-pulse">
                  VENHA CONFERIR
                </h1>
              </div>
            </div>
            {/* Vídeo de fundo */}
            <div className="w-full flex flex-col items-center justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[52vw] sm:h-[60vw] md:h-[52.4rem] object-cover rounded-lg"
                style={{ pointerEvents: "none" }}
              >
                <source src="/videos/mainVideo.mp4" type="video/mp4" />
                Seu navegador não suporta vídeo em HTML5.
              </video>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
