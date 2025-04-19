
import { GraduationCap, CalendarCheck, Star, User } from "lucide-react";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { BottomNav } from "@/components/dashboard/BottomNav";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-white border-b px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-900">ENTer</h1>
        <p className="text-sm text-gray-600">Your UNT Preparation Dashboard</p>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-4">
        {/* Adaptive Tests */}
        <DashboardCard
          title="Adaptive Tests"
          icon={<GraduationCap className="h-5 w-5" />}
        >
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Overall Progress</span>
              <span className="font-medium">78%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full w-[78%]" />
            </div>
            <button className="w-full mt-2 bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-indigo-700">
              Continue Learning
            </button>
          </div>
        </DashboardCard>

        {/* Parent Dashboard */}
        <DashboardCard
          title="Parent Dashboard"
          icon={<User className="h-5 w-5" />}
        >
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>Weekly Study Hours</span>
              <span className="font-medium text-green-600">12.5 hrs</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Tasks Completed</span>
              <span className="font-medium text-indigo-600">24/30</span>
            </div>
          </div>
        </DashboardCard>

        {/* University Recommendations */}
        <DashboardCard
          title="University Recommendations"
          icon={<Star className="h-5 w-5" />}
        >
          <div className="space-y-2">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <p className="text-sm font-medium text-indigo-900">Top Match</p>
              <p className="text-xs text-indigo-700">Nazarbayev University</p>
            </div>
            <button className="text-sm text-indigo-600 font-medium hover:underline">
              View All Matches →
            </button>
          </div>
        </DashboardCard>

        {/* Smart Study Planner */}
        <DashboardCard
          title="Smart Study Planner"
          icon={<CalendarCheck className="h-5 w-5" />}
        >
          <div className="space-y-2">
            <div className="bg-gray-50 p-2 rounded-lg">
              <p className="text-sm font-medium">Today's Focus</p>
              <p className="text-xs text-gray-600">Mathematics: Algebra</p>
              <p className="text-xs text-gray-600">2 hours recommended</p>
            </div>
            <button className="text-sm text-indigo-600 font-medium hover:underline">
              View Full Schedule →
            </button>
          </div>
        </DashboardCard>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
