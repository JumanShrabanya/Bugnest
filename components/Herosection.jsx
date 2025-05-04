"use client";
import { Bug } from "lucide-react";
import React from "react";

const Herosection = () => {
  return (
    <div className="mb-5 py-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center bg-blue-50 rounded-full px-3 py-1 text-sm font-medium text-indigo-700 mb-4">
          <Bug className="h-4 w-4 mr-1" />
          Bug Tracking Made Simple
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
          Welcome to <span className="text-indigo-600">BugNest</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          BugNest is a bug tracking platform that helps developers and teams
          log, track, and manage bugs efficiently.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="/report"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Report a Bug
          </a>
          <a
            href="/learn-more"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
