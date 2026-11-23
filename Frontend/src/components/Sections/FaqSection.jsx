// src/components/Sections/GSTFAQSection.jsx

export default function GSTFAQSection() {
  return (
    <section
      id="faq"
      className="py-2 md:py-4"
    >
      <div className="w-full">
        
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight max-w-4xl mx-auto">
            Registration Certificate – Frequently Asked Questions
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
        </div>

        <div className="grid md:grid-cols-2 items-start gap-4 lg:gap-6">
          
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {[
              {
                title: "Who is required to register under GST?",
                content:
                  "Any person or business whose annual turnover exceeds ₹20 lakh (₹10 lakh in special category states) must register for GST. Inter-state suppliers, e-commerce operators, and those liable to pay tax under reverse charge are also required to register.",
              },
              {
                title: "What are the different types of GST registration?",
                content: (
                  <>
                    <p>There are mainly three types of GST registration:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 marker:text-orange-500">
                      <li><b>Regular Registration</b> – Standard GST registration</li>
                      <li><b>Composition Scheme</b> – For small businesses with turnover up to ₹1.5 crore</li>
                      <li><b>Voluntary Registration</b> – Even if turnover is below the threshold</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "What is the difference between Regular and Composition Scheme?",
                content:
                  "Under Regular GST, you can charge GST to customers and claim Input Tax Credit (ITC). Under Composition Scheme, you pay a fixed percentage of turnover as tax, cannot charge GST separately, and cannot claim ITC.",
              },
              {
                title: "How long does it take to get GST registration?",
                content:
                  "Once the application is submitted with correct documents, GST registration is usually granted within 3 to 7 working days, subject to approval by the GST officer.",
              },
              {
                title: "Can I claim Input Tax Credit after GST registration?",
                content:
                  "Yes. Registered taxpayers under the regular scheme can claim Input Tax Credit on GST paid on business purchases, raw materials, and services used for taxable supplies.",
              },
              {
                title: "Is GST registration mandatory for service providers?",
                content:
                  "Yes. Service providers whose annual turnover exceeds ₹20 lakh (₹10 lakh in special category states) are required to register under GST.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-navy-200 hover:shadow-md open:border-navy-200 open:shadow-md"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 list-none cursor-pointer rounded-xl group-open:rounded-b-none font-semibold text-[15px] md:text-base text-navy-900 transition-colors group-open:bg-navy-50">
                  {faq.title}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl leading-none text-navy-700 transition-all duration-300 group-open:rotate-45 group-open:bg-orange-600 group-open:text-white">
                    +
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-5 md:px-6 pb-5 pt-4 text-sm md:text-[15px] leading-relaxed text-slate-600">
                  {faq.content}
                </div>
              </details>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {[
              {
                title: "What documents are required for GST registration?",
                content: (
                  <>
                    <p>Commonly required documents include:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 marker:text-orange-500">
                      <li>PAN Card of the applicant/business</li>
                      <li>Aadhaar Card</li>
                      <li>Proof of business address</li>
                      <li>Bank account details &amp; cancelled cheque</li>
                      <li>Photographs of proprietor / directors / partners</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "Can I cancel my GST registration?",
                content:
                  "Yes. You can apply for cancellation of GST registration if your business is closed, turnover falls below the threshold limit, or for any other valid reason as per GST rules.",
              },
              {
                title: "What are the penalties for not registering under GST?",
                content:
                  "Failure to register when required can attract a penalty of 10% of the tax due or ₹10,000 (whichever is higher), along with interest on unpaid tax.",
              },
              {
                title: "Do I need separate GST registration for each state?",
                content:
                  "Yes. If you operate your business in multiple states, you are generally required to obtain separate GST registration in each state where you have a place of business.",
              },
              {
                title: "Is GST registration mandatory for e-commerce sellers?",
                content:
                  "Yes. E-commerce operators and sellers supplying goods/services through e-commerce platforms are required to register under GST irrespective of their turnover in many cases.",
              },
              {
                title: "Can I transfer my GST registration to another person?",
                content:
                  "No. GST registration is non-transferable. In case of death of the proprietor or change in constitution, you may need to apply for fresh registration or amendment as per rules.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-navy-200 hover:shadow-md open:border-navy-200 open:shadow-md"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 list-none cursor-pointer rounded-xl group-open:rounded-b-none font-semibold text-[15px] md:text-base text-navy-900 transition-colors group-open:bg-navy-50">
                  {faq.title}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl leading-none text-navy-700 transition-all duration-300 group-open:rotate-45 group-open:bg-orange-600 group-open:text-white">
                    +
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-5 md:px-6 pb-5 pt-4 text-sm md:text-[15px] leading-relaxed text-slate-600">
                  {faq.content}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}