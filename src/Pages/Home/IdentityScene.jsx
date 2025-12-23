import { motion } from "framer-motion";

export default function IdentityScene() {
  return (
    <section className="relative bg-[#0b1411] text-[#e6f2ee]">
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-28">

        {/* SECTION LABEL */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="block text-xs tracking-[0.35em] uppercase
          text-[#8fbfa9] mb-10"
        >
          The Institution
        </motion.span>

        {/* MAIN STATEMENT */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl xl:text-6xl
          font-medium leading-tight max-w-4xl"
        >
          An elite tennis academy built on
          <span className="text-[#8fbfa9]"> structure</span>,
          <span className="text-[#8fbfa9]"> discipline</span> and
          long-term player development.
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 max-w-3xl text-lg
          text-[#b8cbc3] leading-relaxed"
        >
          Sanskriti Tennis Academy is designed for players who understand
          that progress in tennis is earned over time. Our training system
          focuses on correct fundamentals, consistent practice, and real
          match exposure — preparing players for competitive tennis, not
          shortcuts.
        </motion.p>

        {/* IDENTITY STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-y-14 gap-x-10
          border-t border-[#1f2a26] pt-16"
        >
          <div>
            <p className="text-sm text-[#8fbfa9] tracking-wide">Founded</p>
            <p className="mt-3 text-2xl font-medium">2014</p>
          </div>

          <div>
            <p className="text-sm text-[#8fbfa9] tracking-wide">Location</p>
            <p className="mt-3 text-2xl font-medium">Jaipur, India</p>
          </div>

          <div>
            <p className="text-sm text-[#8fbfa9] tracking-wide">Training Model</p>
            <p className="mt-3 text-2xl font-medium">Structured Pathway</p>
          </div>

          <div>
            <p className="text-sm text-[#8fbfa9] tracking-wide">Focus</p>
            <p className="mt-3 text-2xl font-medium">Competitive Readiness</p>
          </div>
        </motion.div>

      </div>

      {/* SOFT DIVIDER */}
      <div className="absolute bottom-0 left-0 right-0 h-32
        bg-linear-to-t from-[#0b1411] to-transparent" />
    </section>
  );
}
