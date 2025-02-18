import footer from "../assets/footer.svg";
import phone from "../assets/phone.svg";
import call from "../assets/call.svg";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const contacts = [
  { icon: phone, contact: "+234 810 997 6152" },
  { icon: call, contact: "+234 201 330 9116" },
  { icon: location, contact: "16, Adeola Hopewell, Victoria Island, Lagos, Nigeria." },
  { icon: email, contact: "sales@cyclebreeze.com" },
];

const Footer = () => {
  return (
    <>
    <section
      className="relative bg-[#0D1D3B/50] bg-cover w-full h-full overflow-hidden flex flex-col items-center justify-center text-center p-6 md:p-12"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div>
        <h3 className="font-bold text-[30px] leading-[24px] text-white">Do you have any idea?</h3>
        <button 
          className="mt-4 p-4 h-[56px] bg-none border-1 border-white rounded-[30px] text-white"
          style={{
            color: "#FFFFFF",
            // backgroundColor: '#6FC446',
            border: `1px solid white`,
            borderRadius: "30px",
          }}
        >
          Lets’s help you bring to live
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center md:gap-16">
        {contacts.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-4 mt-8">
            <><img src={item.icon} alt="contact icon" className="w-[20px] h-[20px]" /></>
            <><p className="text-white text-center text-sm font-semibold leading-[21px]">{item.contact}</p></>
          </div>
        ))}
      </div>
    </section>
    <div className="hidden bg-[#0D1D3B] text-white text-center p-4 sm:flex justify-between items-center">
      <div className="flex justify-center items-center gap-4">
        <a href="https://www.instagram.com/cyclebreeze_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-400 text-xl hover:text-white" />
        </a>
        <a href="https://x.com/cyclebreeze_" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-400 text-xl hover:text-white" />
        </a>
      </div>
      <div className="flex justify-center items-center gap-4">
        <p>&copy; 2021 CycleBreeze</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <a href="https://x.com/cyclebreeze_" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-400 text-xl hover:text-white" />
        </a>
        <a href="https://www.youtube.com/@cyclebreeze6780" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-gray-400 text-xl hover:text-white" />
        </a>
      </div>
    </div>
    <div className="sm:hidden bg-[#0D1D3B] text-white text-center p-4 flex flex-col items-center">
      {/* Social Icons */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
        <a href="https://www.instagram.com/cyclebreeze_/" target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <FaInstagram className="text-gray-400 text-2xl hover:text-white" />
        </a>
        <a href="https://www.instagram.com/cyclebreeze_/" target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <FaInstagram className="text-gray-400 text-2xl hover:text-white" />
        </a>
        <a href="https://x.com/cyclebreeze_" target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <FaTwitter className="text-gray-400 text-2xl hover:text-white" />
        </a>
        <a href="https://www.youtube.com/@cyclebreeze6780" target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <FaYoutube className="text-gray-400 text-2xl hover:text-white" />
        </a>
      </div>
      
      {/* Copyright & Links */}
      <div className="text-sm mt-4">
        <p>&copy; 2022 Cycle Breeze. All rights reserved</p>
        <div className="flex justify-center gap-2 mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>-</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </div>
    </>
  )
}
export default Footer