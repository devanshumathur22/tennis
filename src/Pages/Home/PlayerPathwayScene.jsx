import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import img1 from "../assets/image/4.jpg";
import img2 from "../assets/image/5.jpg";
import img3 from "../assets/image/7.jpg";
import img4 from "../assets/image/8.jpg";

export default function PlayerPathwayScene() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // slower, controlled horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  const stages = [
    {
      title: "Foundation",
      desc: "Movement patterns, balance, and technically correct stroke formation. This stage establishes habits that last a career.",
      image: img1,
    },
    {
      title: "Consistency",
      desc: "Sustaining rallies under fatigue while developing focus, discipline, and reliable shot tolerance.",
      image: img2,
    },
    {
      title: "Match Intelligence",
      desc: "Decision-making, shot selection, and understanding patterns rather than reacting emotionally.",
      image: img3,
    },
    {
      title: "Competition",
      desc: "Handling pressure environments, preparation routines, and performance accountability.",
      image: img4,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-[260vh] bg-[#0b1411]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full w-[300vw]"
        >
          {stages.map((stage, i) => (
            <div
              key={i}
              className="relative w-screen h-full shrink-0
              bg-[#0e1714]"
            >
              {/* IMAGE — restrained, not dominant */}
              <motion.img
                src={stage.image}
                alt={stage.title}
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute right-0 top-0 h-full w-[55%]
                object-cover opacity-70"
              />

              {/* GRADIENT CONTROL */}
              <div className="absolute inset-0 bg-linear-to-r
                from-[#0b1411] via-[#0b1411]/85 to-transparent" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-5xl mx-auto px-6 md:px-20">
                  <span className="block text-xs tracking-[0.35em] uppercase
                    text-[#8fbfa9] mb-6">
                    Player Development Pathway
                  </span>

                  <h2 className="text-3xl md:text-5xl xl:text-6xl
                    font-medium mb-8 text-[#e6f2ee]">
                    {stage.title}
                  </h2>

                  <p className="max-w-xl text-base md:text-lg
                    leading-relaxed text-[#b8cbc3]">
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
