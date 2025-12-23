import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND / ABOUT */}
        <div>
          <h3 className="text-2xl font-semibold text-white">
            TENNIS<span className="text-green-500">PRO</span>
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            TennisPro is a dedicated tennis sports club focused on
            structured training, match exposure and long-term player development.
            We train beginners, competitive players and juniors with equal discipline.
          </p>

          <p className="mt-4 text-sm text-gray-400">
            This is not casual coaching.  
            This is performance-driven tennis training.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/programs" className="hover:text-green-400 transition">
                Training Programs
              </Link>
            </li>
            <li>
              <Link to="/tournaments" className="hover:text-green-400 transition">
                Tournaments
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-green-400 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/coach" className="hover:text-green-400 transition">
                Our Coach
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-400 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* TRAINING INFO */}
        <div>
          <h4 className="text-white font-semibold mb-5">Training Details</h4>

          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <Clock size={16} className="text-green-400 mt-1" />
              <div>
                <p>Morning: 6:00 AM – 9:00 AM</p>
                <p>Evening: 4:30 PM – 8:30 PM</p>
              </div>
            </li>

            <li className="flex gap-3">
              <MapPin size={16} className="text-green-400 mt-1" />
              <p>Practice Courts, City Sports Complex</p>
            </li>

            <li className="flex gap-3">
              <Phone size={16} className="text-green-400 mt-1" />
              <p>+91 9XXXXXXXXX</p>
            </li>

            <li className="flex gap-3">
              <Mail size={16} className="text-green-400 mt-1" />
              <p>tennispro@email.com</p>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-white font-semibold mb-5">
            Ready to Train?
          </h4>

          <p className="text-sm text-gray-400 mb-6">
            Join structured tennis training designed for real improvement,
            discipline and match confidence.
          </p>

          <a
            href="https://wa.me/919XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700
            text-white px-7 py-4 rounded-full text-sm font-medium transition"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} TennisPro Sports Club.  
        All rights reserved.
      </div>
    </footer>
  );
}
