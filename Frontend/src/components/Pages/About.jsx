// import { FaUsers, FaCertificate, FaBuilding, FaChalkboardTeacher, FaPhoneAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
// import { Link } from "react-router-dom";

// export default function GSTAboutUsPage() {
//   return (
//     <div className="py-10 md:py-14">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
//         {/* Header */}
//         <div className="text-center mb-10 md:mb-12">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
//             About EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED
//           </h1>
//           <span className="mx-auto mb-5 block h-1 w-16 rounded-full bg-orange-500"></span>
//           <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
//             Your trusted private consultancy partner for GST Registration, Compliance, 
//             Business Certifications, Company Incorporation & Professional Training.
//           </p>
//         </div>

//         {/* Introduction Section */}
//         <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-12 mb-12 md:mb-16">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-5">
//               Simplifying GST & Business Compliance Across India
//             </h2>
//             <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
//               EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED is a professional private consultancy firm specializing in 
//               <strong> GST Registration and Compliance Services</strong>, along with 
//               company incorporation, various business certifications, and practical training programs.
//             </p>
//             <p className="text-base md:text-lg text-slate-600 leading-relaxed">
//               We help startups, small businesses, and established enterprises navigate the complexities 
//               of GST law with ease. From new registration and scheme selection to filing, modification, 
//               and cancellation — our expert team provides complete end-to-end support.
//             </p>
//           </div>
//         </div>

//         {/* Our Services Grid */}
//         <div className="mb-12 md:mb-16">
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-navy-900 mb-8 md:mb-10">
//             What We Offer
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            
//             {/* GST Services */}
//             <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 text-center">
//               <div className="flex items-center justify-center w-14 h-14 bg-navy-50 text-navy-700 rounded-xl ring-1 ring-navy-100 mb-5 mx-auto">
//                 <FaUsers size={26} />
//               </div>
//               <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">GST Services</h3>
//               <p className="text-slate-600 text-sm md:text-base leading-relaxed">
//                 New GST Registration, Composition Scheme, Regular Scheme, 
//                 Modification, Cancellation, Return Filing, and complete GST compliance support.
//               </p>
//             </div>

//             {/* Certifications */}
//             <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 text-center">
//               <div className="flex items-center justify-center w-14 h-14 bg-navy-50 text-navy-700 rounded-xl ring-1 ring-navy-100 mb-5 mx-auto">
//                 <FaCertificate size={26} />
//               </div>
//               <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">Certifications</h3>
//               <p className="text-slate-600 text-sm md:text-base leading-relaxed">
//                 Assistance with ISO, GST-related certifications, and other regulatory approvals 
//                 to strengthen your business credibility.
//               </p>
//             </div>

//             {/* Company Incorporation */}
//             <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 text-center">
//               <div className="flex items-center justify-center w-14 h-14 bg-navy-50 text-navy-700 rounded-xl ring-1 ring-navy-100 mb-5 mx-auto">
//                 <FaBuilding size={26} />
//               </div>
//               <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">Company Incorporation</h3>
//               <p className="text-slate-600 text-sm md:text-base leading-relaxed">
//                 Hassle-free registration of Private Limited Company, LLP, One Person Company (OPC), 
//                 and other business structures with full documentation support.
//               </p>
//             </div>

//             {/* Training Programs */}
//             <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 text-center">
//               <div className="flex items-center justify-center w-14 h-14 bg-navy-50 text-navy-700 rounded-xl ring-1 ring-navy-100 mb-5 mx-auto">
//                 <FaChalkboardTeacher size={26} />
//               </div>
//               <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">Training & Webinars</h3>
//               <p className="text-slate-600 text-sm md:text-base leading-relaxed">
//                 Practical GST training, compliance workshops, Import-Export sessions, 
//                 and business skill development programs through live webinars and offline classes.
//               </p>
//             </div>

//           </div>
//         </div>

