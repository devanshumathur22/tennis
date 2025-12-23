import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function HeroScene() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden bg-[#0b1411]"
    >
      {/* BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=2000"
          alt="Morning Tennis Court"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b
          from-[#0b1411]/80 via-[#0b1411]/55 to-[#0b1411]/90" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 h-full flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20">

          <span className="block text-[11px] tracking-[0.35em] uppercase
            text-[#9fb8ad] mb-6">
            Elite Tennis Academy · Jaipur
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl
            font-semibold tracking-tight
            text-[#eef5f1] leading-[1.05]">
            Sanskriti
            <br />
            <span className="text-[#8fbfa9]">
              Tennis Academy
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl
            text-[#b8cbc3] leading-relaxed">
            Structured tennis training for players committed to
            long-term development, discipline, and competitive excellence.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-8">

            {/* EXPLORE TRAINING */}
            <Link
              to="/programs"
              className="inline-flex items-center justify-center
              px-12 sm:px-14 py-4 rounded-full
              bg-[#1e5f4a] hover:bg-[#184d3c]
              text-white tracking-wide
              transition-colors duration-300
              shadow-[0_18px_40px_rgba(30,95,74,0.45)]"
            >
              Explore Training
            </Link>

            {/* VISIT ACADEMY */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center
              px-12 sm:px-14 py-4 rounded-full
              border border-[#8fbfa9]
              text-[#8fbfa9]
              hover:bg-[#8fbfa9]/10
              transition-colors duration-300"
            >
              Visit the Academy
            </Link>

          </div>

        </div>
      </motion.div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-40
        bg-gradient-to-t from-[#0b1411] to-transparent" />
    </section>
  );
}
