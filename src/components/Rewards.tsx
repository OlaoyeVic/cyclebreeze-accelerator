import finalist1 from "../assets/finalist1.svg";
import finalist2 from "../assets/finalist2.svg";
import finalist3 from "../assets/finalist3.svg";
import fileIcon from "../assets/file.svg";
import { useState } from "react";
import DownloadModal from "./DownloadModal";

const rewards = [
  {prize: finalist1, reward: "1 Finalist = Scale Sales Package"},
  {prize: finalist2, reward: "3 Finalist = Growth Sales package"},
  {prize: finalist3, reward: "6 Finalist = Startup Sales Package"}
]

const Rewards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="bg-white py-16 px-2 text-center">
      <h2 className="text-3xl font-bold mb-8">Rewards</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {rewards.map((item, index) => (
          <div key={index} className="p-6 text-center w-64 flex flex-col items-center gap-4">
            <div className={`p-6 flex justify-center ${index % 2 === 0 ? "bg-[#F8F8F8]" : "bg-[#FFFFFF]"} rounded-sm`}>
              <img src={item.prize} alt={item.reward} className="w-[90px]" />
            </div>
            <div>
              <h3 className="text-center font-normal text-base font-normal leading-[27px] text-black">{item.reward}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="md:mx-40 bg-[#6FC446] mt-20 flex flex-col items-center justify-center gap-8 p-4 sm:p-16 rounded-[32px]">
        <div className="p-6 text-center">
          <h3 className="sm:max-w-[660px] max-w-[454px] text-white text-center font-bold text-2xl sm:text-4xl leading-[46px]">Not Interested in the Accelerator but Want to 10X Your Sales?</h3>
          <p className="text-white font-normal sm:max-w-[843px] max-w-[454px] mt-3">If you're ready to invest in your sales growth now, click below to choose a plan and get started immediately!</p>
        </div>
        <div className="py-16 px-4 sm:px-8 bg-[#549B31] rounded-[32px] flex flex-row justify-between items-center gap-8">
          <div className="">
            <h3 className="font-bold text-lg sm:text-2xl text-white text-left">Get the 10X Sales System Now</h3>
            <p className="text-white text-sm sm:text-lg font-normal text-left mt-2">Reach out! &gt;</p>
          </div>
          <div className="">
            <button className="w-[164px] h-[56px] rounded-[32px] bg-white font-normal text-xs sm:text-sm p-3">Click here {" "} &gt;</button>
          </div>
        </div>
      </div>
      <div className="sm:mx-20 mt-8 sm:p-16 p-8">
        <h5 className="text-black text-center font-semibold text-lg sm:text-2xl">Download the 10X Sales Training Syllabus</h5>
        <p className="text-center font-normal text-sm sm:text-xl my-3">Get a detailed look at our comprehensive training program and see how we equip your team to 10X your sales.</p>
        <div className="flex justify-between items-center bg-[#D9D9D9] sm:p-4 p-2">
          <div className="flex items-center gap-4 sm:p-4 p-2">
            <div>
              <img src={fileIcon} alt="file icon" className="w-[48px] h-[48px]" />
            </div>
            <div className="text-left">
              <h6>Sales Training Syllabus .pdf</h6>
              <p className="text-left mt-1">12.6 MB</p>
            </div>
          </div>
          <div>
            <button 
              className="bg-[#6FC446] text-white sm:p-2 p-1 text-sm"
              onClick={openModal}
            >
              Download File
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <DownloadModal closeModal={closeModal} />
      )}
    </section>
  );
}
export default Rewards;