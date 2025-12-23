import { motion } from "framer-motion";
import { useEffect } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1800",
    title: "Early Morning Training",
    caption:
      "This session focuses on technical repetition during early hours when concentration is highest. Players work on balance, footwork, and stroke rhythm without external distractions.",
  },
  {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1800",
    title: "Coach Observation & Correction",
    caption:
      "Coaches closely observe player movement and stroke execution. Corrections are made in real time to ensure proper technique and prevent long-term mechanical errors.",
  },
  {
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1800",
    title: "Focused Individual Practice",
    caption:
      "Individual sessions are designed to address specific technical needs. Players work independently under guidance, improving control, consistency, and confidence.",
  },
  {
    src: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1800",
    title: "Match Play Under Pressure",
    caption:
      "Structured match play replicates real competitive situations. Players learn to manage scoring, emotions, and tactical decisions during live points.",
  },
  {
    src: "https://images.unsplash.com/photo-1599058917212-d750089bc07c?q=80&w=1800",
    title: "Endurance & Conditioning",
    caption:
      "Fitness blocks are integrated into on-court sessions. The emphasis remains on movement efficiency, stamina, and recovery rather than exhaustion.",
  },
  {
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1800",
    title: "Evening Training Sessions",
    caption:
      "Evening sessions simulate match-day conditions under lights. Players adapt to changing visibility, fatigue, and competitive rhythm.",
  },
];

export default function Gallery() {

  // ✅ scroll reset on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // ✅ navbar offset added
    <main className="bg-[#0b1411] text-[#e6f2ee] overflow-hidden pt-20">

      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000"
          alt="Academy training"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b
          from-[#0b1411]/90 via-[#0b1411]/65 to-[#0b1411]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          <span className="block text-[11px] tracking-[0.35em] uppercase
            text-[#8fbfa9] mb-6">
            Gallery
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-medium">
            Life inside the
            <br />
            <span className="text-[#8fbfa9]">academy.</span>
          </h1>
        </div>
      </section>

      {/* GALLERY SECTIONS */}
      <section className="py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-6 md:px-20 space-y-36">

          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden
                border border-[#2a3a34]
                shadow-[0_50px_120px_rgba(0,0,0,0.65)]">
                <motion.img
                  initial={{ scale: 1.08, filter: "brightness(0.85)" }}
                  whileInView={{ scale: 1, filter: "brightness(1)" }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={item.src}
                  alt={item.title}
                  className="w-full h-[55vh] sm:h-[60vh] md:h-[65vh]
                  object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t
                  from-[#0b1411]/65 via-transparent to-transparent" />
              </div>

              {/* CONTENT */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6">
                  {item.title}
                </h2>

                <p className="text-base md:text-lg text-[#b8cbc3]
                  leading-relaxed max-w-xl">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="py-20 bg-[#0e1714] text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-20">
          <p className="text-sm md:text-base text-[#b8cbc3] leading-relaxed">
            These moments reflect the daily discipline, learning, and progression
            that define our training environment.
          </p>
        </div>
      </section>

    </main>
  );
}
