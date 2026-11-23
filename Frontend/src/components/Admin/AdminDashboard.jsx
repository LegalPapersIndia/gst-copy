// import { useState, useEffect, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';

// export default function AdminDashboard() {
//   const [leads, setLeads] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterStatus, setFilterStatus] = useState('all');

//   const navigate = useNavigate();
//   const API_URL = import.meta.env.VITE_API_URL;

//   // Fetch leads
//   const fetchLeads = async () => {
//     try {
//       const credentials = sessionStorage.getItem('adminCredentials');
      
//       if (!credentials) {
//         sessionStorage.clear();
//         navigate('/admin');
//         return;
//       }

//       const response = await fetch(`${API_URL}/api/leads`, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Basic ${credentials}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 401) {
//         sessionStorage.clear();
//         alert("Session expired. Please login again.");
//         navigate('/admin');
//         return;
//       }

//       if (!response.ok) throw new Error(`Server Error: ${response.status}`);

//       const data = await response.json();
//       setLeads(Array.isArray(data) ? data : []);
      
//     } catch (error) {
//       console.error('Fetch Leads Error:', error);
//       alert("Unable to fetch leads. Please check if backend is running.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
//     const credentials = sessionStorage.getItem('adminCredentials');

//     if (!isLoggedIn || !credentials) {
//       navigate('/admin');
//       return;
//     }

//     fetchLeads();
//   }, [navigate]);

//   const handleLogout = () => {
//     sessionStorage.clear();
//     navigate('/admin');
//   };

//   const handleRefresh = () => {
//     setLoading(true);
//     fetchLeads();
//   };

//   // Safe field extractor for GST
//   const getField = (lead, shortName, longName) => {
//     return (
//       lead[shortName] ||
//       lead.rawPayload?.[longName] ||
//       lead.rawPayload?.[shortName] ||
//       '-'
//     );
//   };

//   // Filtered Leads
//   const filteredLeads = useMemo(() => {
//     const searchLower = searchTerm.toLowerCase().trim();

//     return leads.filter((lead) => {
//       const applicantName = getField(lead, 'applicant_name', 'ctl00$ContentPlaceHolder1$txtName').toLowerCase();
//       const mobile = getField(lead, 'mobile', 'ctl00$ContentPlaceHolder1$txtPhone1');
//       const email = getField(lead, 'email', 'ctl00$ContentPlaceHolder1$txtEmail').toLowerCase();

//       const matchesSearch = 
//         applicantName.includes(searchLower) ||
//         mobile.includes(searchTerm) ||
//         email.includes(searchLower);

//       const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;

//       return matchesSearch && matchesStatus;
//     });
//   }, [leads, searchTerm, filterStatus]);

//   // Export to Excel - GST Version
//   const exportToExcel = () => {
//     if (filteredLeads.length === 0) {
//       alert("No leads to export!");
//       return;
//     }

//     const exportData = filteredLeads.map((lead) => ({
//       "Date & Time": new Date(lead.submittedAt || lead.createdAt || Date.now()).toLocaleString(),
//       "Application Type": getField(lead, 'application_type', 'ctl00$ContentPlaceHolder1$ddlApplicationType'),
//       "Applicant Name": getField(lead, 'applicant_name', 'ctl00$ContentPlaceHolder1$txtName'),
//       "Email": getField(lead, 'email', 'ctl00$ContentPlaceHolder1$txtEmail'),
//       "Mobile": getField(lead, 'mobile', 'ctl00$ContentPlaceHolder1$txtPhone1'),
//       "Designation": getField(lead, 'designation', 'ctl00$ContentPlaceHolder1$ddlDesignition'),
//       "Nature of Business": getField(lead, 'nature_of_business', 'ctl00$ContentPlaceHolder1$ddlNatureBusiness'),
//       "State": getField(lead, 'state', 'ctl00$ContentPlaceHolder1$ddlState'),
//       "City": getField(lead, 'city', 'ctl00$ContentPlaceHolder1$txtCity'),
//       "Pincode": getField(lead, 'pin', 'ctl00$ContentPlaceHolder1$txtPin'),
//       "Status": lead.status || 'new',
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(exportData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "GST_Leads");

