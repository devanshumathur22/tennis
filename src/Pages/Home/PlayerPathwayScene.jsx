import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PlayerPathwayScene() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // clamp so it never overshoots
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-300%"],
    { clamp: true }
  );

  const stages = [
    {
      title: "Foundation",
      desc: "Movement, balance, and clean stroke mechanics.",
      image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg",
    },
    {
      title: "Consistency",
      desc: "Sustaining rallies and mental discipline.",
      image: "https://images.pexels.com/photos/8224/pexels-photo.jpg",
    },
    {
      title: "Match Intelligence",
      desc: "Shot selection and tactical awareness.",
      image: "https://images.pexels.com/photos/1432035/pexels-photo-1432035.jpeg",
    },
    {
      title: "Competition",
      desc: "Tournament pressure and performance mindset.",
      image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-[#0b1411]"
    >
      {/* STICKY */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full w-[400vw]"
        >
          {stages.map((stage, i) => (
            <div
              key={i}
              className="relative w-screen h-full flex-shrink-0 bg-[#0f1b17]"
            >
              {/* IMAGE */}
              <img
                src={stage.image}
                alt={stage.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r
                from-[#0b1411]/40 via-[#0b1411]/20 to-[#0b1411]/40" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-6xl mx-auto px-6 md:px-20">
                  <span className="block text-xs tracking-[0.35em] uppercase
                    text-[#8fbfa9] mb-4">
                    Development Stage
                  </span>

                  <h2 className="text-3xl md:text-6xl xl:text-7xl
                    font-medium mb-6 text-[#e6f2ee]">
                    {stage.title}
                  </h2>

                  <p className="max-w-xl text-base md:text-xl
                    text-[#d2e2db]">
                    {stage.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
