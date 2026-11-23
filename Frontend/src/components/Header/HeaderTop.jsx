// src/components/Header/HeaderTop.jsx
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Logo from "../../Assest/Logo.png";
import Swach from "../../Assest/swach.png";

const NOTICE_TEXT =
  "THIS IS A PRIVATE CONSULTANCY PORTAL FOR GST REGISTRATION. PORTAL FEES ARE CONSULTANCY CHARGES AND NOT GOVERNMENT FEES...";

export default function HeaderTop({ handleScroll }) {
  return (
    <header className="bg-white">
      {/* Top contact bar */}
      <div className="bg-navy-900 text-slate-200 text-xs sm:text-[13px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-6">
            <a
              href="mailto:info@gstindia-registration.org"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FaEnvelope className="text-orange-400 text-[13px]" />
              info@gstindia-registration.org
            </a>
            <a
              href="tel:+919211037448"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FaPhoneAlt className="text-orange-400 text-[12px]" />
              +91-9211037448
            </a>
          </div>

          <div className="flex items-center gap-5 font-medium">
            <Link
              to="#benefits"
              onClick={(e) => handleScroll(e, "#benefits")}
              className="hover:text-white transition-colors"
            >
              Benefits
            </Link>
            <Link
              to="#faq"
              onClick={(e) => handleScroll(e, "#faq")}
              className="hover:text-white transition-colors"
            >
              FAQs
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Notice ticker */}
      <div className="bg-orange-50 border-b border-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-3">
          <span className="shrink-0 rounded bg-orange-600 px-2 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">
            Notice
          </span>
          <div className="marquee-container relative flex-1 overflow-hidden">
            <div className="marquee inline-flex whitespace-nowrap text-xs sm:text-sm font-medium text-orange-900">
              <span className="mx-10">{NOTICE_TEXT}</span>
              <span className="mx-10">{NOTICE_TEXT}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo + Title + Swach */}
      <div className="border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            <Link
              to="/"
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left"
            >
              <img
                src={Logo}
                alt="GST Registration Portal"
                className="shrink-0 h-16 sm:h-20 lg:h-24 w-auto object-contain"
              />

              <div className="sm:border-l sm:border-slate-200 sm:pl-6">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight text-navy-900">
                  GST Registration Consultancy Portal
                </h1>
                <h2 className="mt-1 text-sm sm:text-base lg:text-xl font-bold leading-snug text-slate-600">
                  भारतीय जीएसटी पंजीकरण कंसल्टेंसी ऑनलाइन पोर्टल
                </h2>
                <p className="mt-1 text-[10px] sm:text-xs lg:text-sm font-semibold uppercase tracking-wider text-orange-600">
                  INDIA'S GST REGISTRATION CONSULTANCY ONLINE PORTAL
                </p>
              </div>
            </Link>

            {/* Swachh Bharat - mobile par hidden */}
            <div className="hidden md:block shrink-0">
              <img
                src={Swach}
                alt="Swachh Bharat"
                className="h-14 lg:h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}