//         {/* Why Choose Us */}
//         <div className="bg-navy-900 text-white rounded-2xl p-8 md:p-12 mb-12 md:mb-16">
//           <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Businesses Choose EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED</h2>
//               <ul className="space-y-5 text-base md:text-lg">
//                 <li className="flex gap-4">
//                   <FaCheckCircle className="mt-1 shrink-0 text-xl text-orange-400" aria-hidden="true" />
//                   <div>
//                     <strong>Expert Team:</strong> Experienced professionals who stay updated with latest GST rules and notifications.
//                   </div>
//                 </li>
//                 <li className="flex gap-4">
//                   <FaCheckCircle className="mt-1 shrink-0 text-xl text-orange-400" aria-hidden="true" />
//                   <div>
//                     <strong>End-to-End Support:</strong> From registration to ongoing compliance and return filing.
//                   </div>
//                 </li>
//                 <li className="flex gap-4">
//                   <FaCheckCircle className="mt-1 shrink-0 text-xl text-orange-400" aria-hidden="true" />
//                   <div>
//                     <strong>Flexible Training:</strong> Learn GST and business skills through convenient online webinars or offline sessions.
//                   </div>
//                 </li>
//                 <li className="flex gap-4">
//                   <FaCheckCircle className="mt-1 shrink-0 text-xl text-orange-400" aria-hidden="true" />
//                   <div>
//                     <strong>Pan-India Service:</strong> Supporting businesses across every state in India.
//                   </div>
//                 </li>
//               </ul>
//             </div>
            
//             <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 md:p-8 text-center">
//               <p className="italic text-lg md:text-xl leading-relaxed text-slate-100">
//                 "We simplify GST complexities so you can focus on growing your business with confidence and peace of mind."
//               </p>
//               <p className="mt-5 text-orange-300 font-medium">— Team EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED</p>
//             </div>
//           </div>
//         </div>

//         {/* Contact Teaser */}
//         <div className="text-center mb-12">
//           <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-5">Ready to Get Started?</h2>
//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center max-w-xl mx-auto mb-8">
//             <div className="flex items-center gap-3 text-slate-700">
//               <FaPhoneAlt className="text-orange-600" />
//               <span className="font-medium">+91 9211037448</span>
//             </div>
//             <div className="flex items-center gap-3 text-slate-700">
//               <FaEnvelope className="text-orange-600" />
//               <span className="font-medium break-all">info@gstindia-registration.org</span>
//             </div>
//           </div>
          
//           <Link 
//             to="/contact"
//             className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-sm shadow-orange-600/30 transition-all duration-200 hover:-translate-y-0.5 text-base md:text-lg"
//           >
//             Visit Our GST Contact Page
//           </Link>
//         </div>

//         {/* Disclaimer */}
//         <div className="text-center text-sm text-slate-500 max-w-2xl mx-auto">
//           <p>
//             EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED is a <strong>private consultancy firm</strong> providing professional assistance 
//             for GST registration, compliance, certifications, company incorporation, and training programs. 
//             We are not affiliated with the Government of India or any GST portal. All services are consultancy-based.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }


// src/components/Pages/About.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaCertificate,
  FaBuilding,
  FaChalkboardTeacher,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaShieldAlt,
  FaHandshake,
  FaQuoteLeft,
  FaInfoCircle,
  FaArrowRight,
  FaMapMarkedAlt,
  FaFileInvoiceDollar,
  FaFileSignature,
  FaBalanceScale,
  FaFileInvoice,
  FaSyncAlt,
} from "react-icons/fa";

const COMPANY = "EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED";

/* ---------- Scroll reveal (halka fade-up animation) ---------- */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Section heading ---------- */
function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-10 md:mb-12">
      <span className="inline-block rounded-full bg-navy-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-navy-700 ring-1 ring-navy-100">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-2xl md:text-4xl font-extrabold tracking-tight text-navy-900">
        {title}
      </h2>
      <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------- Data ---------- */
const stats = [
  { icon: FaFileInvoiceDollar, value: "6+", label: "GST Services" },
  { icon: FaHandshake, value: "End-to-End", label: "Support" },
  { icon: FaChalkboardTeacher, value: "Online & Offline", label: "Training" },
  { icon: FaMapMarkedAlt, value: "Pan-India", label: "Service" },
];

const gstServices = [
  "New GST Registration",
  "Composition Scheme",
  "Regular Scheme",
  "Modification",
  "Cancellation",
  "Return Filing",
];

