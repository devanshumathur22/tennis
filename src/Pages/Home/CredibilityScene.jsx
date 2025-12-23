import { motion } from "framer-motion";

export default function CredibilityScene() {
  return (
    <section className="relative bg-[#0e1714] text-[#e6f2ee]">
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-36">

        {/* SECTION LABEL */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="block text-xs tracking-[0.35em] uppercase
          text-[#8fbfa9] mb-12"
        >
          Credibility & Trust
        </motion.span>

        {/* MAIN STATEMENT */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl xl:text-6xl
          font-medium leading-tight max-w-5xl"
        >
          Built on consistency,
          <br />
          not quick promises.
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 max-w-3xl text-lg
          text-[#b8cbc3] leading-relaxed"
        >
          Since its establishment, Sanskriti Tennis Academy has focused on
          disciplined coaching, structured progression, and realistic
          competitive preparation. We believe trust is earned through
          consistent training standards and long-term player development.
        </motion.p>

        {/* CREDIBILITY GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-20"
        >
          <div>
            <p className="text-sm tracking-wide text-[#8fbfa9]">
              Established
            </p>
            <p className="mt-4 text-3xl font-medium">
              2014
            </p>
            <p className="mt-4 text-[#b8cbc3]">
              A decade of structured tennis training.
            </p>
          </div>

          <div>
            <p className="text-sm tracking-wide text-[#8fbfa9]">
              Training Focus
            </p>
            <p className="mt-4 text-3xl font-medium">
              Long-Term Development
            </p>
            <p className="mt-4 text-[#b8cbc3]">
              Technique, discipline, and match intelligence.
            </p>
          </div>

          <div>
            <p className="text-sm tracking-wide text-[#8fbfa9]">
              Environment
            </p>
            <p className="mt-4 text-3xl font-medium">
              Purpose-Built
            </p>
            <p className="mt-4 text-[#b8cbc3]">
              Courts and systems designed for focused training.
            </p>
          </div>
        </motion.div>

      </div>

      {/* DIVIDER */}
      <div className="absolute bottom-0 left-0 right-0 h-28
        bg-gradient-to-t from-[#0e1714] to-transparent" />
    </section>
  );
}
