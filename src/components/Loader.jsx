import { motion } from "framer-motion";

export default function Loader({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.2, duration: 0.7, ease: "easeOut" }}
      onAnimationComplete={onFinish}
    >
      {/* TENNIS BALL */}
      <motion.div
        initial={{ x: "-120vw", y: 120, scale: 0.6 }}
        animate={{
          x: 0,
          y: 0,
          scale: [0.6, 1.1, 1],
        }}
        transition={{
          duration: 0.7,
          ease: "easeIn",
        }}
        className="relative z-20 w-16 h-16 rounded-full
        bg-lime-400
        shadow-[0_0_80px_rgba(74,222,128,0.9)]"
      />
      
      {/* BALL MOTION TRAIL */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.6, scaleX: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute left-0 right-1/2 h-[2px]
        bg-gradient-to-r from-transparent to-lime-400"
      />

      {/* RACKET SWING */}
      <motion.div
        initial={{ rotate: -140, opacity: 0 }}
        animate={{ rotate: 20, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.35, ease: "easeOut" }}
        className="absolute"
        style={{ right: "44%", top: "42%" }}
      >
        <div
          className="w-[3px] h-44 rounded-full
          bg-white
          shadow-[0_0_25px_rgba(74,222,128,0.8)]"
        />
      </motion.div>

      {/* IMPACT SHOCKWAVE */}
      <motion.div
        initial={{ scale: 0.2, opacity: 0.9 }}
        animate={{ scale: 18, opacity: 0 }}
        transition={{ delay: 0.9, duration: 1.1, ease: "easeOut" }}
        className="absolute w-24 h-24 rounded-full
        border border-lime-400"
      />

      {/* IMPACT FLASH */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.35, 0] }}
        transition={{ delay: 0.9, duration: 0.25 }}
        className="absolute inset-0 bg-lime-400"
      />

      {/* SCREEN SHAKE */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, -8, 8, -5, 5, 0],
          y: [0, -4, 4, -3, 3, 0],
        }}
        transition={{ delay: 0.9, duration: 0.35 }}
        className="absolute inset-0"
      />
    </motion.div>
  );
}
