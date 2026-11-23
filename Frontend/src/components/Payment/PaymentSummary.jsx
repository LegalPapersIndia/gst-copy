// src/components/PaymentSummary.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Detail({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-4 py-3 border-b border-slate-200 last:border-0">
      <span className="text-sm font-semibold text-slate-500 sm:min-w-[160px]">{label}:</span>
      <span className="text-slate-900 font-medium break-words sm:text-right">
        {value || "—"}
      </span>
    </div>
  );
}

export default function PaymentSummary() {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = sessionStorage.getItem("gstSubmittedData");
    if (!saved) {
      setError("No submitted data found. Starting fresh...");
      setTimeout(() => {
        sessionStorage.removeItem("gstSubmittedData");
        navigate("/");
      }, 2500);
      return;
    }

    try {
      const parsed = JSON.parse(saved);
      const isTooOld = parsed._timestamp && Date.now() - parsed._timestamp > 30 * 60 * 1000;
      if (isTooOld) {
        throw new Error("Session expired");
      }
      setFormData(parsed);
    } catch (e) {
      console.error("Parse / validation error:", e);
      setError("Invalid or expired data found. Starting fresh...");
      sessionStorage.removeItem("gstSubmittedData");
      setTimeout(() => navigate("/"), 2500);
    }
  }, [navigate]);

  const handleEdit = () => {
    sessionStorage.setItem("gstEditFromPayment", "true");
    navigate("/");
  };

  const paymentOption = {
    amount: "₹ 5,999",
    link: "#",                    // ← Replace with your actual Razorpay / Instamojo link
    title: "Complete Registration Package"
  };

  const handlePay = () => {
    if (paymentOption.link === "#") {
      alert("Payment link will be activated soon. Please contact support for instant payment.");
      return;
    }
    window.location.href = paymentOption.link;
  };

  const getValue = (key) => {
    if (!formData) return "—";
    return formData[key] || "—";
  };

  if (error) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-4">
        <div className="text-center p-8 md:p-10 bg-white rounded-2xl shadow-sm border border-slate-200 max-w-md w-full">
          <p className="text-red-600 text-lg md:text-xl font-semibold mb-3">{error}</p>
          <p className="text-slate-500 text-sm">Redirecting in a few seconds...</p>
        </div>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-slate-200 border-t-orange-600"></div>
        <p className="ml-4 text-slate-600 text-base md:text-lg">Loading your details...</p>
      </div>
    );
  }

  // Build full address
  const fullAddress = [
    getValue("ctl00$ContentPlaceHolder1$txtAddress1"),     // New: Address Line 1 (Mandatory)
    getValue("ctl00$ContentPlaceHolder1$txtHOUSE"),        // Address Line 2
    getValue("ctl00$ContentPlaceHolder1$txtAreaLocality"),
    getValue("ctl00$ContentPlaceHolder1$txtCity"),
    getValue("ctl00$ContentPlaceHolder1$txtDistrict"),
    getValue("ctl00$ContentPlaceHolder1$ddlState"),
    getValue("ctl00$ContentPlaceHolder1$txtPin") 
      ? `Pin: ${getValue("ctl00$ContentPlaceHolder1$txtPin")}` 
      : "",
  ].filter(Boolean).join(", ");

  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-10 py-10 md:py-14">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="bg-navy-900 text-white py-8 md:py-10 px-6 text-center">
          <span className="mx-auto mb-4 block h-1 w-12 rounded-full bg-orange-500"></span>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Application Summary & Payment
          </h1>
          <p className="text-sm md:text-base text-slate-300">Please review your details before proceeding</p>
        </div>

        <div className="p-5 sm:p-8 md:p-10">
          <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-6 md:mb-8 text-center">
            Your Application Details
          </h2>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {/* Left Column - Personal & Business Info */}
            <div className="bg-slate-50 px-5 py-2 md:px-6 rounded-xl border border-slate-200">
              <Detail label="Application Type" value={getValue("ctl00$ContentPlaceHolder1$ddlApplicationType")} />
              <Detail label="Applicant Name" value={getValue("ctl00$ContentPlaceHolder1$txtName")} />
              <Detail label="Entity Name" value={getValue("ctl00$ContentPlaceHolder1$txtEntityName")} />
              <Detail label="PAN Number" value={getValue("ctl00$ContentPlaceHolder1$txtPAN")} />
              <Detail label="Email ID" value={getValue("ctl00$ContentPlaceHolder1$txtEmail")} />
              <Detail label="Mobile Number" value={getValue("ctl00$ContentPlaceHolder1$txtPhone1")} />
              <Detail label="Designation / Type of Organization" value={getValue("ctl00$ContentPlaceHolder1$ddlDesignition")} />
              <Detail label="Nature of Business" value={getValue("ctl00$ContentPlaceHolder1$ddlNatureBusiness")} />
            </div>

            {/* Right Column - Address */}
            <div className="bg-slate-50 px-5 py-2 md:px-6 rounded-xl border border-slate-200 self-start">
              <Detail 
                label="Business Address" 
                value={fullAddress || "—"} 
              />
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="p-5 sm:p-8 md:p-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-2">
              Complete Registration Package
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              Includes document preparation, filing, and departmental follow-up
            </p>

            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10 border border-slate-200">
              <div className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-2">
                {paymentOption.amount}
              </div>
              <p className="text-sm md:text-base text-slate-500 mb-8">One-time Consultancy & Service Fee</p>

              <button
                onClick={handlePay}
                className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg rounded-lg shadow-sm shadow-orange-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              >
                Proceed to Payment →
              </button>

              <p className="text-xs md:text-sm text-slate-500 mt-4">
                + Applicable Government Fee (if any)
              </p>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="pt-8 pb-10 flex justify-center">
          <button
            onClick={handleEdit}
            className="px-8 py-3 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-600 focus-visible:ring-offset-2"
          >
            ← Edit Application Details
          </button>
        </div>
      </div>
    </div>
  );
}