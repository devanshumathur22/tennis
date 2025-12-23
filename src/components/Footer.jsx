import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0b1411] text-[#9fb7ad] px-8 md:px-20 pt-24 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-medium text-[#e6f2ee] mb-4">
            Sanskriti Sports Club
          </h3>
          <p className="text-sm leading-relaxed text-[#b8cbc3]">
            A high-performance tennis academy focused on structured training,
            long-term athlete development, and competitive excellence.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] mb-6 text-[#e6f2ee]">
            Explore
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-[#e6f2ee] transition">Home</Link></li>
            <li><Link to="/programs" className="hover:text-[#e6f2ee] transition">Programs</Link></li>
            <li><Link to="/tournaments" className="hover:text-[#e6f2ee] transition">Tournaments</Link></li>
            <li><Link to="/gallery" className="hover:text-[#e6f2ee] transition">Gallery</Link></li>
            <li><Link to="/coach" className="hover:text-[#e6f2ee] transition">Coach</Link></li>
            <li><Link to="/contact" className="hover:text-[#e6f2ee] transition">Contact</Link></li>
          </ul>
        </div>

        {/* PROGRAMS */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] mb-6 text-[#e6f2ee]">
            Training
          </h4>
          <ul className="space-y-3 text-sm">
            <li>Foundation Program</li>
            <li>Performance Training</li>
            <li>Elite Coaching</li>
            <li>Tournament Preparation</li>
            <li>Junior Development</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] mb-6 text-[#e6f2ee]">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li>📍 Jaipur, Rajasthan</li>
            <li>📞 +91 9XXXXXXXXX</li>
            <li>✉️ info@sanskritisportsclub.com</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-20 border-t border-white/10 pt-6 flex flex-col md:flex-row
        items-center justify-between text-xs text-[#6f8f85] gap-4">

        <p>
          © {new Date().getFullYear()} Sanskriti Sports Club. All rights reserved.
        </p>

        <div className="flex gap-6">
          <span className="hover:text-[#8fbfa9] cursor-pointer">Privacy Policy</span>
          <span className="hover:text-[#8fbfa9] cursor-pointer">Terms</span>
        </div>
      </div>
    </footer>
  );
}
