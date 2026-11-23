// src/components/Pages/TermsAndConditionsPage.jsx

export default function TermsAndConditionsPage() {
  return (
    <div className="py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

        {/* Page Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Terms and Conditions
          </h1>
          <span className="mx-auto mb-5 block h-1 w-16 rounded-full bg-orange-500"></span>
          <p className="text-sm md:text-base text-slate-500">
            Last Updated: March 07, 2026
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-orange-50 border border-orange-200 border-l-4 border-l-orange-500 p-6 md:p-8 rounded-xl mb-10 text-slate-800">
          <p className="text-base md:text-lg font-bold text-navy-900 mb-2">
            Important Notice
          </p>
          <p className="leading-relaxed">
            This is a <span className="font-bold text-orange-700">private consultancy portal</span> providing assistance for 
            <span className="font-bold text-orange-700"> GST Registration</span>. 
            All portal fees are <span className="font-bold text-orange-700">consultancy in nature</span> and are not government fees.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
            Welcome to <span className="font-semibold">gstindia-registration.org</span>. 
            These Terms and Conditions govern your use of this website and the services we provide.
            By accessing or using this portal, you agree to comply with these terms.
          </p>

          <p className="text-slate-700 leading-relaxed">
            This portal is operated by a <strong>private consultancy firm</strong> and is 
            <strong> not affiliated with or endorsed by the Goods and Services Tax Network (GSTN)</strong>, 
            Central Board of Indirect Taxes and Customs (CBIC), or any other Government authority.
          </p>
        </section>

        <div className="space-y-6 md:space-y-8">

          {/* 1 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              1. Ownership of Content
            </h2>

            <p className="text-slate-700 leading-relaxed">
              All content on this website including text, graphics, images, logos, and design elements
              is the property of this portal or its content providers and is protected under applicable
              intellectual property laws. All trademarks and logos remain the property of their respective owners.
            </p>
          </section>

          {/* 2 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              2. Third-Party Information
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Certain information on this website may be sourced from third-party providers
              or government websites.
              Such information is provided for general informational purposes only.
            </p>

            <p className="text-slate-700 leading-relaxed mt-4">
              We do not guarantee the completeness, reliability, or accuracy of third-party
              information and users are advised to verify details from official sources when required.
            </p>
          </section>

          {/* 3 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              3. Disclaimer of Liability
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              The portal and its operators shall not be held liable for any damages
              resulting from the use or inability to use this website including:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-700 marker:text-orange-500 mb-4">
              <li>Errors, interruptions, or technical issues</li>
              <li>Computer viruses or unauthorized system access</li>
              <li>Loss of data or business interruption</li>
              <li>Delays in processing or communication failures</li>
            </ul>

            <p className="text-slate-700 leading-relaxed">
              Users acknowledge that the use of this portal is entirely at their own risk.
            </p>
          </section>

          {/* 4 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              4. User Conduct
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              By accessing this portal you agree not to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-700 marker:text-orange-500">
              <li>Disrupt or interfere with the website's functionality</li>
              <li>Attempt unauthorized access to the system</li>
              <li>Submit misleading or false information</li>
              <li>Violate applicable Indian laws or regulations</li>
            </ul>
          </section>

          {/* 5 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              5. Limitation of Warranty
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              All services and information provided through this portal are offered
              on an “as-is” and “as-available” basis.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-700 marker:text-orange-500">
              <li>We do not guarantee the accuracy of information</li>
              <li>We do not ensure uninterrupted access to the website</li>
              <li>We do not guarantee approval of GST registration applications</li>
              <li>We disclaim warranties of merchantability or fitness for a specific purpose</li>
            </ul>
          </section>

          {/* 6 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              6. Service Usage and Modifications
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              This portal provides consultancy services related to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-700 marker:text-orange-500">
              <li>New Registration</li>
              <li>Registration under Composition Scheme</li>
              <li>Regular Registration</li>
              <li>Modification / Amendment</li>
              <li>Cancellation</li>
              <li>Compliance and Filing Assistance</li>
            </ul>

            <p className="text-slate-700 leading-relaxed mt-4">
              We reserve the right to modify or discontinue services without prior notice.
            </p>
          </section>

          {/* 7 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              7. Legal Compliance
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Users agree to comply with the Goods and Services Tax Act, CGST/SGST Rules,
              and all applicable Indian tax laws while using this portal.
            </p>
          </section>

          {/* 8 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              8. Changes to Terms
            </h2>

            <p className="text-slate-700 leading-relaxed">
              These Terms and Conditions may be updated periodically.
              Continued use of the website indicates acceptance of any revised terms.
            </p>
          </section>

          {/* 9 */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              9. Contact
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions regarding these Terms and Conditions,
              please contact our support team.
            </p>

            <div className="space-y-3 text-slate-700">
              <p><span className="font-semibold">Email:</span> info@gstindia-registration.org</p>
              <p><span className="font-semibold">Mobile:</span> +91-9211037448</p>
            </div>
          </section>

        </div>

        {/* Acceptance */}
        <div className="mt-12 text-center text-navy-900 text-base md:text-lg font-medium bg-navy-50 p-6 rounded-xl border border-navy-100">
          By using this website, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and Conditions.
        </div>

      </div>
    </div>
  );
}