

// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowUp, FaInfoCircle } from 'react-icons/fa';

import TopBar from './components/Header/HeaderTop';
import Navbar from './components/Header/Navbar';
import FssaiRegistrationForm from './components/Form/RegistrationForm'; 
import InstructionsSidebar from './components/Form/InstructionsSidebar';
import ProcedureSection from './components/Sections/ProcedureSection';
import BenefitsSection from './components/Sections/BenefitsSection';
import FaqSection from './components/Sections/FaqSection';
import MainFooter from './components/Footer/MainFooter';
import FssaiPaymentSummary from './components/Payment/PaymentSummary';
import DisclaimerPage from './components/Pages/DisclaimerPage';
import HeroCarousel from './components/Sections/HeroCarousel';
import ContactPage from './components/Pages/ContactPage';
import TermsAndConditionsPage from './components/Pages/TermsAndConditionsPage';
import RefundPolicyPage from './components/Pages/RefundPolicyPage';
import FSSAIPolicyPage from './components/Pages/FSSAIPolicyPage';
import ScrollToHash from './components/common/ScrollToHash';

import AdminDashboard from './components/Admin/AdminDashboard';
import AdminLogin from './components/Admin/AdminLogin';
import DocumentsRequiredSection from './components/Sections/DocumentsRequiredSection';
import GSTAboutUsPage from './components/Pages/About';
import GSTTrainingWebinarSection from './components/Sections/Training';

// ✅ Clear storage
function ClearStorageOnLoad() {
  useEffect(() => {
    localStorage.removeItem("fssaiFormDraft"); 
    sessionStorage.removeItem("fssaiSubmittedData");
    console.log("✅ Storage cleared on app initial load");
  }, []);
  return null;
}

// ✅ Scroll to top
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// ✅ Protected Route
function ProtectedRoute({ children }) {
  const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
  if (!isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }
  return children;
}

// ✅ Private Consultancy Marquee - GST Version
function PrivateConsultancyMarquee() {
  return (
    <div className="bg-navy-50 border-b border-navy-100 text-navy-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-3">
        <FaInfoCircle className="shrink-0 text-orange-600" size={14} />
        <div className="marquee-container relative flex-1 overflow-hidden">
          <div className="marquee inline-flex whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide">
            <span className="mx-12">
              This is a private consultancy self-registration portal Owned By <b>EASQUES</b> for Registration. 
              Portal fees are consultancy in nature.
            </span>
            <span className="mx-12">
              This is a private consultancy self-registration portal Owned By <b>EASQUES</b> for  Registration. 
              Portal fees are consultancy in nature.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Back to Top Button (Blue Theme)
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      <FaArrowUp size={16} />
    </button>
  );
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      <ClearStorageOnLoad />
      <TopBar />

      {/* Navbar - Only on Home */}
      {isHome && (
        <Navbar
          navItems={[
            { label: "REGISTRATION", to: "#registration-form" },
            { label: "MODIFICATION", to: "#registration-form" },
            { label: "CANCELLATION", to: "#registration-form" },
            { label: "ABOUT US", to: "/about" },
            { label: "PROCEDURE", to: "#procedure" },
            { label: "TRAINING & Webinar", to: "#training" },
            { label: "DOCUMENTS", to: "#documents" },     // Documents section ke liye
            { label: "BENEFITS", to: "#benefits" },
            { label: "FAQ'S", to: "#faq" },
          ]}
          handleScroll={(e, target) => {
            if (target.startsWith('#')) {
              e.preventDefault();
              const element = document.querySelector(target);
              if (element) {
                const headerOffset = 140;
                const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }
          }}
        />
      )}

      {/* Private Consultancy Marquee - Only on Home */}
      {isHome && <PrivateConsultancyMarquee />}

      {/* HeroCarousel - GST Version */}
      {isHome && (
        <div>
          <HeroCarousel />
        </div>
      )}

      {!isHome && <HeroCarousel />}

      <ScrollToTop />
      <ScrollToHash />

      <main className="flex-grow">
        <Routes>

          {/* Home Page - GST Version */}
          <Route
            path="/"
            element={
              <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 pt-8 pb-10 md:pt-10 md:pb-14">
                <div className="mx-auto max-w-screen-2xl">
                  <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="lg:col-span-2">
                      <FssaiRegistrationForm />   {/* ← Is component ka naam GSTRegistrationForm kar sakte ho baad mein */}
                    </div>
                    <div className="lg:col-span-1">
                      <InstructionsSidebar />
                    </div>
                  </div>
                </div>

                <div className="mx-auto max-w-screen-2xl mt-14 md:mt-20 space-y-16 md:space-y-24">
                  <ProcedureSection />
                  <DocumentsRequiredSection id="documents" />   {/* id add kiya navbar ke liye */}
                  <GSTTrainingWebinarSection />
                  <BenefitsSection />
                  <FaqSection />
                </div>
              </div>
            }
          />

          {/* Other Routes */}
          <Route path="/payment-summary" element={<FssaiPaymentSummary />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/about' element={<GSTAboutUsPage/>} />
          <Route path="/term-condition" element={<TermsAndConditionsPage />} />
          <Route path="/privacy-policy" element={<FSSAIPolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-[60vh] flex items-center justify-center px-4">
                <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 text-center tracking-tight">
                  404 — Page Not Found
                </h1>
              </div>
            }
          />

        </Routes>
      </main>

      <MainFooter />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;