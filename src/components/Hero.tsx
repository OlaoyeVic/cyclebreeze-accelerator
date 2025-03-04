import { useNavigate } from "react-router-dom";
import hero from "../assets/2366475c0b44d9a806005344b7233978.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-full md:min-h-screen flex items-center justify-center bg-white md:px-40 sm:pt-20 pt-5 mt-16 sm:mt-0">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full bg-gradient-to-r from-[#F0F9EC] via-[#F0F9EC] via-[74%] to-transparent md:shadow-lg md:rounded-xl p-8 text-center">
        <div className="">
          {/* Heading */}
          <h1 className="text-left text-[55px] font-bold text-[#191716] leading-[64px]">
            Skyrocket Your Sales 🚀 <br />
            With{" "}
            <span className="text-green-700">
              10X Sales Accelerator Program
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-left max-w-[699px] mt-4 text-gray-600 font-normal text-lg">
            Unlock the future of your business growth with the 10X Sales System,
            an all-inclusive sales acceleration program designed to transform
            your sales process seamlessly, affordably, and effectively.
          </p>

          {/* CTA Button */}
          <div className="mt-6 flex justify-start items-center">
            <a
              href="#"
              className="bg-gradient-to-r from-[#6FC446] via-transparent to-[#C3E6B2] text-[#313134] font-normal text-xs px-4 py-2 rounded-[34px] hover:bg-green-700"
              onClick={() => navigate("/sales/accelerator-application")}
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="mt-6 hidden lg:block">
          <img
            src={hero}
            alt="Sales Growth"
            className="w-[963.56px] h-[573px]  mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
