// src/components/Pages/GSTPolicyPage.jsx

export default function GSTPolicyPage() {
  return (
    <div className="py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <span className="mx-auto mb-5 block h-1 w-16 rounded-full bg-orange-500"></span>
          <p className="text-sm md:text-base text-slate-500">
            Last Updated: April 08, 2026
          </p>
        </div>

        {/* Summary Banner */}
        <div className="bg-orange-50 border border-orange-200 border-l-4 border-l-orange-500 p-6 md:p-8 rounded-xl mb-10 text-slate-800">
          <p className="text-base md:text-lg font-bold text-navy-900 mb-2">
            Your Privacy is Our Priority
          </p>
          <p className="leading-relaxed">
            We are committed to protecting your personal information while providing 
            professional consultancy services for <strong>GST Registration and Tax Compliance</strong>.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6 md:space-y-8">

          {/* Introduction */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              Introduction
            </h2>
            <p className="text-slate-700 leading-relaxed">
              This website is a privately owned portal operated by a professional consultancy firm. 
              We provide assistance and guidance for GST New Registration, Composition Scheme, 
              Regular Registration, Modification, Cancellation and other GST compliance services.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              This Privacy Policy explains how we collect, use, store, and protect your personal information 
              when you use our website or avail our consultancy services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 marker:text-orange-500">
              <li><strong>Personal Information:</strong> Full name, email address, mobile number, address, PAN card, Aadhaar number (if required), and business details.</li>
              <li><strong>Business Information:</strong> Company / Firm name, constitution of business, nature of business activity, turnover details, and other information required for GST application.</li>
              <li><strong>Payment Information:</strong> We do not store complete card/bank details. All payments are processed securely via third-party payment gateways.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information collected through cookies.</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              How We Use Your Information
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                <span>To provide consultancy and support for your GST registration / compliance application.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                <span>To communicate with you regarding your application status and service updates.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                <span>To process payments and generate invoices.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                <span>To improve our services and website experience.</span>
              </li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              Information Sharing &amp; Disclosure
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We <strong>do not sell or rent</strong> your personal information to any third party for marketing purposes.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We may share your information only when:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 marker:text-orange-500">
              <li>It is necessary for processing your GST application through authorized channels.</li>
              <li>Required by law or government authorities (GSTN / CBIC / Tax Department).</li>
              <li>With trusted service providers who assist us under strict confidentiality agreements.</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              Data Security
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We implement reasonable security measures to protect your data from unauthorized access, 
              loss, misuse, or alteration. However, no internet transmission or electronic storage is 100% secure. 
              We cannot guarantee absolute security of your information.
            </p>
          </section>

          {/* Cookies */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Our website uses cookies to enhance user experience and analyze website traffic. 
              You may adjust your browser settings to block cookies, but this may affect some features of the website.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              Your Rights
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 marker:text-orange-500">
              <li>Access or update your personal information</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Withdraw consent for data processing</li>
              <li>Opt-out of promotional communications</li>
            </ul>
          </section>

          {/* Contact Us */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              Contact Us
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-navy-50 p-5 rounded-lg border border-navy-100">
              <p className="font-medium text-slate-800">
                Email: <strong>info@gstindia-registration.org</strong><br />
                Phone: <strong>+91-9211037448</strong>
              </p>
            </div>
          </section>

          {/* Final Note */}
          <section className="bg-navy-50 rounded-xl p-6 md:p-8 text-center border border-navy-100">
            <p className="text-base md:text-lg text-navy-900 font-medium">
              We are committed to safeguarding your privacy and maintaining transparency 
              in all our GST consultancy services. Thank you for trusting us.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}