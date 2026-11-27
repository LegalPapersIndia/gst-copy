// src/components/Form/InstructionsSidebar.jsx
import { FaInfoCircle } from 'react-icons/fa';

export default function InstructionsSidebar() {
  return (
    <aside className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden lg:sticky lg:top-20">
      <div className="bg-navy-50 border-b border-navy-100 px-6 py-5 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-navy-900">
          Important Instructions
        </h2>
      </div>

      <div className="p-6 md:p-8">
        <ol className="steps-list space-y-5 text-sm text-slate-700 leading-relaxed">
          <li>
            <strong className="text-slate-900">Application Type :</strong> Select the type of application you are applying for — 
            <strong className="text-slate-900"> New Registration</strong>, <strong className="text-slate-900">Modification</strong>, or <strong className="text-slate-900">Renewal</strong>.
          </li>

          <li>
            <strong className="text-slate-900">Name of Applicant/Company :</strong> Enter the full legal name of the individual / 
            business / company exactly as it appears on your PAN Card and other legal documents.
          </li>

          <li>
            <strong className="text-slate-900">Email Id :</strong> Provide a valid and active email address of the applicant / 
            authorized signatory. All GST communications, OTPs, and updates will be sent here.
          </li>

          <li>
            <strong className="text-slate-900">Mobile Number :</strong> Enter the correct 10-digit mobile number linked with your Aadhaar / PAN. 
            This number will be used for OTP verification and important updates.
          </li>

          <li>
            <strong className="text-slate-900">Constitution of Business :</strong> Select the correct constitution/type of your business 
            (Sole Proprietorship, Partnership Firm, LLP, Private Limited Company, OPC, HUF, Trust, Society, etc.).
          </li>

          <li>
            <strong className="text-slate-900">Nature of Business Activity :</strong> Choose the appropriate nature of your business 
            (Manufacturer, Trader, Wholesaler, Retailer, Importer, Exporter, Service Provider, E-commerce, etc.).
          </li>

          <li>
            <strong className="text-slate-900">PAN Number :</strong> Enter the valid 10-digit Permanent Account Number (PAN) of the applicant / company.
          </li>

          <li>
            <strong className="text-slate-900">Address of Principal Place of Business :</strong> Fill in the complete and accurate address 
            of your principal place of business. This address will appear on your GST Certificate.
          </li>

          <li>
            <strong className="text-slate-900">State & District :</strong> Select your state and district carefully as it determines 
            the jurisdictional GST office and proper officer.
          </li>
        </ol>

        {/* <div className="mt-8 flex gap-3 rounded-lg border border-orange-100 bg-orange-50 p-4 text-xs sm:text-sm text-orange-900">
          <FaInfoCircle className="mt-0.5 shrink-0 text-orange-600" />
          <div>
            <p>
              Note: This is a private consultancy assisted form — not the official GST Portal (gst.gov.in). 
              The fees charged on this portal are consultancy charges and not government fees.
            </p>
            <p className="mt-3">
              Ensure all information entered matches exactly with your PAN, Aadhaar, Bank details, 
              and other official documents to avoid rejection or delay in GST registration.
            </p>
          </div>
        </div> */}
      </div>
    </aside>
  );
}