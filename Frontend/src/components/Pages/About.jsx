import { FaUsers, FaCertificate, FaBuilding, FaChalkboardTeacher, FaPhoneAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function GSTAboutUsPage() {
  return (
    <div className="py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            About EASQUES
          </h1>
          <span className="mx-auto mb-5 block h-1 w-16 rounded-full bg-orange-500"></span>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Your trusted private consultancy partner for GST Registration, Compliance, 
            Business Certifications, Company Incorporation & Professional Training.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-12 mb-12 md:mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-5">
              Simplifying GST & Business Compliance Across India
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
              EASQUES is a professional private consultancy firm specializing in 
              <strong> GST Registration and Compliance Services</strong>, along with 
              company incorporation, various business certifications, and practical training programs.
            </p>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              We help startups, small businesses, and established enterprises navigate the complexities 
              of GST law with ease. From new registration and scheme selection to filing, modification, 
              and cancellation — our expert team provides complete end-to-end support.
            </p>
          </div>
        </div>

        {/* Our Services Grid */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy-900 mb-8 md:mb-10">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            
            {/* GST Services */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 text-center">
              <div className="flex items-center justify-center w-14 h-14 bg-navy-50 text-navy-700 rounded-xl ring-1 ring-navy-100 mb-5 mx-auto">
                <FaUsers size={26} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">GST Services</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                New GST Registration, Composition Scheme, Regular Scheme, 
                Modification, Cancellation, Return Filing, and complete GST compliance support.
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 text-center">
              <div className="flex items-center justify-center w-14 h-14 bg-navy-50 text-navy-700 rounded-xl ring-1 ring-navy-100 mb-5 mx-auto">
                <FaCertificate size={26} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">Certifications</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Assistance with ISO, GST-related certifications, and other regulatory approvals 
                to strengthen your business credibility.
              </p>
            </div>

            {/* Company Incorporation */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 text-center">
              <div className="flex items-center justify-center w-14 h-14 bg-navy-50 text-navy-700 rounded-xl ring-1 ring-navy-100 mb-5 mx-auto">
                <FaBuilding size={26} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">Company Incorporation</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Hassle-free registration of Private Limited Company, LLP, One Person Company (OPC), 
                and other business structures with full documentation support.
              </p>
            </div>

            {/* Training Programs */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 text-center">
              <div className="flex items-center justify-center w-14 h-14 bg-navy-50 text-navy-700 rounded-xl ring-1 ring-navy-100 mb-5 mx-auto">
                <FaChalkboardTeacher size={26} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">Training & Webinars</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Practical GST training, compliance workshops, Import-Export sessions, 
                and business skill development programs through live webinars and offline classes.
              </p>
            </div>

          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 md:p-12 mb-12 md:mb-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Businesses Choose EASQUES</h2>
              <ul className="space-y-5 text-base md:text-lg">
                <li className="flex gap-4">
                  <FaCheckCircle className="mt-1 shrink-0 text-xl text-orange-400" aria-hidden="true" />
                  <div>
                    <strong>Expert Team:</strong> Experienced professionals who stay updated with latest GST rules and notifications.
                  </div>
                </li>
                <li className="flex gap-4">
                  <FaCheckCircle className="mt-1 shrink-0 text-xl text-orange-400" aria-hidden="true" />
                  <div>
                    <strong>End-to-End Support:</strong> From registration to ongoing compliance and return filing.
                  </div>
                </li>
                <li className="flex gap-4">
                  <FaCheckCircle className="mt-1 shrink-0 text-xl text-orange-400" aria-hidden="true" />
                  <div>
                    <strong>Flexible Training:</strong> Learn GST and business skills through convenient online webinars or offline sessions.
                  </div>
                </li>
                <li className="flex gap-4">
                  <FaCheckCircle className="mt-1 shrink-0 text-xl text-orange-400" aria-hidden="true" />
                  <div>
                    <strong>Pan-India Service:</strong> Supporting businesses across every state in India.
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 md:p-8 text-center">
              <p className="italic text-lg md:text-xl leading-relaxed text-slate-100">
                "We simplify GST complexities so you can focus on growing your business with confidence and peace of mind."
              </p>
              <p className="mt-5 text-orange-300 font-medium">— Team EASQUES</p>
            </div>
          </div>
        </div>

        {/* Contact Teaser */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-5">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center max-w-xl mx-auto mb-8">
            <div className="flex items-center gap-3 text-slate-700">
              <FaPhoneAlt className="text-orange-600" />
              <span className="font-medium">+91 9211037448</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <FaEnvelope className="text-orange-600" />
              <span className="font-medium break-all">info@gstindia-registration.org</span>
            </div>
          </div>
          
          <Link 
            to="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-sm shadow-orange-600/30 transition-all duration-200 hover:-translate-y-0.5 text-base md:text-lg"
          >
            Visit Our GST Contact Page
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-slate-500 max-w-2xl mx-auto">
          <p>
            EASQUES is a <strong>private consultancy firm</strong> providing professional assistance 
            for GST registration, compliance, certifications, company incorporation, and training programs. 
            We are not affiliated with the Government of India or any GST portal. All services are consultancy-based.
          </p>
        </div>

      </div>
    </div>
  );
}