import React from "react";

const StatesOverview = () => {
  // Stats data
  const stats = [
    { title: "Open Bugs", value: "12", icon: Bug, color: "text-red-500" },
    { title: "In Progress", value: "8", icon: Clock, color: "text-yellow-500" },
    {
      title: "Resolved",
      value: "24",
      icon: CheckCircle,
      color: "text-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
        >
          <div className="flex items-center">
            <div className={`p-3 rounded-full bg-gray-50 mr-4`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatesOverview;
