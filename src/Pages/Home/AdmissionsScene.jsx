import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AdmissionsScene() {
  return (
    <section className="relative bg-[#0b1411] text-[#e6f2ee]">
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-40">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span
            className="block text-xs tracking-[0.35em] uppercase
            text-[#8fbfa9] mb-10"
          >
            Admissions
          </span>

          <h2 className="text-4xl md:text-5xl xl:text-6xl
            font-medium leading-tight mb-10"
          >
            Training here requires
            <br />
            <span className="text-[#8fbfa9]">
              commitment.
            </span>
          </h2>

          <p className="text-lg text-[#b8cbc3] leading-relaxed mb-14">
            Sanskriti Tennis Academy works with players who are prepared
            to commit time, effort, and focus to long-term development.
            Admission is based on readiness, attitude, and alignment
            with our training philosophy.
          </p>

          <div className="flex flex-col sm:flex-row gap-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center
              px-16 py-4 rounded-full
              bg-[#1e5f4a] hover:bg-[#184d3c]
              text-white tracking-wide
              transition-colors duration-300
              shadow-[0_18px_40px_rgba(30,95,74,0.45)]"
            >
              Request Training Information
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center
              px-16 py-4 rounded-full
              border border-[#8fbfa9]
              text-[#8fbfa9]
              hover:bg-[#8fbfa9]/10
              transition-colors duration-300"
            >
              Visit the Academy
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
