interface ProgressBarProps {
  currentDay: number;
  totalDays: number;
}

export default function ProgressBar({
  currentDay,
  totalDays,
}: ProgressBarProps) {
  const percentage = Math.min(
    Math.max((currentDay / totalDays) * 100, 0),
    100
  );

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm dark:text-slate-300">
        <span>Progress</span>
        <span>{Math.round(percentage)}%</span>
      </div>

      <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
  className="h-full bg-emerald-500 transition-all duration-1000 ease-out"
  style={{ width: `${percentage}%` }}
/>
      </div>
    </div>
  );
}