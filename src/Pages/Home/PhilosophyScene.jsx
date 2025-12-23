import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import img from "../assets/image/1.jpg";

export default function PhilosophyScene() {
  const imageWrapRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageWrapRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section className="relative bg-[#0e1714] text-[#e6f2ee]">
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE FRAME */}
          <motion.div
            ref={imageWrapRef}
            style={{ opacity }}
            className="relative"
          >
            {/* FRAME */}
            <div className="relative p-[10px] border border-[#2a3a34]
              shadow-[0_40px_80px_rgba(0,0,0,0.55)]
              bg-[#0b1411]">

              {/* IMAGE CONTAINER */}
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
                className="relative overflow-hidden"
              >
                <motion.img
                  src={img}
                  alt="Coach guiding player"
                  style={{ y, scale }}
                  className="w-full h-[520px] object-cover"
                />

                {/* INNER OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t
                  from-[#0e1714]/45 via-transparent to-transparent" />
              </motion.div>
            </div>

            {/* SUBTLE GLOW */}
            <div className="pointer-events-none absolute -inset-4
              bg-gradient-to-br from-[#8fbfa9]/10 via-transparent to-transparent
              blur-2xl opacity-40" />
          </motion.div>

          {/* CONTENT */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="block text-xs tracking-[0.35em] uppercase
              text-[#8fbfa9] mb-8"
            >
              Training Philosophy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl
              font-medium leading-tight max-w-xl"
            >
              Training is a process,
              <br />
              <span className="text-[#8fbfa9]">not a shortcut.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 text-lg text-[#b8cbc3]
              leading-relaxed max-w-xl"
            >
              At Sanskriti Tennis Academy, every training session
              is designed with intent. We don’t chase quick results.
              We focus on correct fundamentals, consistency under
              pressure, and match intelligence — built step by step.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-14 space-y-6 text-[#b8cbc3]"
            >
              <p>• Footwork and balance before power</p>
              <p>• Discipline and consistency before competition</p>
              <p>• Match situations, not random drills</p>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28
        bg-gradient-to-t from-[#0e1714] to-transparent" />
    </section>
  );
}
