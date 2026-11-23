// // src/components/Admin/AdminLogin.jsx
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function AdminLogin() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const correctUsername = import.meta.env.VITE_ADMIN_USERNAME;
//     const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;

//     if (!correctUsername || !correctPassword) {
//       setError("❌ Environment variables missing. Check .env file.");
//       setLoading(false);
//       return;
//     }

//     if (username.trim() === correctUsername && password === correctPassword) {
//       // Store both login flag and credentials for Basic Auth
//       sessionStorage.setItem('adminLoggedIn', 'true');
//       sessionStorage.setItem('adminCredentials', btoa(`${correctUsername}:${correctPassword}`));
      
//       navigate('/admin/dashboard');
//     } else {
//       setError('❌ Invalid username or password');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-800 to-emerald-900 flex items-center justify-center p-6">
//       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10">
//         <div className="text-center mb-10">
//           <div className="mx-auto w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
//             <span className="text-4xl">🔐</span>
//           </div>
//           <h1 className="text-3xl font-bold text-gray-800">Admin Login</h1>
//           <p className="text-gray-500 mt-2">FSSAI Leads Dashboard</p>
//         </div>

//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Enter username"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Enter password"
//               required
//             />
//           </div>

//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-2xl text-center font-medium">
//               {error}
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-4 rounded-2xl font-semibold text-lg transition"
//           >
//             {loading ? 'Logging in...' : 'Login to Dashboard'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// src/components/Admin/AdminLogin.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const correctUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (!correctUsername || !correctPassword) {
      setError("❌ Environment variables missing. Check .env file.");
      setLoading(false);
      return;
    }

    if (username.trim() === correctUsername && password === correctPassword) {
      // Store both login flag and credentials for Basic Auth
      sessionStorage.setItem('adminLoggedIn', 'true');
      sessionStorage.setItem('adminCredentials', btoa(`${correctUsername}:${correctPassword}`));
      
      navigate('/admin/dashboard');
    } else {
      setError('❌ Invalid username or password');
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center px-4 py-12 md:py-16">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 w-full max-w-md p-6 sm:p-10">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-navy-900 text-white rounded-2xl flex items-center justify-center mb-5 shadow-sm">
            <FaLock size={26} aria-hidden="true" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900">Admin Login</h1>
          <span className="mx-auto mt-3 block h-1 w-12 rounded-full bg-orange-500"></span>
          <p className="text-slate-500 mt-3 text-sm md:text-base">FSSAI Leads Dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="admin-username" className="block text-sm font-semibold text-slate-700 mb-1.5">Username</label>
            <input
              id="admin-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition duration-200 hover:border-slate-400 focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label htmlFor="admin-password" className="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition duration-200 hover:border-slate-400 focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <div role="alert" className="bg-red-50 border border-red-200 text-red-800 p-3.5 rounded-lg text-center text-sm font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-orange-600 hover:bg-orange-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white py-3.5 font-semibold text-base shadow-sm shadow-orange-600/30 transition-all duration-200 hover:-translate-y-0.5 disabled:hover:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            {loading ? 'Logging in...' : 'Login to Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}