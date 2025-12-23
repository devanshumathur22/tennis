import { motion } from "framer-motion";
import img13 from "../assets/image/13.jpg";
import img14 from "../assets/image/14.jpg";
import img15 from "../assets/image/15.jpg";
import img16 from "../assets/image/16.jpg";
import img17 from "../assets/image/17.jpg";
import img18 from "../assets/image/18.jpg";

export default function CourtsScene() {
  const images = [
    {
      src: img13,
      title: "Morning Sessions",
      hint: "Calm conditions for technical refinement",
    },
    {
      src: img14,
      title: "Evening Training",
      hint: "Match-like intensity under lights",
    },
    {
      src: img15,
      title: "Court Surface",
      hint: "Consistent bounce and safe footing",
    },
    {
      src: img18,
      title: "Training Atmosphere",
      hint: "Distraction-free environment",
    },
    {
      src: img16,
      title: "Player Movement",
      hint: "Space designed for structured drills",
    },
    {
      src: img17,
      title: "Facility Standards",
      hint: "Maintained for long-term development",
    },
  ];

  return (
    <section className="relative bg-[#0b1411] text-[#e6f2ee] py-28 md:py-36 xl:py-44">
      <div className="max-w-7xl mx-auto px-6 md:px-14 xl:px-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mb-20 md:mb-28"
        >
          <span className="block text-[11px] tracking-[0.35em] uppercase
            text-[#8fbfa9] mb-5">
            Training Environment
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl
            font-medium leading-tight">
            Courts designed for <br />
            <span className="text-[#8fbfa9]">serious development.</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8 md:gap-12">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="relative overflow-hidden bg-[#0e1714]"
            >
              {/* IMAGE */}
              <motion.img
                src={img.src}
                alt={img.title}
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="h-80 sm:h-95 md:h-105
                w-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t
                from-[#0b1411]/75 via-[#0b1411]/25 to-transparent" />

              {/* TEXT – ALWAYS VISIBLE */}
              <div className="absolute bottom-0 p-6">
                <p className="text-xs tracking-[0.3em] uppercase
                  text-[#8fbfa9] mb-2">
                  {img.title}
                </p>
                <p className="text-sm text-[#b8cbc3] max-w-xs">
                  {img.hint}
                </p>
              </div>

              {/* SUBTLE FRAME */}
              <div className="pointer-events-none absolute inset-0
                ring-1 ring-[#8fbfa9]/10" />
            </motion.div>
          ))}
        </div>

        {/* CAPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 md:mt-24 max-w-2xl
          text-base sm:text-lg text-[#b8cbc3]
          leading-relaxed"
        >
          The training environment is intentionally calm and structured,
          allowing players to focus on execution, repetition, and long-term
          improvement without unnecessary distractions.
        </motion.p>

      </div>
    </section>
  );
}
