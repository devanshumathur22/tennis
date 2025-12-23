import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Programs", path: "/programs" },
  { name: "Tournaments", path: "/tournaments" },
  { name: "Gallery", path: "/gallery" },
  { name: "Coach", path: "/coach" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${
          scrolled
            ? "bg-[#0b1411]/85 backdrop-blur-md border-b border-[#1f2a26]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20
          h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-sm tracking-wide font-medium text-[#e6f2ee]"
          >
            Sanskriti Tennis Academy
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm tracking-wide transition-colors
                  ${
                    isActive
                      ? "text-[#8fbfa9]"
                      : "text-[#cbdad4] hover:text-[#e6f2ee]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-[2px]
                        bg-[#8fbfa9]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#e6f2ee]
            text-sm tracking-wide"
          >
            Menu
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0b1411]"
          >
            {/* SLIDE PANEL */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-full flex flex-col justify-between px-8 py-10"
            >
              {/* TOP */}
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.35em] uppercase
                  text-[#8fbfa9]">
                  Navigation
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-sm text-[#e6f2ee]"
                >
                  Close
                </button>
              </div>

              {/* LINKS */}
              <motion.nav
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="flex flex-col gap-8 mt-20"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="text-3xl font-medium
                      text-[#e6f2ee] hover:text-[#8fbfa9]
                      transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* FOOT */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xs tracking-wide text-[#8fbfa9]"
              >
                Elite International Tennis Academy
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
