import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img20 from "./assets/image/20.jpg";
import img21 from "./assets/image/21.jpg";
import img22 from "./assets/image/22.jpg";
import img23 from "./assets/image/23.jpg";
import img24 from "./assets/image/24.jpg";
import img25 from "./assets/image/25.jpg";


export default function Programs() {
  const [active, setActive] = useState(null);

  // navbar offset + scroll top safety
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = [
    {
      title: "Junior Development Program",
      short:
        "For young players focusing on movement, coordination, balance, and correct stroke fundamentals.",
      image: img21,
      details: [
        "Footwork, balance, and coordination development",
        "Introduction to all basic strokes",
        "Fun-based structured drills",
        "Strong technical foundation",
        "Ideal for beginners and young learners",
      ],
    },
    {
      title: "Performance Training Program",
      short:
        "For intermediate players developing consistency, endurance, and controlled match play.",
      image: img22,
      details: [
        "Consistency-based drilling",
        "On-court endurance & fitness",
        "Pattern-based point play",
        "Mental discipline training",
        "For club & competitive players",
      ],
    },
    {
      title: "Competitive Squad",
      short:
        "Advanced program for tournament-ready players focusing on tactics and pressure handling.",
      image: img23,
      details: [
        "Match simulations with scoring",
        "Advanced tactical awareness",
        "Tournament routines & planning",
        "Pressure handling & recovery",
      ],
    },
    {
      title: "Private Coaching",
      short:
        "Individualized sessions addressing specific technical and performance needs.",
      image: img24,
      details: [
        "Personalized technical correction",
        "Video analysis",
        "Flexible scheduling",
      ],
    },
    {
      title: "Seasonal Training Camps",
      short:
        "Intensive development camps conducted during holidays and off-season periods.",
      image: img25,
      details: [
        "High-volume training blocks",
        "Fitness + match play",
        "Rapid skill improvement",
      ],
    },
  ];

  return (
    <main className="bg-[#0b1411] text-[#e6f2ee] pt-20">

      {/* HERO */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4 }}
          src={img20}
          alt="Tennis training"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b
          from-[#0b1411]/85 via-[#0b1411]/60 to-[#0b1411]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          <span className="block text-[11px] tracking-[0.35em] uppercase
            text-[#8fbfa9] mb-5">
            Training Programs
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl
            font-medium leading-tight">
            Structured programs,
            <br />
            <span className="text-[#8fbfa9]">not random coaching.</span>
          </h1>
        </div>
      </section>

      {/* PROGRAM LIST */}
      <section className="py-24 md:py-32 bg-[#0e1714]">
        <div className="max-w-6xl mx-auto px-6 md:px-20 space-y-24">

          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-b border-[#1f2a26] pb-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                {/* IMAGE – SAME AS TOURNAMENT STYLE */}
                {p.image && (
                  <div className="relative h-65 sm:h-80 md:h-96 lg:h-80
                    overflow-hidden border border-[#2a3a34]
                    shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
                    <motion.img
                      initial={{ scale: 1.15 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.4 }}
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t
                      from-[#0b1411]/70 via-transparent to-transparent" />
                  </div>
                )}

                {/* CONTENT */}
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
                    {p.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#b8cbc3] max-w-xl">
                    {p.short}
                  </p>

                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className="mt-5 text-sm tracking-wide uppercase
                    text-[#8fbfa9] hover:text-white transition"
                  >
                    {active === i ? "Hide details" : "View details"}
                  </button>

                  {/* DETAILS */}
                  <AnimatePresence>
                    {active === i && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-6 space-y-3 text-[#b8cbc3] overflow-hidden"
                      >
                        {p.details.map((d, idx) => (
                          <li key={idx}>• {d}</li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-5xl font-medium mb-8">
            Program placement is based on
            <span className="text-[#8fbfa9]"> readiness</span>.
          </h2>

          <p className="text-base sm:text-lg text-[#b8cbc3] mb-10">
            Players are evaluated on skill, mindset, and commitment —
            ensuring the right environment for development.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center
            px-12 py-4 rounded-full
            bg-[#1e5f4a] hover:bg-[#184d3c]
            text-white tracking-wide
            shadow-[0_18px_40px_rgba(30,95,74,0.45)]"
          >
            Request Program Information
          </Link>
        </div>
      </section>

    </main>
  );
}
