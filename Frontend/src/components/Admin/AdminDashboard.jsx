

// import { useState, useEffect, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';
// import { FaSyncAlt, FaFileDownload, FaSignOutAlt, FaSearch } from 'react-icons/fa';

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
//       <div className="min-h-[50vh] flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin h-10 w-10 border-4 border-slate-200 border-t-orange-600 rounded-full mx-auto mb-4"></div>
//           <p className="text-base md:text-lg text-slate-600">Loading GST leads...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 sm:px-6 py-8 md:py-10">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900">GST Leads Dashboard</h1>
//             <span className="mt-3 block h-1 w-12 rounded-full bg-orange-500"></span>
//             <p className="text-slate-600 mt-3 text-sm md:text-base">
//               Total Leads: <span className="font-semibold text-navy-900">{leads.length}</span>
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-2.5">
//             <button 
//               onClick={handleRefresh}
//               className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
//             >
//               <FaSyncAlt aria-hidden="true" /> Refresh
//             </button>

//             <button 
//               onClick={exportToExcel}
//               className="bg-navy-900 hover:bg-navy-800 text-white px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-colors"
//             >
//               <FaFileDownload aria-hidden="true" /> Export to Excel
//             </button>

//             <button 
//               onClick={handleLogout}
//               className="bg-white border border-red-200 hover:bg-red-50 text-red-700 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
//             >
//               <FaSignOutAlt aria-hidden="true" /> Logout
//             </button>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6">
//           <div className="relative flex-1">
//             <FaSearch className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" aria-hidden="true" />
//             <input
//               type="text"
//               placeholder="Search by name, mobile or email..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3.5 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-400 shadow-sm transition duration-200 hover:border-slate-400 focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
//             />
//           </div>

//           <select
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value)}
//             className="rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm md:text-base text-slate-900 shadow-sm transition duration-200 hover:border-slate-400 focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
//           >
//             <option value="all">All Status</option>
//             <option value="new">New</option>
//             <option value="contacted">Contacted</option>
//             <option value="paid">Paid</option>
//             <option value="completed">Completed</option>
//           </select>
//         </div>

//         {/* Leads Table */}
//         <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-full text-sm">
//               <thead className="bg-navy-900 text-white">
//                 <tr className="text-xs uppercase tracking-wider">
//                   <th className="px-4 py-3.5 text-left font-semibold whitespace-nowrap">Date & Time</th>
//                   <th className="px-4 py-3.5 text-left font-semibold whitespace-nowrap">Applicant Name</th>
//                   <th className="px-4 py-3.5 text-left font-semibold">Mobile</th>
//                   <th className="px-4 py-3.5 text-left font-semibold">Email</th>
//                   <th className="px-4 py-3.5 text-left font-semibold">Designation</th>
//                   <th className="px-4 py-3.5 text-left font-semibold whitespace-nowrap">Nature of Business</th>
//                   <th className="px-4 py-3.5 text-left font-semibold">State</th>
//                   <th className="px-4 py-3.5 text-left font-semibold">Status</th>
//                   <th className="px-4 py-3.5 text-center font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-200 text-slate-700">
//                 {filteredLeads.length > 0 ? (
//                   filteredLeads.map((lead) => (
//                     <tr key={lead._id} className="hover:bg-slate-50 transition-colors">
//                       <td className="px-4 py-3.5 whitespace-nowrap">
//                         {new Date(lead.submittedAt || lead.createdAt).toLocaleString()}
//                       </td>
//                       <td className="px-4 py-3.5 font-semibold text-navy-900">
//                         {getField(lead, 'applicant_name', 'ctl00$ContentPlaceHolder1$txtName')}
//                       </td>
//                       <td className="px-4 py-3.5 whitespace-nowrap">
//                         {getField(lead, 'mobile', 'ctl00$ContentPlaceHolder1$txtPhone1')}
//                       </td>
//                       <td className="px-4 py-3.5 break-all">
//                         {getField(lead, 'email', 'ctl00$ContentPlaceHolder1$txtEmail')}
//                       </td>
//                       <td className="px-4 py-3.5">
//                         {getField(lead, 'designation', 'ctl00$ContentPlaceHolder1$ddlDesignition')}
//                       </td>
//                       <td className="px-4 py-3.5">
//                         {getField(lead, 'nature_of_business', 'ctl00$ContentPlaceHolder1$ddlNatureBusiness')}
//                       </td>
//                       <td className="px-4 py-3.5">
//                         {getField(lead, 'state', 'ctl00$ContentPlaceHolder1$ddlState')}
//                       </td>
//                       <td className="px-4 py-3.5">
//                         <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ring-1 ${
//                           lead.status === 'new' ? 'bg-navy-50 text-navy-700 ring-navy-100' :
//                           lead.status === 'contacted' ? 'bg-amber-50 text-amber-700 ring-amber-200' :
//                           lead.status === 'paid' ? 'bg-violet-50 text-violet-700 ring-violet-200' :
//                           'bg-green-50 text-green-700 ring-green-200'
//                         }`}>
//                           {lead.status ? lead.status.charAt(0).toUpperCase() + lead.status.slice(1) : 'New'}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3.5 text-center">
//                         <button
//                           onClick={() => viewRawPayload(lead)}
//                           className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors"
//                         >
//                           View Raw
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="9" className="px-4 py-16 text-center text-slate-500 text-base">
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
import { FaSyncAlt, FaFileDownload, FaSignOutAlt, FaSearch, FaTimes } from 'react-icons/fa';

