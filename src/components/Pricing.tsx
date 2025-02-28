const PricingSection = () => {
  return (
    <section className="w-full flex flex-col min-h-screen justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-white w-full">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 sm:mx-40">
        {/* Features + Start-up Plan */}
        <div className="grid grid-cols-2 gap-4">
          {/* Features Column */}
          <div className="bg-purple-100 rounded-2xl font-medium">
            <div className="h-[70px] px-6 py-3">
              <p className="text-lg font-bold">Features</p>
            </div>
            {/* Feature Items */}
            <ul className="space-y-4 mt-4">
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">Sales system tools setup</li>
              <li className="h-[80px] px-6 py-6">Number of Student(s)</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">Training</li>
              <li className="h-[80px] px-6 py-6">First Month Tools Subscription</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">Subsequent Monthly Tools Subscription</li>
              <li className="h-[80px] px-6 py-6">Consultation</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">Recruit, Onboard & Train Sales Talent</li>
              <li className="h-[80px] px-6 py-6">Call agent</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">Phone Number</li>
              <li className="h-[80px] px-6 py-6">Monthly Email</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">Leads Monthly</li>
            </ul>
          </div>
          {/* Start-up Plan */}
          <div className="sm:w-[244.33px] bg-[#FCF670] rounded-2xl text-center">
            <div className="h-[70px] px-6 py-3">
              <p className="font-bold text-lg">Start up</p>
              <p className="font-bold text-xl">(N450,000)</p>
            </div>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">One-off</li>
              <li className="h-[80px] px-6 py-6">1</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">3 days - 10 hours</li>
              <li className="h-[80px] px-6 py-6">Basic - N35,000 + $49</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">Basic - N32,000</li>
              <li className="h-[80px] px-6 py-6">30 min</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">-</li>
              <li className="h-[80px] px-6 py-6">Up to 5</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">1 Nigeria</li>
              <li className="h-[80px] px-6 py-6">3,000</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">3,300</li>
            </ul>
            <button 
              className="my-4 bg-gradient-to-r from-[#6FC446] via-transparent to-[#C3E6B2] p-2 font-bold text-lg leading-[32px] text-[#676767] py-2 px-4 rounded-[32px]"            
              onClick={() => window.open('https://hirerome.com/sales', '_blank')}
            >
              Get Started &gt;
            </button>
          </div>
        </div>
        {/* Growth + Scale Plans */}
        <div className="grid grid-cols-2 gap-4">
          {/* Growth Plan */}
          <div className="sm:w-[244.33px] bg-[#73CAE6] rounded-2xl text-center">
            <div className="h-[70px] px-6 py-3">
              <p className="font-bold text-lg">Growth</p>
              <p className="font-bold text-xl">(N900,000)</p>
            </div>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">One-off + one month maintenance</li>
              <li className="h-[80px] px-6 py-6">2</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">4 days - 12 hours</li>
              <li className="h-[80px] px-6 py-6">Growth - N35,000 + $49</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">Basic - N40,000 + $25</li>
              <li className="h-[80px] px-6 py-6">1 hour</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">1 staff</li>
              <li className="h-[80px] px-6 py-6">Up to 7</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">1 Nigeria + 1 US Number available</li>
              <li className="h-[80px] px-6 py-6">5,000</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">6,600</li>
            </ul>
            <button 
              className="my-4 bg-gradient-to-r from-[#6FC446] via-transparent to-[#C3E6B2] p-2 font-bold text-lg leading-[32px] text-[#676767] py-2 px-4 rounded-[32px]"
              onClick={() => window.open('https://hirerome.com/sales', '_blank')}
            >
              Get Started &gt;
            </button>
          </div>
          {/* Scale Plan */}
          <div className="sm:w-[244.33px] bg-green-100 rounded-2xl text-center">
            <div className="h-[70px] px-6 py-3">
              <p className="font-bold text-lg">Scale</p>
              <p className="font-bold text-xl">(N1,500,000)</p>
            </div>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">One-off + two-month maintenance</li>
              <li className="h-[80px] px-6 py-6">4</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">5 days - 15 hours</li>
              <li className="h-[80px] px-6 py-6">Premium - N35,000 + $74</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">Basic - N45,000 + $49</li>
              <li className="h-[80px] px-6 py-6">2 hours</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">3 staff</li>
              <li className="h-[80px] px-6 py-6">Up to 8</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">1 Nigeria + extra US and Nigeria numbers available</li>
              <li className="h-[80px] px-6 py-6">10,000</li>
              <li className="h-[80px] bg-[#F8F8F8] px-6 py-6">10,000</li>
            </ul>
            <button 
              className="my-4 bg-gradient-to-r from-[#6FC446] via-transparent to-[#C3E6B2] p-2 font-bold text-lg leading-[32px] text-[#676767] py-2 px-4 rounded-[32px]"
              onClick={() => window.open('https://hirerome.com/sales', '_blank')}
            >
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;