import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Separator from "../assets/icons/separator-carswhite.svg?react";
import LocationIcon from "../assets/icons/marker-car-service.svg?react";
import ContactIcon from "../assets/icons/phone-car-service.svg?react";

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
      className="flex flex-col items-start justify-center w-full min-h-[600px] md:h-180 p-4 md:p-8"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-3/4 h-full gap-8 md:gap-0 relative" id="Contact">
        <div
          className="flex flex-col items-center justify-center w-full md:w-5/6 h-full relative bg-cover bg-no-repeat rounded-lg shadow-md"
          style={{
            backgroundImage: `url(/images/yellowBackground.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="flex flex-col items-start justify-start w-full h-full p-4 md:p-20 gap-2 text-xs sm:text-sm md:text-base"
            id="Agenda"
          >
            <div className="flex flex-row items-center justify-start w-full h-8 gap-2">
              <Separator />
              <h1 className="text-black font-daysOne font-bold text-xs sm:text-base md:text-lg w-full break-words leading-tight">
                Agende seu serviço!
              </h1>
            </div>
            <div className="flex flex-row items-center justify-start w-full h-auto md:w-160 md:h-16">
              <h1 className="text-black font-daysOne font-bold text-xs sm:text-lg md:text-lg w-full break-words leading-tight">
                Com trabalho sério, qualidade e compromisso! Nós vamos te ajudar a manter seu carro em dia!
              </h1>
            </div>
            <p className="font-dmSans w-full md:w-120 text-xs sm:text-sm md:text-base break-words leading-tight">
              Com duas unidades, estamos prontos para receber você, com maior conforto! Não perca tempo, venha nos visitar e faça seu orçamento!
            </p>
            <div className="flex flex-col items-start justify-start w-full h-full mt-6 md:mt-10 gap-2 md:gap-2">
              <a
                href="https://www.google.com/maps/place/Av.+Babel,+121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2 hover:underline w-full"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                  <LocationIcon className="w-5 h-5 text-white" />
                </span>
                <span className="text-black font-daysOne font-bold text-xs sm:text-sm md:text-lg break-words w-full">
                  Avenida Babel, 121, Jardim Canaã - Uberlândia/MG
                </span>
              </a>
              <a
                href="https://wa.me/5534996441060"
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2 hover:underline w-full"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                  <ContactIcon className="w-5 h-5 text-white" />
                </span>
                <span className="text-black font-daysOne font-bold text-xs sm:text-sm md:text-lg break-words w-full">
                  (34) 99644-1060
                </span>
              </a>
              <a
                href="https://www.google.com/maps/place/Av.+Dimas+Machado,+60"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2 hover:underline mt-4 md:mt-10 w-full"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                  <LocationIcon className="w-5 h-5 text-white" />
                </span>
                <span className="text-black font-daysOne font-bold text-xs sm:text-sm md:text-lg break-words w-full">
                  Avenida Dimas Machado, 60 - Chacaras Tubalina - Uberlândia/MG
                </span>
              </a>
              <a
                href="https://wa.me/5534999666729"
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2 hover:underline w-full"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                  <ContactIcon className="w-5 h-5 text-white" />
                </span>
                <span className="text-black font-daysOne font-bold text-xs sm:text-sm md:text-lg break-words w-full">
                  (34) 99966-6729
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-120 h-40 sm:h-48 md:h-120 bg-black rounded-lg shadow-md p-2 sm:p-4 md:absolute md:right-[-320px] md:top-1/2 md:-translate-y-1/2 gap-2 sm:gap-6 md:gap-14 mt-2 sm:mt-4 md:mt-0">
          <h1 className="font-daysOne text-red-500 text-xs sm:text-sm md:text-2xl mb-1 sm:mb-2 uppercase text-center">
            Quer saber mais?
          </h1>
          <p className="font-dmSans text-white text-[10px] sm:text-xs md:text-lg h-4 text-center">
            Entre em contato conosco e vamos te ajudar a manter seu carro em
            dia!
          </p>
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 md:gap-10 h-28 sm:h-36 md:h-40 w-full">
            <div className="flex flex-row items-center justify-start w-full h-12 sm:h-14 md:h-4 p-1 sm:p-2 gap-1 sm:gap-2 md:gap-4">
              <a
                href="https://wa.me/5534996441060"
                className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full"
              >
                <ContactIcon className="w-5 h-5 text-white" />
              </a>
              <h1 className="font-daysOne font-bold text-[10px] sm:text-xs md:text-xl text-red-500 uppercase">
                Unidade Canaã
              </h1>
            </div>
            <div className="flex flex-row items-center justify-start w-full h-12 sm:h-14 md:h-4 p-1 sm:p-2 gap-1 sm:gap-2 md:gap-4">
              <a
                href="https://wa.me/5534999666729"
                className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full"
              >
                <ContactIcon className="w-5 h-5 text-white" />
              </a>
              <h1 className="font-daysOne font-bold text-[10px] sm:text-xs md:text-xl text-red-500 uppercase">
                Unidade Chs. Tubalina
              </h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