//     const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//     const fileData = new Blob([excelBuffer], { type: "application/octet-stream" });

//     saveAs(fileData, `GST_Leads_${new Date().toISOString().slice(0,10)}.xlsx`);
//   };

//   const viewRawPayload = (lead) => {
//     const payload = lead.rawPayload || lead;
//     alert(JSON.stringify(payload, null, 2));
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
//           <p className="text-xl text-gray-600">Loading GST leads...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
//           <div>
//             <h1 className="text-4xl font-bold text-blue-700">GST Leads Dashboard</h1>
//             <p className="text-gray-600 mt-1">
//               Total Leads: <span className="font-semibold">{leads.length}</span>
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <button 
//               onClick={handleRefresh}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 transition"
//             >
//               🔄 Refresh
//             </button>

//             <button 
//               onClick={exportToExcel}
//               className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 transition"
//             >
//               📥 Export to Excel
//             </button>

//             <button 
//               onClick={handleLogout}
//               className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 transition"
//             >
//               Logout
//             </button>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-col md:flex-row gap-4 mb-8">
//           <input
//             type="text"
//             placeholder="Search by name, mobile or email..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="flex-1 p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
//           />

//           <select
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value)}
//             className="p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
//           >
//             <option value="all">All Status</option>
//             <option value="new">New</option>
//             <option value="contacted">Contacted</option>
//             <option value="paid">Paid</option>
//             <option value="completed">Completed</option>
//           </select>
//         </div>

