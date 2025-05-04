import { Bug, CheckCircle } from "lucide-react";
import Herosection from "@/components/Herosection";
import Recentbugs from "@/components/Recentbugs";

export default function Home() {
  return (
    <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Welcome Section */}
      <Herosection />

      {/* Recent Bugs Section */}
      <Recentbugs />
      {/* Quick Actions */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="relative rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
          <div className="flex-shrink-0 bg-blue-50 rounded-md p-2">
            <Bug className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <a href="/report" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true"></span>
              <p className="text-sm font-medium text-gray-900">Report a Bug</p>
              <p className="text-sm text-gray-500">
                Found an issue? Report it here
              </p>
            </a>
          </div>
        </div>

        <div className="relative rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
          <div className="flex-shrink-0 bg-green-50 rounded-md p-2">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div className="flex-1 min-w-0">
            <a href="/solve" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true"></span>
              <p className="text-sm font-medium text-gray-900">Solve Bugs</p>
              <p className="text-sm text-gray-500">Help solve open issues</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
