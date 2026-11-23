// src/components/Sections/DocumentsRequiredSection.jsx

import { useState } from "react";
import { FaClipboardList, FaInfoCircle } from "react-icons/fa";
import pan from "../../Assest/Pan.jpg";
import aadhar from "../../Assest/aadhaar.jpg";
import photo from "../../Assest/profile.jpg";
import business from "../../Assest/Bussiness.webp";
import address from "../../Assest/address.webp";

const categories = [
  {
    id: "proprietorship",
    label: "Proprietorship",
    documents: [
      { title: "PAN Card of the Owner", icon: pan },
      { title: "Aadhaar Card of the Owner", icon: aadhar },
      { title: "Photograph of the Owner", note: "(JPG, max 100 KB)", icon: photo },
      { title: "Business Address Proof", icon: address, note: "(Electricity bill / Rent agreement / Property tax receipt)" },
      { title: "Bank Account Details", icon: business, note: "(Cancelled cheque / Bank statement)" },
    ],
  },
  {
    id: "partnership",
    label: "Partnership Firm",
    documents: [
      { title: "PAN Card of the Firm", icon: pan },
      { title: "PAN & Aadhaar of All Partners", icon: aadhar },
      { title: "Partnership Deed (Notarised)", icon: business },
      { title: "Photograph of All Partners", note: "(JPG, max 100 KB)", icon: photo },
      { title: "Business Address Proof", icon: address, note: "(Rent agreement / NOC / Utility bill)" },
    ],
  },
  {
    id: "llp",
    label: "LLP Firm",
    documents: [
      { title: "PAN Card of the LLP", icon: pan },
      { title: "Certificate of Incorporation", icon: business },
      { title: "LLP Agreement", icon: business },
      { title: "PAN & Aadhaar of Designated Partners", icon: aadhar },
      { title: "Photograph of Partners / Authorised Signatory", note: "(JPG, max 100 KB)", icon: photo },
      { title: "Business Address Proof", icon: address },
    ],
  },
  {
    id: "company",
    label: "OPC / Pvt Limited / Section 8",
    documents: [
      { title: "PAN Card of the Company", icon: pan },
      { title: "Certificate of Incorporation", icon: business },
      { title: "MoA & AoA", icon: business, note: "(For Pvt Ltd & Section 8)" },
      { title: "PAN & Aadhaar of Directors", icon: aadhar },
      { title: "Photograph of Directors", note: "(JPG, max 100 KB)", icon: photo },
      { title: "Board Resolution / Authorisation Letter", icon: business },
      { title: "Business Address Proof", icon: address },
    ],
  },
];

export default function DocumentsRequiredSection() {
  const [activeCategory, setActiveCategory] = useState("proprietorship");

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <section id="documents" className="py-2 md:py-4">
      <div className="w-full">
        
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-700 border border-navy-100 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <FaClipboardList aria-hidden="true" /> REQUIRED DOCUMENTS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            Documents Required for<br />Registration
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
          <p className="mt-5 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Select your business type to see the exact documents needed.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={`px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-sm md:text-base transition-all ${
                activeCategory === category.id
                  ? "bg-navy-900 text-white shadow-md"
                  : "bg-white border border-slate-300 text-slate-700 hover:border-navy-300 hover:text-navy-900"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Documents Grid for Selected Category */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {currentCategory.documents.map((doc, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-slate-200"
              >
                {/* Top Bar */}
                <div className="h-1 bg-navy-800" />

                <div className="p-6 pb-7 flex flex-col items-center text-center">
                  
                  {/* Icon */}
                  <div className="h-20 w-28 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-5">
                    <img 
                      src={doc.icon} 
                      alt={doc.title}
                      className="max-h-full max-w-full object-contain p-2" 
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-semibold text-navy-900 leading-snug mb-1">
                    {doc.title}
                  </h3>

                  {/* Note */}
                  {doc.note && (
                    <p className="text-sm text-slate-500 mt-1">
                      {doc.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 md:mt-14 mx-auto max-w-2xl flex items-start gap-3 rounded-xl border border-orange-100 bg-orange-50 p-4 md:p-5 text-sm md:text-base text-orange-900">
          <FaInfoCircle className="mt-1 shrink-0 text-orange-600" aria-hidden="true" />
          <p>
            All documents must be clear, recent, and in the prescribed digital format. 
            Government fees and bank details may also be required during filing.
          </p>
        </div>
      </div>
    </section>
  );
}