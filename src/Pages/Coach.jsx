import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Coach() {

  // ✅ scroll reset on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // ✅ navbar offset added
    <main className="bg-[#0b1411] text-[#e6f2ee] overflow-hidden pt-20">

      {/* HERO */}
      <section className="relative min-h-[65vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000"
          alt="Tennis coach observing training"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b
          from-[#0b1411]/90 via-[#0b1411]/65 to-[#0b1411]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="block text-[11px] tracking-[0.35em] uppercase
            text-[#8fbfa9] mb-6"
          >
            Coaching Leadership
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl
            font-medium leading-tight"
          >
            Coaching built on
            <br />
            <span className="text-[#8fbfa9]">structure & discipline.</span>
          </motion.h1>
        </div>
      </section>

      {/* WHO IS A TENNIS COACH */}
      <section className="py-28 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-20
          grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium mb-8">
              What a tennis coach really does
            </h2>

            <p className="text-base md:text-lg text-[#b8cbc3]
              leading-relaxed mb-6">
              A tennis coach is not just someone who feeds balls or runs drills.
              A coach is responsible for shaping how a player learns, thinks,
              trains, and competes. From technical fundamentals to mental habits,
              the coach influences every stage of a player’s development.
            </p>

            <p className="text-base md:text-lg text-[#b8cbc3]
              leading-relaxed">
              At Sanskriti Tennis Academy, coaching goes beyond instruction.
              It involves observation, correction, planning, and long-term guidance.
              Every decision on court is connected to a bigger developmental pathway.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[260px] sm:h-[320px] md:h-[380px]
            overflow-hidden border border-[#2a3a34]
            shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
          >
            <motion.img
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.4 }}
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07c?q=80&w=1600"
              alt="Coach guiding player"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t
              from-[#0b1411]/65 via-transparent to-transparent" />
          </motion.div>

        </div>
      </section>

      {/* COACH ROLE */}
      <section className="py-28 md:py-32 bg-[#0e1714]">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl xl:text-5xl font-medium mb-14"
          >
            The coach’s role in tennis development
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              "Identifying and correcting technical fundamentals",
              "Building movement patterns and footwork efficiency",
              "Designing structured training progressions",
              "Managing workload and intensity across age groups",
              "Preparing players for match pressure and competition",
              "Developing discipline, focus, and training habits",
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="text-base md:text-lg text-[#b8cbc3]"
              >
                • {item}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* COACHING PHILOSOPHY */}
      <section className="py-28 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-20
          grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[260px] sm:h-[320px] md:h-[380px]
            overflow-hidden border border-[#2a3a34]
            shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
          >
            <motion.img
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.4 }}
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600"
              alt="Structured tennis training"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t
              from-[#0b1411]/65 via-transparent to-transparent" />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium mb-8">
              Coaching philosophy at the academy
            </h2>

            <p className="text-base md:text-lg text-[#b8cbc3]
              leading-relaxed mb-6">
              Coaching at Sanskriti Tennis Academy is built on patience and clarity.
              Players are not rushed into competition before fundamentals are stable.
              Every phase of training has a purpose and a long-term objective.
            </p>

            <p className="text-base md:text-lg text-[#b8cbc3]
              leading-relaxed">
              Progress is measured by consistency, discipline, and understanding —
              not short-term wins. This philosophy protects players from burnout
              and builds confidence that lasts.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-32 bg-[#0e1714]">
        <div className="max-w-4xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium mb-8">
            Coaching is selective by
            <span className="text-[#8fbfa9]"> intent</span>.
          </h2>

          <p className="text-base md:text-lg text-[#b8cbc3] mb-12">
            Admission into training programs is based on readiness,
            attitude, and alignment with long-term development goals.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center
            px-14 py-4 rounded-full
            bg-[#1e5f4a] hover:bg-[#184d3c]
            text-white tracking-wide
            shadow-[0_18px_40px_rgba(30,95,74,0.45)]"
          >
            Enquire About Coaching
          </Link>
        </div>
      </section>

    </main>
  );
}
