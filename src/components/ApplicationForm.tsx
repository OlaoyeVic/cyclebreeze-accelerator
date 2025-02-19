const ApplicationForm = () => {
  return (
    <section className="w-full mx-auto sm:p-6 p-3 mb-10">
      <h1 className="text-2xl sm:text-4xl font-bold">10X Sales Accelerator Program Application Form</h1>
      <p className="text-[#313134] mt-2">
        Thank you for your interest in the 10X Sales Accelerator Program! To help us better understand your business needs and determine if you qualify for our exclusive accelerator, please fill out the comprehensive form below.
      </p>
      
      <h2 className="text-lg font-semibold mt-6">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <input type="text" placeholder="Full Name" className="border-b border-gray-300 p-2 outline-none" />
        <input type="text" placeholder="Phone Number" className="border-b border-gray-300 p-2 outline-none" />
        <input type="email" placeholder="Email Address" className="border-b border-gray-300 p-2 outline-none md:col-span-2" />
        <input type="text" placeholder="Business Address" className="border-b border-gray-300 p-2 outline-none" />
        <input type="text" placeholder="Company" className="border-b border-gray-300 p-2 outline-none" />
        <input type="text" placeholder="Website" className="border-b border-gray-300 p-2 outline-none md:col-span-2" />
      </div>
      
      <h2 className="text-lg font-semibold mt-6">Business Information</h2>
      <div className="mt-2 space-y-4">
        <input type="text" placeholder="What industry is your business in?" className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="How long has your business been operating?" className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="How many sales people are currently on your team?" className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="What is your biggest sales challenge right now?" className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="How do you currently generate leads?" className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="Do you currently use any sales tools (CRM, email marketing, call systems)?" className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="Have you previously invested in any sales development programs?" className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="What are your sales goals for the next 6 months?" className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="Why do you believe the 10X Sales Accelerator Program is the right fit for your business?" className="border-b border-gray-300 p-2 outline-none w-full" />
      </div>
      
      <h2 className="text-lg font-semibold mt-6">Referral Section</h2>
      <p className="text-gray-600">Please recommend TWO other businesses that could benefit from this program.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {[1, 2].map((num) => (
          <div key={num} className="space-y-2">
            <input type="text" placeholder={`Business ${num} Name`} className="border-b border-gray-300 p-2 outline-none w-full" />
            <input type="text" placeholder="Contact Person" className="border-b border-gray-300 p-2 outline-none w-full" />
            <input type="text" placeholder="Phone Number" className="border-b border-gray-300 p-2 outline-none w-full" />
            <input type="email" placeholder="Email Address" className="border-b border-gray-300 p-2 outline-none w-full" />
            <input type="text" placeholder="Brief Description of their Business" className="border-b border-gray-300 p-2 outline-none w-full" />
          </div>
        ))}
      </div>
      
      <h2 className="text-lg font-semibold mt-6">Final Step</h2>
      <p className="text-gray-600">In case you do not emerge as a winner of the Accelerator Program, would you still like to scale up your sales and get access to our 10X Sales System packages?</p>
      <div className="mt-2 space-y-2">
        <label className="flex items-center space-x-2">
          <input type="radio" name="interest" value="explore" className="form-radio" />
          <span>Yes, I'm interested in scaling up my sales and would like to explore the packages.</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="interest" value="discount" className="form-radio" />
          <span>Yes, I'm interested but only with a discount.</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="interest" value="no" className="form-radio" />
          <span>No, I'm not interested at this time.</span>
        </label>
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
    </section>
  );
};

export default ApplicationForm;