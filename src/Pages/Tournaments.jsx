import { motion } from "framer-motion";
import { useEffect } from "react";
import img26 from "./assets/image/26.jpg";
import img27 from "./assets/image/27.jpg";
import img28 from "./assets/image/28.jpg";
import img29 from "./assets/image/29.jpg";

export default function Tournaments() {

  // ✅ FIX 1: Always scroll to top on page open
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tournaments = [
    {
      title: "Inter-Academy Development Tournament",
      date: "12 – 14 January 2025",
      location: "Jaipur, Rajasthan",
      category: "Under 12 & Under 14",
      level: "Development Level",
      image: img26,
      description:
        "A structured development tournament designed to introduce young players to official match formats in a controlled and supportive competitive environment.",
    },
    {
      title: "District Ranking Tournament",
      date: "5 – 7 February 2025",
      location: "Jaipur District Tennis Complex",
      category: "Under 16 & Under 18",
      level: "Competitive",
      image: img27,
      description:
        "Official district-level competition where players compete under ranking conditions, preparing them for higher-level tournaments.",
    },
    {
      title: "Seasonal Match Play Camp",
      date: "20 – 25 March 2025",
      location: "Sanskriti Tennis Academy",
      category: "All Training Groups",
      level: "Internal Match Play",
      image: img28,
      description:
        "An intensive match-play camp simulating tournament pressure with daily matches, recovery protocols, and coach-led feedback sessions.",
    },
  ];

  const whatsappNumber = "919999999999";
  const whatsappMessage = (title) =>
    `https://wa.me/${whatsappNumber}?text=Hello,%20I%20would%20like%20to%20register%20for%20the%20${encodeURIComponent(
      title
    )}.`;

  return (
    // ✅ FIX 2: Navbar offset (h-20 = pt-20)
    <main className="bg-[#0b1411] text-[#e6f2ee] pt-20">

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4 }}
          src={img29}
          alt="Tournament tennis"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b
          from-[#0b1411]/85 via-[#0b1411]/60 to-[#0b1411]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          <span className="block text-[11px] tracking-[0.35em] uppercase
            text-[#8fbfa9] mb-6">
            Tournaments & Match Exposure
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-medium">
            Competitive tennis
            <br />
            <span className="text-[#8fbfa9]">with structure & clarity.</span>
          </h1>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-20 space-y-24">
          {tournaments.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center
              border-b border-[#1f2a26] pb-20"
            >
              {/* IMAGE */}
              <div className="relative h-65 sm:h-80 md:h-96 lg:h-80
                overflow-hidden border border-[#2a3a34]
                shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
                <motion.img
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.4 }}
                  src={t.image}
                  alt={t.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t
                  from-[#0b1411]/70 via-transparent to-transparent" />
              </div>

              {/* CONTENT */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
                  {t.title}
                </h2>

                <div className="space-y-2 text-sm md:text-base text-[#b8cbc3] mb-6">
                  <p><span className="text-[#8fbfa9]">Date:</span> {t.date}</p>
                  <p><span className="text-[#8fbfa9]">Location:</span> {t.location}</p>
                  <p><span className="text-[#8fbfa9]">Category:</span> {t.category}</p>
                  <p><span className="text-[#8fbfa9]">Level:</span> {t.level}</p>
                </div>

                <p className="text-base md:text-lg text-[#b8cbc3] leading-relaxed mb-8">
                  {t.description}
                </p>

                <a
                  href={whatsappMessage(t.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center
                  px-10 py-4 rounded-full
                  bg-[#1e5f4a] hover:bg-[#184d3c]
                  text-white shadow-[0_18px_40px_rgba(30,95,74,0.45)]"
                >
                  Register via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
