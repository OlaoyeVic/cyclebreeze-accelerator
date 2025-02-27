// interface DownloadModalProps {
//   closeModal: () => void;
// }

// const DownloadModal = ({ closeModal }: DownloadModalProps) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg p-8 w-96 relative">
//         <button
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//           onClick={closeModal}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//         <form
//           className="flex flex-col justify-center items-start gap-4 mt-8"
//           action="https://drive.google.com/file/d/1KWF9oZFq1Ks9gD-x-fM5rcnXY2KLqeMD/view"
//           method="POST"
//         >
//           <div className="w-full">
//             <label
//               htmlFor="name"
//               className="block text-left text-gray-700 font-medium mb-2"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="w-full">
//             <label
//               htmlFor="firstName"
//               className="block text-left text-gray-700 font-medium mb-2"
//             >
//               Surname
//             </label>
//             <input
//               type="text"
//               id="surName"
//               name="surname"
//               className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="w-full">
//             <label
//               htmlFor="email"
//               className="block text-left text-gray-700 font-medium mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="w-full">
//             <label
//               htmlFor="message"
//               className="block text-left text-gray-700 font-medium mb-2"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={4}
//               maxLength={200}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="w-full">
//             <button
//               type="submit"
//               className="bg-[#6FC446] text-white font-medium py-2 px-4 rounded-md w-full"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default DownloadModal;

import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

interface DownloadModalProps {
  closeModal: () => void;
}

const DownloadModal = ({ closeModal }: DownloadModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "userSubmissions"), {
        ...formData,
        timestamp: Timestamp.now(), // Add timestamp for sorting
      });

      alert("Submission successful!");
      setFormData({ name: "", surname: "", email: "" });
      closeModal();
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Error submitting form. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-96 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          ✖
        </button>
        <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="border p-2 rounded" />
          <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} required className="border p-2 rounded" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="border p-2 rounded" />
          <button type="submit" className="bg-green-500 text-white py-2 rounded" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DownloadModal;
