import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import sales1 from "../assets/sales1.svg";
import sales2 from "../assets/sales2.svg";
import { useNavigate } from "react-router-dom";

const SalesSection = () => {
  const navigate = useNavigate();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("sales-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setHasScrolled(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="sales-section"
      className="bg-[#EFF8EB] py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* First Card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={hasScrolled ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, type: "spring" }}
          className="bg-[#548AEC]/[.40] p-6 md:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row md:justify-between items-center gap-6"
          viewport={{ once: true }}
        >
          <div className="md:w-1/2">
            <p className="text-xs font-normal text-[#F1AD71] font-semibold">
              SALES & LEADS
            </p>
            <h2 className="text-[40px] font-normal text-gray-900 mt-2">
              Ready to 10X Your Sales?
            </h2>
            <p className="text-[#676767] mt-2">
              Don’t wait to transform your business! Whether you’re a startup or
              an established company, our 10X Sales System is designed to scale
              with you.
            </p>
            <button
              className="h-[71px] mt-4 bg-gradient-to-r from-[#6FC446] via-transparent to-[#C3E6B2] text-[#313134] font-normal text-xs px-4 py-2 rounded-[34px] hover:bg-green-700"
              onClick={() =>
                window.open("https://hirerome.com/sales", "_blank")
              }
            >
              Get the 10X Sales System Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={sales1}
              alt="Sales System"
              className="rounded-lg w-[452px] h-[461px]"
            />
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={hasScrolled ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, type: "spring" }}
          className="bg-[#F5F5FF] p-6 md:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row md:justify-between items-center gap-6"
        >
          <div className="md:w-1/2">
            <p className="text-xs font-normal text-[#F1AD71] font-semibold">
              SALES & LEADS
            </p>
            <h2 className="text-[40px] font-normal text-gray-900 mt-2">
              10X Sales Accelerator Program
            </h2>
            <p className="text-[#676767] mt-2 font-normal text-lg">
              Apply for our exclusive 10X Sales Accelerator Program and stand a
              chance to win a complete sales system setup for your business.
            </p>
            <button
              className="h-[71px] mt-4 bg-gradient-to-r from-[#6FC446] via-transparent to-[#C3E6B2] text-[#313134] font-normal text-xs px-4 py-2 rounded-[34px] hover:bg-green-700"
              onClick={() => navigate("/sales/accelerator-application")}
            >
              Apply for the Accelerator Program
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={sales2}
              alt="Accelerator Program"
              className="rounded-lg w-[452px] h-[461px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SalesSection;