const services = [
  {
    icon: FaUsers,
    title: "GST Services",
    desc: "New GST Registration, Composition Scheme, Regular Scheme, Modification, Cancellation, Return Filing, and complete GST compliance support.",
    points: ["New GST Registration", "Composition & Regular Scheme", "Modification & Cancellation", "Return Filing"],
  },
  {
    icon: FaCertificate,
    title: "Certifications",
    desc: "Assistance with ISO, GST-related certifications, and other regulatory approvals to strengthen your business credibility.",
    points: ["ISO", "GST-related certifications", "Other regulatory approvals"],
  },
  {
    icon: FaBuilding,
    title: "Company Incorporation",
    desc: "Hassle-free registration of Private Limited Company, LLP, One Person Company (OPC), and other business structures with full documentation support.",
    points: ["Private Limited Company", "LLP", "One Person Company (OPC)", "Other business structures"],
  },
  {
    icon: FaChalkboardTeacher,
    title: "Training & Webinars",
    desc: "Practical GST training, compliance workshops, Import-Export sessions, and business skill development programs through live webinars and offline classes.",
    points: ["Practical GST training", "Compliance workshops", "Import-Export sessions", "Business skill development"],
  },
];

const journey = [
  { icon: FaFileSignature, title: "New Registration", desc: "We handle your GST registration from documentation to application." },
  { icon: FaBalanceScale, title: "Scheme Selection", desc: "Choose between the Composition Scheme and the Regular Scheme with expert guidance." },
  { icon: FaFileInvoice, title: "Filing & Compliance", desc: "Return filing and ongoing GST compliance, taken care of." },
  { icon: FaSyncAlt, title: "Modification & Cancellation", desc: "Support whenever your GST details change or you need to cancel." },
];

const whyPoints = [
  { icon: FaUsers, title: "Expert Team", text: "Experienced professionals who stay updated with latest GST rules and notifications." },
  { icon: FaShieldAlt, title: "End-to-End Support", text: "From registration to ongoing compliance and return filing." },
  { icon: FaChalkboardTeacher, title: "Flexible Training", text: "Learn GST and business skills through convenient online webinars or offline sessions." },
  { icon: FaMapMarkedAlt, title: "Pan-India Service", text: "Supporting businesses across every state in India." },
];

