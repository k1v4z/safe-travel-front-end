const PlanTimeline = ({ plans }) => {
  return (
    <div className="w-full bg-blue-200 rounded-xl shadow-lg overflow-hidden mt-1 p-6">
      {/* My Plan Header */}
      <div className="w-3/4 flex items-center bg-blue-300 p-4 rounded-lg mb-6">
        <img className="w-16 h-16 mr-4" src="/pictures/target--shop-bullseye-arrow-target.png" alt="My Plan" />
        <div>
          <h1 className="text-lg font-bold">My Plan</h1>
          <h2 className="text-3xl text-green-700">HUE</h2>
          <p className="text-sm">Partner • October • 2 days</p>
        </div>
      </div>

      {/* Plan Date and Edit Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-teal-900">Friday, Oct 25</h1>
        <button className="bg-blue-300 text-white px-4 py-2 rounded-md">EDIT</button>
      </div>

      {/* Timeline with vertical line */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[20px] top-0 h-full w-[3px] bg-[#9ed8da]"></div>

        <div className="timeline relative">
          {plans.map((plan, index) => (
            <div key={index} className="w-3/4 ml-16 timeline-item flex py-4 px-6 mb-6 bg-blue-50 rounded-lg shadow-sm relative">
              
              {/* Circular marker */}
              <div className="absolute left-[-58px] top-1/2 transform -translate-y-1/2 bg-[#7ad9db] w-[30px] h-[30px] rounded-full"></div>

              {/* Timeline item content */}
              <div className="flex-shrink-0 mr-4">
                <img className="w-32 h-24 object-cover rounded-md" src={plan.image} alt={plan.title} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-bold text-gray-800">{plan.title}</h2>
                <p className="text-sm text-gray-600">{plan.location}</p>
                <p className="text-sm text-gray-600">{plan.address}</p>
                <p className="text-sm text-gray-600">{plan.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-teal-900">Friday, Oct 25</h1>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[20px] top-0 h-full w-[3px] bg-[#9ed8da]"></div>

        <div className="timeline relative">
          {plans.map((plan, index) => (
            <div key={index} className="w-3/4 ml-16 timeline-item flex py-4 px-6 mb-6 bg-blue-50 rounded-lg shadow-sm relative">
              
              {/* Circular marker */}
              <div className="absolute left-[-58px] top-1/2 transform -translate-y-1/2 bg-[#7ad9db] w-[30px] h-[30px] rounded-full"></div>

              {/* Timeline item content */}
              <div className="flex-shrink-0 mr-4">
                <img className="w-32 h-24 object-cover rounded-md" src={plan.image} alt={plan.title} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-bold text-gray-800">{plan.title}</h2>
                <p className="text-sm text-gray-600">{plan.location}</p>
                <p className="text-sm text-gray-600">{plan.address}</p>
                <p className="text-sm text-gray-600">{plan.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanTimeline;
