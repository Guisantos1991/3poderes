import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContactIcon from "../assets/icons/phone-call1.svg?react";
import BestPriceIcon from "../assets/icons/best-prices.svg?react";
import GuaranteeIcon from "../assets/icons/guarantee.svg?react";
import CertifiedIcon from "../assets/icons/certified.svg?react";

export default function Header() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    active: { backgroundColor: "rgba(75,85,99,0.4)" }, // gray-600/60
    inactive: { backgroundColor: "rgba(0,0,0,0)" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="top-0 left-0 w-full min-h-[500px] md:h-[750px] bg-primary shadow-md z-50 flex flex-col justify-center items-center"
    >
      <div
        className="flex flex-col md:flex-row h-auto md:h-5/6 w-full bg-cover bg-center bg-no-repeat justify-center items-center"
        style={{ backgroundImage: "url('/images/hdBanner.jpg')" }}
      >
        <div className="flex flex-col md:flex-row items-center h-auto md:h-5/6 w-full ">
          <div className="flex w-full md:w-5/6 h-full flex-col justify-center items-center px-4 md:px-0 py-8 md:py-0 ">
            <div className="flex flex-col w-full md:w-[800px] gap-4 ">
              <h1 className="font-daysOne text-white text-3xl sm:text-4xl md:text-5xl w-full md:w-full text-center md:text-left  uppercase">
                Sua oficina mecânica de confiança em Uberlândia
              </h1>
              <div className="flex flex-col w-full bg-gray-600/40 rounded-lg p-2">
                <span className="font-dmSans text-white text-base md:text-1xl">
                  Na 3 Poderes, seu carro é tratado com seriedade, transparência
                  e qualidade real. Sem empurrar serviço, sem enrolação!
                  <br />
                  <br />
                  📍 Duas unidades: Canaã e Chácaras Tubalina.
                </span>
              </div>
              <div className="flex flex-col w-full gap-4 mt-4">
                <div className="flex flex-row h-12 items-center gap-2">
                  <div className="px-3 py-2 md:px-5 md:py-3.5 bg-secondary inline-flex justify-start items-center">
                    <a
                      href="https://wa.me/5534996441060"
                      className="text-center justify-center text-black text-sm md:text-base font-normal font-['Days_One'] uppercase tracking-tight hover:cursor-pointer"
                    >
                      Agendar Canaã
                    </a>
                  </div>
                  <a
                    href="https://wa.me/5534996441060"
                    className="flex w-10 h-10 md:w-14 md:h-8 justify-center items-center"
                  >
                    <ContactIcon
                      className="w-8 h-8 hover:cursor-pointer hover:scale-110 transition-all duration-300 hover:bg-gray-600/60 rounded-full hover:p-1 hover:w-10 hover:h-10 md:hover:w-12 md:hover:h-12 hover:ml-1"
                      style={{ fill: "white" }}
                    />
                  </a>
                </div>
                <div className="flex flex-row h-12 items-center gap-2">
                  <div className="px-3 py-2 md:px-5 md:py-3.5 bg-secondary inline-flex justify-start items-center">
                    <a
                      href="https://wa.me/5534999666729"
                      className="text-center justify-center text-black text-sm md:text-base font-normal font-['Days_One'] uppercase tracking-tight hover:cursor-pointer"
                    >
                      Agendar Chácaras Tubalina
                    </a>
                  </div>
                  <a
                    href="https://wa.me/5534999666729"
                    className="flex w-10 h-10 md:w-14 md:h-8 justify-center items-center"
                  >
                    <ContactIcon
                      className="w-8 h-8 hover:cursor-pointer hover:scale-110 transition-all duration-300 hover:bg-gray-600/60 rounded-full hover:p-1 hover:w-10 hover:h-10 md:hover:w-12 md:hover:h-12 hover:ml-1"
                      style={{ fill: "white" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:items-end md:justify-end w-full md:w-3/6 h-full relative mt-8 md:mt-0">
            <img
              src="/images/mainLogo.png"
              alt="logo"
              className="w-48 h-24 md:w-[360px] md:h-[190px] md:absolute md:right-10 md:bottom-[-40px] mb-4"
            />
          </div>
        </div>
      </div>
      <motion.div
        id="header-services"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row h-auto md:h-36 w-full md:w-5/6 items-center justify-center md:justify-between px-2 md:px-24 gap-4 md:gap-0 mt-6 md:mt-0"
      >
        <motion.div
          id="best-price"
          animate={active === 0 ? "active" : "inactive"}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          className="flex w-1/2 md:w-96 h-20 md:h-32 flex-row items-center justify-center rounded-lg mb-2 md:mb-0"
        >
          <div className="flex flex-row items-center justify-center w-1/3 md:w-1/2 h-full">
            <BestPriceIcon
              className="w-10 h-10 md:w-16 md:h-16"
              style={{ fill: "white" }}
            />
          </div>
          <div className="flex flex-col items-start justify-center w-2/3 md:w-full h-full p-1">
            <h1 className="text-white text-base md:text-2xl font-daysOne">
              Preço Justo, Sem Surpresa
            </h1>
            <p className="hidden md:block text-white text-xs md:text-sm font-dmSans">
            Aqui não tem susto no orçamento. É o que precisa, e ponto.
            </p>
          </div>
        </motion.div>
        <motion.div
          id="guarantee"
          animate={active === 1 ? "active" : "inactive"}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          className="flex w-1/2 md:w-96 h-20 md:h-32 flex-row items-center justify-center rounded-lg mb-2 md:mb-0"
        >
          <div className="flex flex-row items-center justify-center w-1/3 md:w-1/2 h-full">
            <GuaranteeIcon
              className="w-10 h-10 md:w-16 md:h-16"
              style={{ fill: "white" }}
            />
          </div>
          <div className="flex flex-col items-start justify-center w-2/3 md:w-full h-full p-1">
            <h1 className="text-white text-base md:text-2xl font-daysOne">
              Serviço com Garantia
            </h1>
            <p className="hidden md:block text-white text-xs md:text-sm font-dmSans">
            Peças de qualidade, serviço bem feito e garantia de verdade.
            </p>
          </div>
        </motion.div>
        <motion.div
          id="certified"
          animate={active === 2 ? "active" : "inactive"}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          className="flex w-1/2 md:w-96 h-20 md:h-32 flex-row items-center justify-center rounded-lg"
        >
          <div className="flex flex-row items-center justify-center w-1/3 md:w-1/2 h-full">
            <CertifiedIcon
              className="w-10 h-10 md:w-16 md:h-16"
              style={{ fill: "white" }}
            />
          </div>
          <div className="flex flex-col items-start justify-center w-2/3 md:w-full h-full p-1">
            <h1 className="text-white text-base md:text-2xl font-daysOne">
              Mecânico que Resolve
            </h1>
            <p className="hidden md:block text-white text-xs md:text-sm font-dmSans">
            Experiência de verdade, com profissional que fala a sua língua.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