export default function GSTAboutUsPage() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300"></div>

        {/* decoration */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-navy-400/25 blur-3xl"></div>
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        ></div>

        <div className="relative container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-14 pb-24 md:pt-20 md:pb-32 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold ring-1 ring-white/20 backdrop-blur-sm">
            <FaShieldAlt className="text-orange-400" aria-hidden="true" />
            Private Consultancy • Pan-India Service
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
              {COMPANY}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-slate-200 leading-relaxed">
            Your trusted private consultancy partner for GST Registration, Compliance, Business
            Certifications, Company Incorporation &amp; Professional Training.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-900/30 transition-all duration-200 hover:bg-orange-700 hover:-translate-y-0.5"
            >
              Contact Us <FaArrowRight className="text-sm" aria-hidden="true" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-7 py-3.5 font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ================= STATS ================= */}
        <Reveal className="relative z-10 -mt-12 md:-mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 text-center shadow-lg shadow-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-navy-100">
                  <s.icon size={20} aria-hidden="true" />
                </div>
                <p className="text-lg sm:text-2xl font-extrabold text-navy-900">{s.value}</p>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ================= WHO WE ARE ================= */}
        <section className="py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10 items-stretch">
            <Reveal className="lg:col-span-3">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
                <span className="inline-block rounded-full bg-navy-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-navy-700 ring-1 ring-navy-100">
                  Who We Are
                </span>
                <h2 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900">
                  Simplifying GST &amp; Business Compliance Across India
                </h2>
                <span className="mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>

                <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600">
                  <strong className="text-navy-900">{COMPANY}</strong> is a professional private
                  consultancy firm specializing in{" "}
                  <strong className="text-navy-900">GST Registration and Compliance Services</strong>,
                  along with company incorporation, various business certifications, and practical
                  training programs.
                </p>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
                  We help startups, small businesses, and established enterprises navigate the
                  complexities of GST law with ease. From new registration and scheme selection to
                  filing, modification, and cancellation — our expert team provides complete
                  end-to-end support.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-2" delay={120}>
              <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-6 md:p-8 text-white shadow-lg">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/20 blur-2xl"></div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                    <FaFileInvoiceDollar size={22} className="text-orange-400" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl md:text-2xl font-bold">GST Services We Handle</h3>
                  <p className="mt-2 text-sm md:text-base text-slate-300">
                    Complete GST compliance support, from start to finish.
                  </p>

                  <ul className="mt-6 space-y-3 text-sm md:text-base">
                    {gstServices.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <FaCheckCircle className="shrink-0 text-orange-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= WHAT WE OFFER ================= */}
        <section id="services" className="scroll-mt-24 pb-14 md:pb-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="What We Offer"
              subtitle="GST, certifications, incorporation and training — everything your business needs."
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-xl">
                  <div className="h-1.5 bg-gradient-to-r from-navy-800 to-orange-500"></div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-navy-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-navy-900 group-hover:text-white">
                      <s.icon size={26} aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg md:text-xl font-bold text-navy-900">{s.title}</h3>
                    <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-600">{s.desc}</p>

                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm text-slate-700">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5">
                          <FaCheckCircle className="mt-0.5 shrink-0 text-orange-500" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ================= JOURNEY ================= */}
        <section className="pb-14 md:pb-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="Your GST Journey With Us"
              subtitle="From new registration and scheme selection to filing, modification and cancellation."
            />
          </Reveal>

          <div className="relative">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-0.5 bg-gradient-to-r from-navy-200 via-orange-300 to-navy-200 lg:block"></div>

            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {journey.map((s, i) => (
                <Reveal key={s.title} delay={i * 100}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative mx-auto mb-5 w-fit">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-navy-900 text-white shadow-md ring-4 ring-navy-100">
                        <s.icon size={30} aria-hidden="true" />
                      </div>
                      <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white shadow ring-2 ring-white">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                    <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-600">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="pb-14 md:pb-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-6 sm:p-8 md:p-12 text-white shadow-xl">
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-navy-400/20 blur-3xl"></div>
              <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl"></div>

              <div className="relative">
                <div className="mb-8 md:mb-10 text-center">
                  <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest ring-1 ring-white/20">
                    Why Choose Us
                  </span>
                  <h2 className="mt-4 text-2xl md:text-4xl font-extrabold tracking-tight">
                    Why Businesses Choose Us
                  </h2>
                  <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
                </div>

                <div className="grid gap-8 lg:grid-cols-5 lg:gap-10 items-stretch">
                  <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
                    {whyPoints.map((w) => (
                      <div
                        key={w.title}
                        className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-orange-400">
                          <w.icon size={20} aria-hidden="true" />
                        </div>
                        <h3 className="mt-4 text-lg font-bold">{w.title}</h3>
                        <p className="mt-1.5 text-sm md:text-base leading-relaxed text-slate-300">{w.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-center rounded-2xl bg-white/5 p-6 md:p-8 ring-1 ring-white/10 backdrop-blur-sm lg:col-span-2">
                    <FaQuoteLeft className="text-3xl text-orange-400" aria-hidden="true" />
                    <p className="mt-4 text-lg md:text-xl italic leading-relaxed text-slate-100">
                      We simplify GST complexities so you can focus on growing your business with
                      confidence and peace of mind.
                    </p>
                    <p className="mt-5 text-sm font-semibold text-orange-300">— Team {COMPANY}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ================= CONTACT CTA ================= */}
        <section className="pb-14 md:pb-20">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <div className="h-1.5 bg-gradient-to-r from-navy-900 via-navy-700 to-orange-500"></div>
              <div className="p-6 sm:p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-navy-900">
                  Ready to Get Started?
                </h2>
                <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
                <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-slate-600">
                  Talk to our team about GST registration, filing or compliance — we're happy to help.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
                  <a
                    href="tel:+919211037448"
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-md"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-navy-100 transition-transform duration-300 group-hover:scale-110">
                      <FaPhoneAlt aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Call Us</span>
                    <span className="font-semibold text-navy-900">+91 9211037448</span>
                  </a>

                  <a
                    href="mailto:info@gstindia-registration.org"
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-md"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-navy-100 transition-transform duration-300 group-hover:scale-110">
                      <FaEnvelope aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email Us</span>
                    <span className="break-all font-semibold text-navy-900">info@gstindia-registration.org</span>
                  </a>
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-8 py-3.5 text-base md:text-lg font-semibold text-white shadow-sm shadow-orange-600/30 transition-all duration-200 hover:bg-orange-700 hover:-translate-y-0.5"
                >
                  Visit Our GST Contact Page <FaArrowRight className="text-sm" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ================= DISCLAIMER ================= */}
        <section className="pb-14 md:pb-20">
          <Reveal>
            <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-2xl border border-orange-100 bg-orange-50 p-5 md:p-6">
              <FaInfoCircle className="mt-1 shrink-0 text-xl text-orange-600" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-slate-600">
                <strong className="text-navy-900">{COMPANY}</strong> is a{" "}
                <strong className="text-navy-900">private consultancy firm</strong> providing
                professional assistance for GST registration, compliance, certifications, company
                incorporation, and training programs. We are not affiliated with the Government of
                India or any GST portal. All services are consultancy-based.
              </p>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}