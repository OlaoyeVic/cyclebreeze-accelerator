import hero from '../assets/hero.svg';

const Hero = () => {
  return (
    <section className="w-full h-full md:min-h-screen flex items-center justify-center bg-white md:p-40 mt-16 sm:mt-0">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full bg-gradient-to-r from-[#F0F9EC] via-[#F0F9EC] via-[74%] to-transparent md:shadow-lg md:rounded-xl p-8 text-center">
        <div className="">
          {/* Heading */}
          <h1 className="text-left text-[55px] font-bold text-gray-900 leading-tight">
            Skyrocket Your Sales 🚀 <br />
            With <span className="text-green-700">10X Sales Accelerator</span>
          </h1>

          {/* Subtitle */}
          <p className="text-left max-w-[699px] mt-4 text-gray-600 font-normal text-lg">
            Unlock the future of your business growth with the 10X Sales System, an all-inclusive
            sales acceleration program designed to transform your sales process seamlessly,
            affordably, and effectively.
          </p>

          {/* CTA Button */}
          <div className="mt-6 flex justify-start items-center">
            <a
              href="#"
              className="bg-gradient-to-r from-[#6FC446] via-transparent to-[#C3E6B2] text-[#313134] font-normal text-xs px-4 py-2 rounded-[34px] hover:bg-green-700"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="mt-6">
          <img
            src={hero}
            alt="Sales Growth"
            className="w-[763.56px] h-[573px] max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;