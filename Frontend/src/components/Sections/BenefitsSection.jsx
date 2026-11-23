// src/components/Sections/GSTBenefitsSection.jsx

export default function GSTBenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-2 md:py-4"
    >
      <div className="w-full">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight max-w-4xl mx-auto">
            Learn More About Registration Certificate in India
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
        </div>

        <div className="grid md:grid-cols-2 items-start gap-4 lg:gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {[
              {
                title: "Who needs to register for GST?",
                content: (
                  <>
                    <p>GST registration is mandatory if:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5 marker:text-orange-500">
                      <li>Your annual turnover exceeds ₹20 lakh (₹10 lakh in special category states)</li>
                      <li>You are engaged in inter-state supply of goods or services</li>
                      <li>You are an e-commerce operator or aggregator</li>
                      <li>You are required to pay tax under reverse charge mechanism</li>
                      <li>You are a casual taxable person or non-resident taxable person</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "What are the penalties for not registering under GST?",
                content: (
                  <>
                    <p>Operating without GST registration when required can attract heavy penalties:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5 marker:text-orange-500">
                      <li>Penalty of 10% of tax due or ₹10,000 (whichever is higher)</li>
                      <li>Interest on unpaid tax</li>
                      <li>Possible legal action and prosecution in serious cases</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "What are the types of GST registration?",
                content: (
                  <>
                    <p>GST offers different registration types based on your business needs:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5 marker:text-orange-500">
                      <li><strong>Regular Registration</strong> – For businesses with turnover above threshold</li>
                      <li><strong>Composition Scheme</strong> – For small businesses (turnover up to ₹1.5 crore)</li>
                      <li><strong>Voluntary Registration</strong> – Even if turnover is below threshold</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "Can I claim Input Tax Credit (ITC) after GST registration?",
                content:
                  "Yes. Once registered under GST, you can claim Input Tax Credit on GST paid on business purchases, raw materials, and services, which helps reduce your tax liability.",
              },
              {
                title: "What documents are required for GST registration?",
                content: (
                  <>
                    <p>Common documents needed include:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5 marker:text-orange-500">
                      <li>PAN Card of the applicant / business</li>
                      <li>Aadhaar Card</li>
                      <li>Proof of business address (rent agreement, electricity bill, etc.)</li>
                      <li>Bank account details</li>
                      <li>Photographs of proprietor / directors</li>
                    </ul>
                  </>
                ),
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-navy-200 hover:shadow-md open:border-navy-200 open:shadow-md"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 list-none cursor-pointer rounded-xl group-open:rounded-b-none font-semibold text-[15px] md:text-base text-navy-900 transition-colors group-open:bg-navy-50">
                  {item.title}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl leading-none text-navy-700 transition-all duration-300 group-open:rotate-45 group-open:bg-orange-600 group-open:text-white">
                    +
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-5 md:px-6 pb-5 pt-4 text-sm md:text-[15px] leading-relaxed text-slate-600">
                  {item.content}
                </div>
              </details>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {[
              {
                title: "What is the difference between Regular and Composition Scheme?",
                content:
                  "Under Regular Scheme, you charge GST to customers and claim Input Tax Credit. Under Composition Scheme, you pay a fixed percentage of turnover as tax and cannot charge GST or claim ITC.",
              },
              {
                title: "Is GST registration mandatory for service providers?",
                content:
                  "Yes. Service providers with turnover exceeding ₹20 lakh (₹10 lakh in special category states) must register under GST.",
              },
              {
                title: "How long does it take to get GST registration?",
                content:
                  "Usually, GST registration is granted within 3 to 7 working days after successful submission of application and documents, subject to approval by the GST department.",
              },
              {
                title: "Can I cancel my GST registration?",
                content:
                  "Yes. You can apply for GST cancellation if your business is closed, turnover falls below threshold, or for any other valid reason as per GST rules.",
              },
              {
                title: "Do I need separate GST registration for each state?",
                content: (
                  <>
                    <p>Yes. If you have business operations in multiple states, you generally need to obtain separate GST registration in each state.</p>
                  </>
                ),
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-navy-200 hover:shadow-md open:border-navy-200 open:shadow-md"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 list-none cursor-pointer rounded-xl group-open:rounded-b-none font-semibold text-[15px] md:text-base text-navy-900 transition-colors group-open:bg-navy-50">
                  {item.title}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl leading-none text-navy-700 transition-all duration-300 group-open:rotate-45 group-open:bg-orange-600 group-open:text-white">
                    +
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-5 md:px-6 pb-5 pt-4 text-sm md:text-[15px] leading-relaxed text-slate-600">
                  {item.content}
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}