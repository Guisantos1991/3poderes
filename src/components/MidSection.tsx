import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Separator from "../assets/icons/separator-carsblue.svg?react";

//Componentes


const services = [
  {
    image: "/images/services6.png",
    title: "Mecânica em geral",
    description: "Diagnóstico técnico e reparo com garantia. Só o que realmente precisa ser feito."
  },
  {
    image: "/images/services5.png",
    title: "Troca de óleo e filtros",
    description: "Cuidamos da saúde do motor com a troca certa, no tempo certo."
  },
  {
    image: "/images/services7.png",
    title: "Alinhamento 3D e balanceamento",
    description: "Mais segurança, estabilidade e economia de pneus. Equipamento moderno e calibrado."
  },
  {
    image: "/images/services3.jpeg",
    title: "Freios e suspensão",
    description: "Verificação e manutenção com total atenção à sua segurança."
  },
  {
    image: "/images/services1.jpeg",
    title: "Serviços de motor",
    description: "Somos especialistas em motor: manutenção, correções e diagnósticos precisos, com experiência e responsabilidade."
  },
  {
    image: "/images/services4.jpeg",
    title: "Revisão completa",
    description: "Vai viajar ou precisa revisar seu carro? A gente cuida de tudo pra você com agilidade e transparência."
  },
];

export default function MidSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Carrossel
  const [current, setCurrent] = useState(0);
  const cardsPerView = 3;
  const maxIndex = services.length - cardsPerView - 1;

  // Rotação automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length, maxIndex]);

  return (
    <div className="flex flex-col items-start justify-start w-full md:mt-12 mt-12">
      <div className="flex flex-col md:flex-row w-full h-186 md:h-160 p-4 md:p-10 items-center justify-center gap-2 md:gap-0">
        <div className="flex flex-col items-center justify-start w-full md:w-1/2 h-full">
          <motion.div className="flex flex-col items-center justify-start w-full h-full p-2 mb-8 md:mb-45">
            <img
              src="/images/headerBanner.jpeg"
              alt="Mid Section"
              className="w-full md:w-3/4 h-48 md:h-full object-contain rounded-lg shadow-md mt-48"
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
            <div className="flex flex-col items-start justify-center w-full h-auto md:h-52 p-2 gap-4 md:gap-1">
              <h1 className="font-daysOne text-xl md:text-3xl text-black">
                A melhor oficina mecânica para cuidar do seu veículo
              </h1>
              <p className="font-dmSans text-base md:text-base text-black">
                Com anos de experiência no setor automotivo, a 3 Poderes se
                tornou referência em Uberlândia por oferecer um serviço
                confiável, justo e de qualidade. Nossa equipe é formada por
                profissionais experientes, prontos para te atender com atenção e
                resolver o seu problema com eficiência. A gente não inventa
                problema — a gente resolve. E é por isso que quem vem uma vez,
                sempre volta.
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
      <div
        className="flex flex-col items-center justify-center w-full h-full md:h-144 p-2 md:p-6 pb-0 mb-0"
        id="midSectionServices"
      >
        {/* Mobile: grid de cards */}
        <div className="w-full flex flex-col gap-4 md:hidden mt-24">
        <div className="flex flex-row items-center justify-center w-full h-6 gap-2 ml-6 mb-[-20px]">
              <div className="flex flex-col items-center justify-center w-8 h-full">
                <Separator className="w-6 h-4" />
              </div>
              <div className="flex items-center justify-start w-full h-full font-dmSans text-lg md:text-xl text-red-500">
                <h1>Nossos Serviços</h1>
              </div>
            </div>
          <div className="grid grid-cols-1 gap-4">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col w-full h-96 items-center justify-center bg-white rounded-lg shadow-md p-4">
                <div className="w-full h-48 flex items-center justify-center rounded mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="font-daysOne text-lg text-red-500 mb-2 text-center w-full h-8">{service.title}</h1>
                <p className="font-dmSans text-xs text-black text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: carrossel */}
        <div className="w-full h-full flex-col items-center hidden md:flex">
          <div className="flex flex-row items-center justify-between w-full mb-4">
            <h2 className="font-daysOne text-3xl text-black">Nossos Serviços</h2>
            <div className="flex gap-2">
              <button onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))} disabled={current === 0} className="p-2 bg-gray-200 rounded disabled:opacity-50">&#8592;</button>
              <button onClick={() => setCurrent((prev) => Math.min(prev + 1, maxIndex))} disabled={current >= maxIndex} className="p-2 bg-gray-200 rounded disabled:opacity-50">&#8594;</button>
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${current * (100 / cardsPerView)}%)`,
                width: `${(services.length / cardsPerView) * 100}%`,
              }}
            >
              {services.map((service) => (
                <div
                   key={service.title}
                   className="w-full md:w-1/3 px-2 h-full"
                   style={{ maxWidth: '33.3333%' }}
                >
                   <div className="flex flex-col w-full h-136 items-center justify-center bg-white rounded-lg shadow-md ">
                     <div className="w-full h-3/6 flex items-center justify-center rounded mb-4 ">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full md:w-full object-center object-cover"
                        />
                      </div>
                      <h1 className="font-daysOne text-base md:text-base text-red-500 mb-2 text-center w-full h-4">{service.title}</h1>
                      <p className="font-dmSans text-xs md:text-sm text-black text-center">{service.description}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-2">
             {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full ${current === idx ? 'bg-red-500' : 'bg-gray-300'}`}
                  onClick={() => setCurrent(idx)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
