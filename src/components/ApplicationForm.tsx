import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    businessAddress: "",
    company: "",
    website: "",
    industry: "",
    businessDuration: "",
    salesTeamSize: "",
    salesChallenge: "",
    leadGeneration: "",
    salesTools: "",
    pastPrograms: "",
    salesGoals: "",
    reasonForJoining: "",
    referrals: [
      { name: "", contactPerson: "", phoneNumber: "", email: "", description: "" },
      { name: "", contactPerson: "", phoneNumber: "", email: "", description: "" },
    ],
    interest: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReferralChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newReferrals = [...prev.referrals];
      newReferrals[index] = { ...newReferrals[index], [name]: value };
      return { ...prev, referrals: newReferrals };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await addDoc(collection(db, "applications"), formData);
      setMessage("Application submitted successfully!");
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        businessAddress: "",
        company: "",
        website: "",
        industry: "",
        businessDuration: "",
        salesTeamSize: "",
        salesChallenge: "",
        leadGeneration: "",
        salesTools: "",
        pastPrograms: "",
        salesGoals: "",
        reasonForJoining: "",
        referrals: [
          { name: "", contactPerson: "", phoneNumber: "", email: "", description: "" },
          { name: "", contactPerson: "", phoneNumber: "", email: "", description: "" },
        ],
        interest: "",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      setMessage("Failed to submit. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full mx-auto sm:p-6 p-3 mb-10">
      <h1 className="text-2xl sm:text-4xl font-bold">10X Sales Accelerator Program Application Form</h1>
      <p className="text-[#313134] mt-2">
        Thank you for your interest in the 10X Sales Accelerator Program! To help us better understand your business needs and determine if you qualify for our exclusive accelerator, please fill out the comprehensive form below.
      </p>
      
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <h2 className="text-lg font-semibold mt-6">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <input type="text" placeholder="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} className="border-b border-gray-300 p-2 outline-none" />
        <input type="text" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border-b border-gray-300 p-2 outline-none" />
        <input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} className="border-b border-gray-300 p-2 outline-none md:col-span-2" />
        <input type="text" placeholder="Business Address" name="businessAddress" value={formData.businessAddress} onChange={handleChange} className="border-b border-gray-300 p-2 outline-none" />
        <input type="text" placeholder="Company" name="company" value={formData.company} onChange={handleChange} className="border-b border-gray-300 p-2 outline-none" />
        <input type="text" placeholder="Website" name="website" value={formData.website} onChange={handleChange} className="border-b border-gray-300 p-2 outline-none md:col-span-2" />
      </div>
      
      <h2 className="text-lg font-semibold mt-6">Business Information</h2>
      <div className="mt-2 space-y-4">
        <input type="text" placeholder="What industry is your business in?" name="industry" value={formData.industry} onChange={handleChange} className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="How long has your business been operating?" name="businessDuration" value={formData.businessDuration} onChange={handleChange} className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="How many sales people are currently on your team?" name="salesTeamSize" value={formData.salesTeamSize} onChange={handleChange} className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="What is your biggest sales challenge right now?" name="salesChallenge" value={formData.salesChallenge} onChange={handleChange} className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="How do you currently generate leads?" name="leadGeneration" value={formData.leadGeneration} onChange={handleChange} className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="Do you currently use any sales tools (CRM, email marketing, call systems)?" className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="Have you previously invested in any sales development programs?" className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="What are your sales goals for the next 6 months?" className="border-b border-gray-300 p-2 outline-none w-full" />
        <input type="text" placeholder="Why do you believe the 10X Sales Accelerator Program is the right fit for your business?" className="border-b border-gray-300 p-2 outline-none w-full" />
      </div>
      
      <h2 className="text-lg font-semibold mt-6">Referral Section</h2>
      <p className="text-gray-600">Please recommend TWO other businesses that could benefit from this program.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {/* {[1, 2].map((num) => (
          <div key={num} className="space-y-2">
            <input type="text" placeholder={`Business ${num} Name`} className="border-b border-gray-300 p-2 outline-none w-full" />
            <input type="text" placeholder="Contact Person" className="border-b border-gray-300 p-2 outline-none w-full" />
            <input type="text" placeholder="Phone Number" className="border-b border-gray-300 p-2 outline-none w-full" />
            <input type="email" placeholder="Email Address" className="border-b border-gray-300 p-2 outline-none w-full" />
            <input type="text" placeholder="Brief Description of their Business" className="border-b border-gray-300 p-2 outline-none w-full" />
          </div>
        ))} */}
        {[0, 1].map((index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Business Name" value={formData.referrals[index].name} onChange={(e) => handleReferralChange(index, e)} className="border-b p-2 outline-none" />
            <input type="text" name="contactPerson" placeholder="Contact Person" value={formData.referrals[index].contactPerson} onChange={(e) => handleReferralChange(index, e)} className="border-b p-2 outline-none" />
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.referrals[index].phoneNumber} onChange={(e) => handleReferralChange(index, e)} className="border-b p-2 outline-none" />
            <input type="email" name="email" placeholder="Email Address" value={formData.referrals[index].email} onChange={(e) => handleReferralChange(index, e)} className="border-b p-2 outline-none" />
            <textarea name="description" placeholder="Brief Description of their Business" value={formData.referrals[index].description} onChange={(e: any) => handleReferralChange(index, e)} className="border-b p-2 outline-none w-full" />
          </div>
        ))}
      </div>
      
      <h2 className="text-lg font-semibold mt-6">Final Step</h2>
      <p className="text-gray-600">In case you do not emerge as a winner of the Accelerator Program, would you still like to scale up your sales and get access to our 10X Sales System packages?</p>
      <div className="mt-2 space-y-2">
        <label className="flex items-center space-x-2">
          <input type="radio" name="interest" value="explore" onChange={handleChange} className="form-radio" />
          <span>Yes, I'm interested in scaling up my sales and would like to explore the packages.</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="interest" value="discount" onChange={handleChange} className="form-radio" />
          <span>Yes, I'm interested but only with a discount.</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="interest" value="no" onChange={handleChange} className="form-radio" />
          <span>No, I'm not interested at this time.</span>
        </label>
      </div>
      <button type="submit" disabled={loading} className="bg-green-600 text-white py-2 px-4 rounded">{loading ? "Submitting..." : "Submit"}</button>

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
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </section>
  );
};

export default ApplicationForm;