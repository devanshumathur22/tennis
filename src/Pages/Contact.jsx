import { motion } from "framer-motion";
import { useEffect } from "react";
import img41 from "./assets/image/41.jpg";
import img42 from "./assets/image/42.jpg";


export default function Contact() {

  // ✅ scroll reset on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // ✅ navbar offset added
    <main className="bg-[#0b1411] text-[#e6f2ee] overflow-hidden pt-20">

      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          src={img41}
          alt="Tennis academy contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b
          from-[#0b1411]/90 via-[#0b1411]/65 to-[#0b1411]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="block text-[11px] tracking-[0.35em] uppercase
            text-[#8fbfa9] mb-6"
          >
            Contact & Admissions
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl
            font-medium leading-tight"
          >
            Enquiries and
            <br />
            <span className="text-[#8fbfa9]">admissions.</span>
          </motion.h1>
        </div>
      </section>

      {/* INTRO */}
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
              How to get started
            </h2>

            <p className="text-base md:text-lg text-[#b8cbc3]
              leading-relaxed mb-6">
              Enquiries at Sanskriti Tennis Academy are handled with care and clarity.
              We encourage parents and players to reach out for detailed discussions
              regarding training programs, development pathways, and suitability.
            </p>

            <p className="text-base md:text-lg text-[#b8cbc3]
              leading-relaxed">
              Admissions are not automatic. Players are evaluated based on readiness,
              attitude, and long-term commitment to structured training.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-65 sm:h-80 md:h-96
            overflow-hidden border border-[#2a3a34]
            shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
          >
            <motion.img
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.4 }}
              src={img42}
              alt="Academy interaction"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t
              from-[#0b1411]/65 via-transparent to-transparent" />
          </motion.div>

        </div>
      </section>

      {/* ADMISSIONS PROCESS */}
      <section className="py-28 md:py-32 bg-[#0e1714]">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl xl:text-5xl font-medium mb-14"
          >
            Admissions process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              "Initial enquiry via phone, WhatsApp, or email",
              "Discussion regarding player background and goals",
              "On-court observation or assessment (if required)",
              "Program recommendation based on readiness",
              "Confirmation of training schedule and enrollment",
            ].map((step, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-base md:text-lg text-[#b8cbc3]"
              >
                • {step}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="py-28 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">
            Contact information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#b8cbc3]">
            <div>
              <p className="text-sm uppercase tracking-widest text-[#8fbfa9] mb-2">
                Location
              </p>
              <p>Jaipur, Rajasthan, India</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-[#8fbfa9] mb-2">
                Phone / WhatsApp
              </p>
              <p>+91 XXXXX XXXXX</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-[#8fbfa9] mb-2">
                Email
              </p>
              <p>info@sanskrititennisacademy.com</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-[#8fbfa9] mb-2">
                Training Hours
              </p>
              <p>Morning & Evening Sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-32 bg-[#0e1714] text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium mb-8">
            Begin with a
            <span className="text-[#8fbfa9]"> conversation</span>.
          </h2>

          <p className="text-base md:text-lg text-[#b8cbc3] mb-12">
            The right training environment starts with the right guidance.
            Reach out to discuss programs, expectations, and next steps.
          </p>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center
            px-14 py-4 rounded-full
            bg-[#1e5f4a] hover:bg-[#184d3c]
            text-white tracking-wide
            shadow-[0_18px_40px_rgba(30,95,74,0.45)]"
          >
            Contact via WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
