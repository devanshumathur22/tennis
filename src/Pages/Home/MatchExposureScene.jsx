import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import img19 from "../assets/image/19.jpg";

export default function MatchExposureScene() {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // cinematic motion
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section className="relative bg-[#0e1714] text-[#e6f2ee] py-40">
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

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
              Match Exposure
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl xl:text-6xl
              font-medium leading-tight max-w-xl"
            >
              Training only matters
              <br />
              <span className="text-[#8fbfa9]">under pressure.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 text-lg text-[#b8cbc3]
              leading-relaxed max-w-xl"
            >
              Competitive tennis demands more than clean technique.
              Players must learn to manage scoring, pressure,
              decision-making, and emotional control in real match
              situations. Our training includes regular match play,
              internal competitions, and exposure to tournament
              environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 space-y-4 text-[#b8cbc3]"
            >
              <p>• Structured match play sessions</p>
              <p>• Internal competitive events</p>
              <p>• Tournament preparation routines</p>
            </motion.div>
          </div>

          {/* IMAGE FRAME */}
          <motion.div
            ref={imageRef}
            style={{ opacity }}
            className="relative"
          >
            {/* FRAME */}
            <div
              className="relative p-2.5 border border-[#2a3a34]
              bg-[#0b1411]
              shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
            >
              {/* IMAGE REVEAL */}
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
                className="relative overflow-hidden"
              >
                <motion.img
                  src={img19}
                  alt="Competitive tennis match"
                  style={{ y, scale }}
                  className="w-full h-130 object-cover"
                />

                {/* INNER OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t
                  from-[#0e1714]/45 via-transparent to-transparent" />
              </motion.div>
            </div>

            {/* SOFT GLOW */}
            <div
              className="pointer-events-none absolute -inset-4
              bg-linear-to-br from-[#8fbfa9]/10 via-transparent to-transparent
              blur-2xl opacity-40"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
