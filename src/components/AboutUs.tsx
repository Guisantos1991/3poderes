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
      className="flex flex-col items-center justify-center w-full h-96 mt-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="flex w-5/6 h-11/12 flex-col justify-center items-start gap-4">
        <div className="flex flex-col w-120 h-24 px-4 gap-2">
          <div className="flex flex-row items-center justify-start gap-2">
            <Separator className="w-6 h-6" />
            <h1 className="text-base font-dmSans text-red-500">Comentários</h1>
          </div>
          <h1 className="text-2xl font-daysOne text-black">
            Veja aqui o que os clientes estão falando sobre nós!
          </h1>
        </div>
        <div className="flex flex-row w-full h-80 justify-between items-center px-4 py-4 gap-4">
          {comments.map((src, idx) => (
            <motion.div
              key={src}
              className="flex w-120 h-full"
              variants={itemVariants}
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img src={src} alt={`Comentário ${idx + 1}`} className="w-full h-full object-contain rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
