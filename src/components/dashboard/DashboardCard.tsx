
import { cn } from "@/lib/utils";

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function DashboardCard({ title, icon, children, className, ...props }: DashboardCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white p-4 shadow-sm transition-all hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 mb-3">
        {icon && <div className="text-indigo-600">{icon}</div>}
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}
