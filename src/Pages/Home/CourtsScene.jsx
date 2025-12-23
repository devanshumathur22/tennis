import { motion } from "framer-motion";

export default function CourtsScene() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600",
      title: "Morning Sessions",
      hint: "Calm environment for technical work",
      delay: 0,
    },
    {
      src: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1600",
      title: "Evening Practice",
      hint: "Match-like conditions under lights",
      delay: 0.15,
    },
    {
      src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600",
      title: "Court Surface",
      hint: "Consistent bounce & safe footing",
      delay: 0.3,
    },
  ];

  return (
    <section className="relative bg-[#0b1411] text-[#e6f2ee] py-24 md:py-32 xl:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 xl:px-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <span className="block text-[11px] tracking-[0.3em] uppercase
            text-[#8fbfa9] mb-4">
            Training Environment
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl
            font-medium leading-tight">
            Space designed for <br />
            <span className="text-[#8fbfa9]">focused training.</span>
          </h2>
        </motion.div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: img.delay }}
              className="group relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px]
              overflow-hidden cursor-pointer"
            >
              {/* IMAGE */}
              <motion.img
                src={img.src}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover
                scale-110 group-hover:scale-100
                transition-transform duration-[1200ms] ease-out"
              />

              {/* BASE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t
                from-[#0b1411]/65 via-[#0b1411]/20 to-transparent" />

              {/* HOVER CONTENT */}
              <div
                className="absolute inset-x-0 bottom-0 p-6
                translate-y-full group-hover:translate-y-0
                transition-transform duration-700 ease-out
                bg-gradient-to-t from-[#0b1411]/90 to-transparent"
              >
                <p className="text-sm text-[#8fbfa9] uppercase tracking-widest mb-2">
                  {img.title}
                </p>
                <p className="text-sm text-[#d2e2db]">
                  {img.hint}
                </p>
              </div>

              {/* SOFT BORDER GLOW */}
              <div className="pointer-events-none absolute inset-0
                ring-1 ring-[#8fbfa9]/10 group-hover:ring-[#8fbfa9]/30
                transition duration-700" />
            </motion.div>
          ))}
        </div>

        {/* CAPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 md:mt-20 max-w-2xl text-base sm:text-lg
          text-[#b8cbc3] leading-relaxed"
        >
          Our courts and training areas are designed to reduce distractions
          and encourage concentration — from early morning technical sessions
          to competitive evening training.
        </motion.p>

      </div>
    </section>
  );
}
