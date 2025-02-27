// import { useState, useEffect } from "react";
// import { db } from "../firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";
// import * as XLSX from "xlsx";

// const AdminDashboard = () => {
//   const [password, setPassword] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userData, setUserData] = useState<any[]>([]);
//   const correctPassword = "secureAdmin123";

//   useEffect(() => {
//     if (isAuthenticated) {
//       fetchData();
//     }
//   }, [isAuthenticated]);

//   const handleLogin = () => {
//     if (password === correctPassword) {
//       setIsAuthenticated(true);
//     } else {
//       alert("Incorrect password!");
//     }
//   };

//   const fetchData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "userSubmissions"));
//       const data = querySnapshot.docs.map(doc => doc.data());
//       setUserData(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       alert("Failed to fetch data.");
//     }
//   };

//   const handleDownload = () => {
//     if (userData.length === 0) {
//       alert("No user data available!");
//       return;
//     }

//     const worksheet = XLSX.utils.json_to_sheet(userData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

//     XLSX.writeFile(workbook, "user_submissions.xlsx");
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h1 className="text-xl font-bold mb-4">Admin Login</h1>
//         <input
//           type="password"
//           placeholder="Enter Admin Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border px-4 py-2 rounded-md mb-4"
//         />
//         <button onClick={handleLogin} className="bg-blue-500 text-white px-6 py-2 rounded-md">
//           Login
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//       <button onClick={handleDownload} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
//         Download User Submissions
//       </button>
//     </div>
//   );
// };

// export default AdminDashboard;

import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import * as XLSX from "xlsx";

const AdminDashboard = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<any[]>([]);
  const [acceleratorData, setAcceleratorData] = useState<any[]>([]);
  const correctPassword = "admin";

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserData();
      fetchAcceleratorData();
      listenForUpdates();
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  const fetchUserData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "userSubmissions"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setUserData(prevData => {
        const newData = data.filter(newItem => !prevData.some(prevItem => prevItem.id === newItem.id));
        return [...prevData, ...newData];
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("Failed to fetch user data.");
    }
  };

  const fetchAcceleratorData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "applications"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setAcceleratorData(prevData => {
        const newData = data.filter(newItem => !prevData.some(prevItem => prevItem.id === newItem.id));
        return [...prevData, ...newData];
      });
    } catch (error) {
      console.error("Error fetching accelerator data:", error);
      alert("Failed to fetch accelerator data.");
    }
  };

  const listenForUpdates = () => {
    const unsubscribeUser = onSnapshot(collection(db, "userSubmissions"), (snapshot) => {
      const updatedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setUserData(prevData => {
        const mergedData = updatedData.filter(newItem => !prevData.some(prevItem => prevItem.id === newItem.id));
        return [...prevData, ...mergedData];
      });
    });

    const unsubscribeAccelerator = onSnapshot(collection(db, "acceleratorSubmissions"), (snapshot) => {
      const updatedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setAcceleratorData(prevData => {
        const mergedData = updatedData.filter(newItem => !prevData.some(prevItem => prevItem.id === newItem.id));
        return [...prevData, ...mergedData];
      });
    });

    return () => {
      unsubscribeUser();
      unsubscribeAccelerator();
    };
  };

  const handleDownloadUserData = () => {
    if (userData.length === 0) {
      alert("No user data available!");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(userData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    XLSX.writeFile(workbook, "user_submissions.xlsx");
  };

  const handleDownloadAcceleratorData = () => {
    if (acceleratorData.length === 0) {
      alert("No accelerator data available!");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(acceleratorData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Accelerator");

    XLSX.writeFile(workbook, "accelerator_submissions.xlsx");
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-xl font-bold mb-4">Admin Login</h1>
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 rounded-md mb-4"
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white px-6 py-2 rounded-md">
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="flex gap-4">
        <button
          onClick={handleDownloadUserData}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Download User Submissions
        </button>

        <button
          onClick={handleDownloadAcceleratorData}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
        >
          Download Accelerator Data
        </button>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">User Submissions</h2>
        <ul className="mt-2">
          {userData.map((user, index) => (
            <li key={user.id || index} className="border p-2 rounded-md mb-2">
              {JSON.stringify(user)}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Accelerator Submissions</h2>
        <ul className="mt-2">
          {acceleratorData.map((accel, index) => (
            <li key={accel.id || index} className="border p-2 rounded-md mb-2">
              {JSON.stringify(accel)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;