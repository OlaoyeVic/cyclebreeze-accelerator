import { FaPhoneAlt, FaEnvelopeOpenText, FaChartLine, FaBook, FaUserFriends, FaDatabase } from "react-icons/fa";

const features = [
  { icon: <FaDatabase className="text-teal-500 text-3xl" />, title: "50 – 800 Quality Leads Daily" },
  { icon: <FaBook className="text-indigo-500 text-3xl" />, title: "Sales Scripts and Objection Handling" },
  { icon: <FaUserFriends className="text-green-500 text-3xl" />, title: "Team Training & Playbook" },
  { icon: <FaChartLine className="text-blue-500 text-3xl" />, title: "CRM Setup for Lead Management" },
  { icon: <FaPhoneAlt className="text-orange-500 text-3xl" />, title: "Outbound & Inbound Call System (Up to 10 Agents with Interactive Voice Response option)" },
  { icon: <FaChartLine className="text-pink-500 text-3xl" />, title: "Affordable Tool Access & Seamless Integrations" },
  { icon: <FaEnvelopeOpenText className="text-green-500 text-3xl" />, title: "Automated Email Campaigns (3,000 – 10,000+ Monthly Emails)" }
];

const SalesFeatures = () => {
  return (
    <section className="py-16 px-40 bg-white text-center">
      <div className="w-full bg-gradient-to-r from-[#F0F9EC] via-[#F0F9EC] via-[74%] to-transparent shadow-lg rounded-xl p-8 text-center">
        <h3 className="text-[#6FC446] uppercase text-sm font-semibold mb-2">Our Features</h3>
        <h2 className="text-[#1E1E24] text-4xl font-normal mb-8">What You Get with the 10X Sales System</h2>
        <div className="grid md:grid-cols-4 gap-6 h-[313px] max-w-5xl mx-auto px-6 mt-16">
          {features.slice(0, 4).map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-[#F0F9EC] shadow-md rounded-lg flex flex-col justify-center items-center text-center border border-gray-200 hover:shadow-lg transition"
            >
              {feature.icon}
              <p className="text-gray-700 mt-3 font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 h-[313px] max-w-5xl mx-auto px-6 mt-6">
          {features.slice(4).map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-[#F0F9EC] shadow-md rounded-lg flex flex-col justify-center items-center text-center border border-gray-200 hover:shadow-lg transition md:col-span-1.5"
            >
              {feature.icon}
              <p className="text-gray-700 mt-3 font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>

      <button 
        className="w-[255px] h-[80px] bg-gradient-to-r from-[#6FC446] via-transparent to-[#C3E6B2] text-[#313134] font-normal text-xl px-4 py-2 rounded-[34px] hover:bg-green-700 mt-20"
      >
        Apply Now
        </button>
    </section>
  );
};

export default SalesFeatures;
