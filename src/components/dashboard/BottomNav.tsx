
import { Home, GraduationCap, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 p-2 flex-1",
        active ? "text-indigo-600" : "text-gray-600"
      )}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-2 py-1 flex items-center justify-between">
      <NavItem icon={<Home size={20} />} label="Home" active />
      <NavItem icon={<GraduationCap size={20} />} label="Tests" />
      <NavItem icon={<Calendar size={20} />} label="Planner" />
      <NavItem icon={<User size={20} />} label="Profile" />
    </div>
  );
}
