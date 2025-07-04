import { motion } from "framer-motion";
import Separator from "../assets/icons/separator-carsblue.svg?react";

const comments = [
  "/images/comment1.png",
  "/images/comment2.png",
  "/images/comment3.png",
];

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function AboutUs() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full min-h-[400px] md:h-96 mt-8 md:mt-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="flex w-full md:w-5/6 h-auto md:h-11/12 flex-col justify-center items-start gap-4">
        <div className="flex flex-col w-full md:w-120 h-20 md:h-24 px-2 md:px-4 gap-1 md:gap-2">
          <div className="flex flex-row items-center justify-start gap-2">
            <Separator className="w-5 h-5 md:w-6 md:h-6" />
            <h1 className="text-sm md:text-base font-dmSans text-red-500">Depoimentos</h1>
          </div>
          <h1 className="text-lg md:text-2xl font-daysOne text-black">
            Veja aqui o que os clientes estão falando sobre nós!
          </h1>
        </div>
        <div className="flex flex-col md:flex-row w-full h-auto md:h-80 justify-center md:justify-between items-center px-2 md:px-4 py-2 md:py-4 gap-4 md:gap-4">
          {comments.map((src, idx) => (
            <motion.div
              key={src}
              className="flex w-full md:w-120 h-40 md:h-full mb-4 md:mb-0"
              variants={itemVariants}
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img src={src} alt={`Comentário ${idx + 1}`} className="w-full h-full object-contain rounded-lg shadow-md" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
