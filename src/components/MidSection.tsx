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

  // Carrossel
  const [current, setCurrent] = useState(0);
  const cardsPerView = 3;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Swipe handlers (mobile)
  let touchStartX = 0;
  let touchEndX = 0;
  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    touchStartX = e.changedTouches[0].screenX;
  }
  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 40) {
      // Swipe left
      setCurrent((prev) => Math.min(prev + 1, services.length - 1));
    }
    if (touchEndX > touchStartX + 40) {
      // Swipe right
      setCurrent((prev) => Math.max(prev - 1, 0));
    }
  }

  // Navegação desktop
  function prev() {
    setCurrent((prev) => Math.max(prev - 1, 0));
  }
  function next() {
    setCurrent((prev) => Math.min(prev + 1, services.length - cardsPerView));
  }

  // Rotação automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (isMobile) {
          return prev >= services.length - 1 ? 0 : prev + 1;
        } else {
          return prev >= services.length - cardsPerView ? 0 : prev + 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile, services.length, current]);

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
      <motion.div
        className="flex mt-12 flex-col items-center justify-center w-full h-auto md:h-144 p-2 md:p-6 pb-0 mb-0"
        id="midSectionServices"
        ref={servicesRef}
        style={{ y: servicesY, opacity: servicesOpacity }}
      >
        {/* Carrossel de Serviços */}
        <div className="w-full h-full flex flex-col items-center">
          <div className="flex flex-row items-center justify-between w-full mb-4">
            <h2 className="font-daysOne text-xl md:text-3xl text-black">Nossos Serviços</h2>
            {/* Setas desktop */}
            <div className="hidden md:flex gap-2">
              <button onClick={prev} disabled={current === 0} className="p-2 bg-gray-200 rounded disabled:opacity-50">&#8592;</button>
              <button onClick={next} disabled={current >= services.length - cardsPerView} className="p-2 bg-gray-200 rounded disabled:opacity-50">&#8594;</button>
            </div>
          </div>
          {/* Carrossel */}
          <div
            className="w-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: isMobile
                  ? `translateX(-${current * 100}%)`
                  : `translateX(-${current * (100 / cardsPerView)}%)`,
                width: isMobile ? `${services.length * 100}%` : `${(services.length / cardsPerView) * 100}%`,
              }}
            >
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex-shrink-0 w-full md:w-1/4 px-2"
                  style={{ maxWidth: isMobile ? '100%' : '25%' }}
                >
                  <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 h-full overflow-auto md:h-[450px]">
                    <div className="w-full h-[38vw] max-h-32 md:h-[22rem] md:max-h-[22rem] bg-cover bg-center rounded mb-4" style={{ backgroundImage: `url('${service.image}')` }}></div>
                    <h1 className="font-daysOne text-lg md:text-xl text-red-500 mb-2 text-center">{service.title}</h1>
                    <p className="font-dmSans text-xs md:text-base text-black text-center">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Indicadores mobile */}
          <div className="flex md:hidden justify-center gap-2 mt-2">
            {services.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full ${current === idx ? 'bg-red-500' : 'bg-gray-300'}`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
