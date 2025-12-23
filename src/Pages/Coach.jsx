import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import img37 from "./assets/image/37.jpg";
import img38 from "./assets/image/38.jpg";
import img39 from "./assets/image/39.jpg";

export default function Coach() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#0b1411] text-[#e6f2ee] overflow-hidden pt-20">

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          src={img37}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1411]/95 via-[#0b1411]/60 to-[#0b1411]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl xl:text-7xl font-medium leading-tight"
          >
            Coaching is not instruction.
            <br />
            <span className="text-[#8fbfa9]">It is responsibility.</span>
          </motion.h1>
        </div>
      </section>

      {/* WHAT A COACH DOES */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="block text-xs tracking-[0.35em] uppercase text-[#8fbfa9] mb-6">
              Role of a Coach
            </span>

            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              What a modern tennis coach actually does
            </h2>

            <p className="text-[#b8cbc3] text-lg leading-relaxed max-w-xl">
              Modern coaching extends far beyond feeding balls.
              A coach designs development systems, manages workload,
              shapes discipline, and protects players from short-term
              pressure while guiding long-term performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[420px] overflow-hidden bg-[#0e1714]"
          >
            <img
              src={img38}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 ring-1 ring-[#8fbfa9]/10" />
          </motion.div>

        </div>
      </section>

      {/* COACHING STRUCTURE */}
      <section className="py-32 bg-[#0e1714]">
        <div className="max-w-6xl mx-auto px-6 md:px-20">

          <h2 className="text-3xl md:text-4xl font-medium mb-20">
            Coaching structure
          </h2>

          <div className="grid md:grid-cols-3 gap-14">
            {[
              {
                title: "Head Coach",
                desc: "Responsible for vision, philosophy, and long-term player direction.",
                points: [
                  "Defines development framework",
                  "Oversees competition pathway",
                  "Mentors coaching staff",
                ],
              },
              {
                title: "Performance Coach",
                desc: "Focuses on match performance and advanced execution.",
                points: [
                  "Tactical & technical refinement",
                  "Match preparation routines",
                  "Pressure handling",
                ],
              },
              {
                title: "Foundation Coach",
                desc: "Builds the technical and behavioral base of players.",
                points: [
                  "Stroke fundamentals",
                  "Footwork & balance",
                  "Discipline & habits",
                ],
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-[#8fbfa9]/30 pt-8"
              >
                <h3 className="text-xl font-medium mb-4">{c.title}</h3>
                <p className="text-[#b8cbc3] mb-6">
                  {c.desc}
                </p>

                <ul className="space-y-2 text-[#b8cbc3] text-sm">
                  {c.points.map((p, idx) => (
                    <li key={idx}>— {p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[420px] overflow-hidden bg-[#0e1714]"
          >
            <img
              src={img39}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 ring-1 ring-[#8fbfa9]/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="block text-xs tracking-[0.35em] uppercase text-[#8fbfa9] mb-6">
              Philosophy
            </span>

            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              Built for longevity, not shortcuts
            </h2>

            <p className="text-lg text-[#b8cbc3] leading-relaxed max-w-xl">
              We prioritize sustainable development over short-term results.
              Structure, patience, and accountability create players
              who remain competitive physically and mentally over time.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0e1714] text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-10">
          Train with <span className="text-[#8fbfa9]">intent</span>
        </h2>

        <Link
          to="/contact"
          className="inline-flex px-14 py-4 rounded-full
          bg-[#1e5f4a] hover:bg-[#184d3c]
          transition shadow-[0_18px_40px_rgba(30,95,74,0.45)]"
        >
          Enquire About Coaching
        </Link>
      </section>

    </main>
  );
}
