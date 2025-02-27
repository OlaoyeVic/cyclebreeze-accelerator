import { useNavigate } from "react-router-dom";
import features1 from "../assets/features1.svg";
import features2 from "../assets/features2.svg";
import features3 from "../assets/features3.svg";
import features4 from "../assets/features4.svg";
import features5 from "../assets/features5.svg";
import features6 from "../assets/features6.svg";
import features7 from "../assets/features7.svg";

const features = [
  { icon: features1, title: "50 – 800 Quality Leads Daily" },
  { icon: features2, title: "Sales Scripts and Objection Handling" },
  { icon: features3, title: "Team Training & Playbook" },
  { icon: features4, title: "CRM Setup for Lead Management" },
  {
    icon: features5,
    title:
      "Outbound & Inbound Call System (Up to 10 Agents with Interactive Voice Response option)",
  },
  { icon: features6, title: "Affordable Tool Access & Seamless Integrations" },
  {
    icon: features7,
    title: "Automated Email Campaigns (3,000 – 10,000+ Monthly Emails)",
  },
];

const SalesFeatures = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:px-40 bg-white text-center">
      <div className="w-full bg-gradient-to-r from-[#F0F9EC] via-[#F0F9EC] via-[74%] to-transparent sm:shadow-lg sm:rounded-xl p-8 text-center">
        <h3 className="text-[#6FC446] uppercase text-sm font-semibold mb-2">
          Our Features
        </h3>
        <h2 className="text-[#1E1E24] text-4xl font-normal mb-8">
          What You Get with the 10X Sales System
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:h-[250px] max-w-5xl mx-auto px-6 mt-16">
          {features.slice(0, 4).map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-[#F0F9EC] shadow-md rounded-lg flex flex-col justify-center items-center text-center border border-gray-200 hover:shadow-lg transition"
            >
              <img
                src={feature.icon}
                alt="Sales Feature"
                className="w-[72px] h-[72px]"
              />
              <p className="text-gray-700 mt-3 font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[250px] max-w-5xl mx-auto px-6 mt-6">
          {features.slice(4).map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-[#F0F9EC] shadow-md rounded-lg flex flex-col justify-center items-center text-center border border-gray-200 hover:shadow-lg transition md:col-span-1.5"
            >
              <img
                src={feature.icon}
                alt="Sales Feature"
                className="w-[72px] h-[72px]"
              />
              <p className="text-gray-700 mt-3 font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        className="w-[255px] h-[80px] bg-gradient-to-r from-[#6FC446] via-transparent to-[#C3E6B2] text-[#313134] font-normal text-xl px-4 py-2 rounded-[34px] hover:bg-green-700 mt-20"
        onClick={() => navigate("/sales/accelerator-application")}
      >
        Apply Now
      </button>
    </section>
  );
};

export default SalesFeatures;