//         {/* Leads Table */}
//         <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-full">
//               <thead className="bg-gray-900 text-white">
//                 <tr>
//                   <th className="p-5 text-left">Date & Time</th>
//                   <th className="p-5 text-left">Applicant Name</th>
//                   <th className="p-5 text-left">Mobile</th>
//                   <th className="p-5 text-left">Email</th>
//                   <th className="p-5 text-left">Designation</th>
//                   <th className="p-5 text-left">Nature of Business</th>
//                   <th className="p-5 text-left">State</th>
//                   <th className="p-5 text-left">Status</th>
//                   <th className="p-5 text-center">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {filteredLeads.length > 0 ? (
//                   filteredLeads.map((lead) => (
//                     <tr key={lead._id} className="hover:bg-gray-50 transition">
//                       <td className="p-5">
//                         {new Date(lead.submittedAt || lead.createdAt).toLocaleString()}
//                       </td>
//                       <td className="p-5 font-medium">
//                         {getField(lead, 'applicant_name', 'ctl00$ContentPlaceHolder1$txtName')}
//                       </td>
//                       <td className="p-5">
//                         {getField(lead, 'mobile', 'ctl00$ContentPlaceHolder1$txtPhone1')}
//                       </td>
//                       <td className="p-5">
//                         {getField(lead, 'email', 'ctl00$ContentPlaceHolder1$txtEmail')}
//                       </td>
//                       <td className="p-5">
//                         {getField(lead, 'designation', 'ctl00$ContentPlaceHolder1$ddlDesignition')}
//                       </td>
//                       <td className="p-5">
//                         {getField(lead, 'nature_of_business', 'ctl00$ContentPlaceHolder1$ddlNatureBusiness')}
//                       </td>
//                       <td className="p-5">
//                         {getField(lead, 'state', 'ctl00$ContentPlaceHolder1$ddlState')}
//                       </td>
//                       <td className="p-5">
//                         <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
//                           lead.status === 'new' ? 'bg-blue-100 text-blue-700' :
//                           lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-700' :
//                           lead.status === 'paid' ? 'bg-purple-100 text-purple-700' :
//                           'bg-green-100 text-green-700'
//                         }`}>
//                           {lead.status ? lead.status.charAt(0).toUpperCase() + lead.status.slice(1) : 'New'}
//                         </span>
//                       </td>
//                       <td className="p-5 text-center">
//                         <button
//                           onClick={() => viewRawPayload(lead)}
//                           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm font-medium transition"
//                         >
//                           View Raw
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="9" className="p-20 text-center text-gray-500 text-lg">
//                       No leads found matching your search criteria.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { FaSyncAlt, FaFileDownload, FaSignOutAlt, FaSearch } from 'react-icons/fa';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch leads
  const fetchLeads = async () => {
    try {
      const credentials = sessionStorage.getItem('adminCredentials');
      
      if (!credentials) {
        sessionStorage.clear();
        navigate('/admin');
        return;
      }

      const response = await fetch(`${API_URL}/api/leads`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 401) {
        sessionStorage.clear();
        alert("Session expired. Please login again.");
        navigate('/admin');
        return;
      }

      if (!response.ok) throw new Error(`Server Error: ${response.status}`);

      const data = await response.json();
      setLeads(Array.isArray(data) ? data : []);
      
    } catch (error) {
      console.error('Fetch Leads Error:', error);
      alert("Unable to fetch leads. Please check if backend is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    const credentials = sessionStorage.getItem('adminCredentials');

    if (!isLoggedIn || !credentials) {
      navigate('/admin');
      return;
    }

    fetchLeads();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/admin');
  };

  const handleRefresh = () => {
    setLoading(true);
    fetchLeads();
  };

  // Safe field extractor for GST
  const getField = (lead, shortName, longName) => {
    return (
      lead[shortName] ||
      lead.rawPayload?.[longName] ||
      lead.rawPayload?.[shortName] ||
      '-'
    );
  };

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    const searchLower = searchTerm.toLowerCase().trim();

    return leads.filter((lead) => {
      const applicantName = getField(lead, 'applicant_name', 'ctl00$ContentPlaceHolder1$txtName').toLowerCase();
      const mobile = getField(lead, 'mobile', 'ctl00$ContentPlaceHolder1$txtPhone1');
      const email = getField(lead, 'email', 'ctl00$ContentPlaceHolder1$txtEmail').toLowerCase();

      const matchesSearch = 
        applicantName.includes(searchLower) ||
        mobile.includes(searchTerm) ||
        email.includes(searchLower);

      const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;

      return matchesSearch && matchesStatus;
    });
  }, [leads, searchTerm, filterStatus]);

  // Export to Excel - GST Version
  const exportToExcel = () => {
    if (filteredLeads.length === 0) {
      alert("No leads to export!");
      return;
    }

    const exportData = filteredLeads.map((lead) => ({
      "Date & Time": new Date(lead.submittedAt || lead.createdAt || Date.now()).toLocaleString(),
      "Application Type": getField(lead, 'application_type', 'ctl00$ContentPlaceHolder1$ddlApplicationType'),
      "Applicant Name": getField(lead, 'applicant_name', 'ctl00$ContentPlaceHolder1$txtName'),
      "Email": getField(lead, 'email', 'ctl00$ContentPlaceHolder1$txtEmail'),
      "Mobile": getField(lead, 'mobile', 'ctl00$ContentPlaceHolder1$txtPhone1'),
      "Designation": getField(lead, 'designation', 'ctl00$ContentPlaceHolder1$ddlDesignition'),
      "Nature of Business": getField(lead, 'nature_of_business', 'ctl00$ContentPlaceHolder1$ddlNatureBusiness'),
      "State": getField(lead, 'state', 'ctl00$ContentPlaceHolder1$ddlState'),
      "City": getField(lead, 'city', 'ctl00$ContentPlaceHolder1$txtCity'),
      "Pincode": getField(lead, 'pin', 'ctl00$ContentPlaceHolder1$txtPin'),
      "Status": lead.status || 'new',
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "GST_Leads");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const fileData = new Blob([excelBuffer], { type: "application/octet-stream" });

    saveAs(fileData, `GST_Leads_${new Date().toISOString().slice(0,10)}.xlsx`);
  };

  const viewRawPayload = (lead) => {
    const payload = lead.rawPayload || lead;
    alert(JSON.stringify(payload, null, 2));
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 border-4 border-slate-200 border-t-orange-600 rounded-full mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-slate-600">Loading GST leads...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 py-8 md:py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900">GST Leads Dashboard</h1>
            <span className="mt-3 block h-1 w-12 rounded-full bg-orange-500"></span>
            <p className="text-slate-600 mt-3 text-sm md:text-base">
              Total Leads: <span className="font-semibold text-navy-900">{leads.length}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button 
              onClick={handleRefresh}
              className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
            >
              <FaSyncAlt aria-hidden="true" /> Refresh
            </button>

            <button 
              onClick={exportToExcel}
              className="bg-navy-900 hover:bg-navy-800 text-white px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-colors"
            >
              <FaFileDownload aria-hidden="true" /> Export to Excel
            </button>

            <button 
              onClick={handleLogout}
              className="bg-white border border-red-200 hover:bg-red-50 text-red-700 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
            >
              <FaSignOutAlt aria-hidden="true" /> Logout
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6">
          <div className="relative flex-1">
            <FaSearch className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search by name, mobile or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3.5 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-400 shadow-sm transition duration-200 hover:border-slate-400 focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm md:text-base text-slate-900 shadow-sm transition duration-200 hover:border-slate-400 focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="paid">Paid</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full text-sm">
              <thead className="bg-navy-900 text-white">
                <tr className="text-xs uppercase tracking-wider">
                  <th className="px-4 py-3.5 text-left font-semibold whitespace-nowrap">Date & Time</th>
                  <th className="px-4 py-3.5 text-left font-semibold whitespace-nowrap">Applicant Name</th>
                  <th className="px-4 py-3.5 text-left font-semibold">Mobile</th>
                  <th className="px-4 py-3.5 text-left font-semibold">Email</th>
                  <th className="px-4 py-3.5 text-left font-semibold">Designation</th>
                  <th className="px-4 py-3.5 text-left font-semibold whitespace-nowrap">Nature of Business</th>
                  <th className="px-4 py-3.5 text-left font-semibold">State</th>
                  <th className="px-4 py-3.5 text-left font-semibold">Status</th>
                  <th className="px-4 py-3.5 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        {new Date(lead.submittedAt || lead.createdAt).toLocaleString()}
                      </td>
                      <td className="px-4 py-3.5 font-semibold text-navy-900">
                        {getField(lead, 'applicant_name', 'ctl00$ContentPlaceHolder1$txtName')}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        {getField(lead, 'mobile', 'ctl00$ContentPlaceHolder1$txtPhone1')}
                      </td>
                      <td className="px-4 py-3.5 break-all">
                        {getField(lead, 'email', 'ctl00$ContentPlaceHolder1$txtEmail')}
                      </td>
                      <td className="px-4 py-3.5">
                        {getField(lead, 'designation', 'ctl00$ContentPlaceHolder1$ddlDesignition')}
                      </td>
                      <td className="px-4 py-3.5">
                        {getField(lead, 'nature_of_business', 'ctl00$ContentPlaceHolder1$ddlNatureBusiness')}
                      </td>
                      <td className="px-4 py-3.5">
                        {getField(lead, 'state', 'ctl00$ContentPlaceHolder1$ddlState')}
                      </td>
                      <td className="px-4 py-3.5">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ring-1 ${
                          lead.status === 'new' ? 'bg-navy-50 text-navy-700 ring-navy-100' :
                          lead.status === 'contacted' ? 'bg-amber-50 text-amber-700 ring-amber-200' :
                          lead.status === 'paid' ? 'bg-violet-50 text-violet-700 ring-violet-200' :
                          'bg-green-50 text-green-700 ring-green-200'
                        }`}>
                          {lead.status ? lead.status.charAt(0).toUpperCase() + lead.status.slice(1) : 'New'}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <button
                          onClick={() => viewRawPayload(lead)}
                          className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors"
                        >
                          View Raw
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="px-4 py-16 text-center text-slate-500 text-base">
                      No leads found matching your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}