// Status badge colors (popup ke liye, table jaisa hi)
const statusStyles = {
  new: 'bg-navy-50 text-navy-700 ring-navy-100',
  contacted: 'bg-amber-50 text-amber-700 ring-amber-200',
  paid: 'bg-violet-50 text-violet-700 ring-violet-200',
  completed: 'bg-green-50 text-green-700 ring-green-200',
};

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedLead, setSelectedLead] = useState(null);

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

  // Escape dabane par popup band
  useEffect(() => {
    if (!selectedLead) return;
    const onKey = (e) => e.key === 'Escape' && setSelectedLead(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedLead]);

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

  // Popup ke sections (data se render hote hain, isliye alag component nahi chahiye)
  const detailSections = selectedLead
    ? [
        {
          title: 'Application',
          items: [
            { label: 'Application Type', value: getField(selectedLead, 'application_type', 'ctl00$ContentPlaceHolder1$ddlApplicationType') },
            { label: 'Nature of Business', value: getField(selectedLead, 'nature_of_business', 'ctl00$ContentPlaceHolder1$ddlNatureBusiness') },
            { label: 'Designation', value: getField(selectedLead, 'designation', 'ctl00$ContentPlaceHolder1$ddlDesignition') },
          ],
        },
        {
          title: 'Contact',
          items: [
            { label: 'Applicant Name', value: getField(selectedLead, 'applicant_name', 'ctl00$ContentPlaceHolder1$txtName'), full: true },
            {
              label: 'Mobile',
              value: getField(selectedLead, 'mobile', 'ctl00$ContentPlaceHolder1$txtPhone1'),
              href: `tel:${getField(selectedLead, 'mobile', 'ctl00$ContentPlaceHolder1$txtPhone1')}`,
            },
            {
              label: 'Email',
              value: getField(selectedLead, 'email', 'ctl00$ContentPlaceHolder1$txtEmail'),
              href: `mailto:${getField(selectedLead, 'email', 'ctl00$ContentPlaceHolder1$txtEmail')}`,
            },
          ],
        },
        {
          title: 'Location',
          items: [
            { label: 'State', value: getField(selectedLead, 'state', 'ctl00$ContentPlaceHolder1$ddlState') },
            { label: 'City', value: getField(selectedLead, 'city', 'ctl00$ContentPlaceHolder1$txtCity') },
            { label: 'Pincode', value: getField(selectedLead, 'pin', 'ctl00$ContentPlaceHolder1$txtPin') },
          ],
        },
      ]
    : [];

  const selectedStatus = selectedLead?.status || 'new';

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
                          onClick={() => setSelectedLead(lead)}
                          className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors"
                        >
                          View Details
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

      {/* Lead details popup */}
      {selectedLead && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Lead details"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/60 p-3 sm:p-4 backdrop-blur-sm"
          onClick={() => setSelectedLead(null)}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 bg-navy-900 px-5 py-5 sm:px-7">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-orange-400">
                  Lead Details
                </p>
                <h2 className="mt-1 text-lg font-bold leading-snug text-white sm:text-xl break-words">
                  {getField(selectedLead, 'applicant_name', 'ctl00$ContentPlaceHolder1$txtName')}
                </h2>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                      statusStyles[selectedStatus] || statusStyles.completed
                    }`}
                  >
                    {selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}
                  </span>
                  <span className="text-xs text-slate-300">
                    Submitted on{' '}
                    {new Date(selectedLead.submittedAt || selectedLead.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedLead(null)}
                aria-label="Close"
                className="shrink-0 rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-4 overflow-y-auto bg-white p-4 sm:p-6">
              {detailSections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5"
                >
                  <h3 className="mb-4 flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-navy-900">
                    <span className="h-4 w-1 rounded-full bg-orange-500"></span>
                    {section.title}
                  </h3>

                  <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                    {section.items.map((item) => {
                      const empty = !item.value || item.value === '-';
                      return (
                        <div key={item.label} className={item.full ? 'sm:col-span-2' : ''}>
                          <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                            {item.label}
                          </dt>
                          <dd className="mt-1 text-sm md:text-[15px] font-medium text-slate-900 break-words">
                            {empty ? (
                              <span className="text-slate-400">—</span>
                            ) : item.href ? (
                              <a
                                href={item.href}
                                className="text-navy-700 underline-offset-2 hover:text-orange-600 hover:underline"
                              >
                                {item.value}
                              </a>
                            ) : (
                              item.value
                            )}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </section>
              ))}

              {/* Raw JSON (collapsed) */}
              <details className="group rounded-xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
                  Show raw JSON
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-lg leading-none text-navy-700 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <pre className="max-h-64 overflow-auto border-t border-slate-100 p-4 text-xs leading-relaxed text-slate-700 whitespace-pre-wrap break-words">
                  {JSON.stringify(selectedLead.rawPayload || selectedLead, null, 2)}
                </pre>
              </details>
            </div>

            {/* Footer */}
            <div className="flex justify-end border-t border-slate-200 bg-slate-50 px-4 py-3 sm:px-6">
              <button
                onClick={() => setSelectedLead(null)}
                className="rounded-lg bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-600 focus-visible:ring-offset-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}