"use client";
import React, { useState } from "react";
import { Filter, AlertTriangle } from "lucide-react";

const Recentbugs = () => {
  const [activeTab, setActiveTab] = useState("all");
  // Sample bug data - in a real app, this would come from your API
  const bugs = [
    {
      id: 1,
      title: "Login authentication fails on Safari",
      priority: "high",
      status: "open",
      reporter: "alex@example.com",
      created: "2 days ago",
    },
    {
      id: 2,
      title: "Dashboard charts not updating in real-time",
      priority: "medium",
      status: "in-progress",
      reporter: "jamie@example.com",
      created: "1 day ago",
    },
    {
      id: 3,
      title: "Mobile responsiveness issues on profile page",
      priority: "low",
      status: "open",
      reporter: "taylor@example.com",
      created: "4 hours ago",
    },
    {
      id: 4,
      title: "Export to PDF functionality broken",
      priority: "medium",
      status: "resolved",
      reporter: "morgan@example.com",
      created: "1 week ago",
    },
  ];
  const filteredBugs = bugs.filter((bug) => {
    if (activeTab === "all") return true;
    if (activeTab === "open") return bug.status === "open";
    if (activeTab === "in-progress") return bug.status === "in-progress";
    if (activeTab === "resolved") return bug.status === "resolved";
    return true;
  });
  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Recent Bugs</h2>
          <div className="flex space-x-2">
            <a
              href="/report"
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Report Bug
            </a>
          </div>
        </div>
      </div>

      {/* Bug List */}
      <ul className="divide-y divide-gray-200">
        {filteredBugs.length > 0 ? (
          filteredBugs.map((bug) => (
            <li key={bug.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {bug.priority === "high" && (
                    <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                  )}
                  <p className="text-sm font-medium text-gray-900">
                    {bug.title}
                  </p>
                </div>
                <div className="flex items-center">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        bug.status === "open"
                          ? "bg-red-100 text-red-800"
                          : bug.status === "in-progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                  >
                    {bug.status}
                  </span>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    Reported by: {bug.reporter}
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <p>{bug.created}</p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="px-4 py-12 text-center text-gray-500">
            No bugs found matching your criteria
          </li>
        )}
      </ul>

      {/* Footer */}
      <div className="px-4 py-3 bg-gray-50 text-center sm:px-6 rounded-b-lg">
        <a
          href="/bugs"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          View all bugs →
        </a>
      </div>
    </div>
  );
};

export default Recentbugs;
