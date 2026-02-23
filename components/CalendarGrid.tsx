import {
  generateRamadanDates,
  isLailatulQadrNight,
  RAMADAN_START,
} from "@/lib/ramadan";

interface CalendarGridProps {
  currentDay: number;
}

export default function CalendarGrid({
  currentDay,
}: CalendarGridProps) {
  const dates = generateRamadanDates();

  const daysOfWeek = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

  // Hitung offset supaya Senin = 0
  const startDay = (RAMADAN_START.getDay() + 6) % 7;

  const emptyCells = Array.from({ length: startDay });

  return (
    <div className="space-y-4">
      {/* Header Hari */}
      <div className="grid grid-cols-7 text-center text-sm font-medium dark:text-slate-300">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Grid Kalender */}
      <div className="grid grid-cols-7 gap-2">
        {/* Offset kosong sebelum tanggal pertama */}
        {emptyCells.map((_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {dates.map((date, index) => {
          const dayNumber = index + 1; // Hari puasa ke-berapa

          const isPassed = dayNumber < currentDay;
          const isToday = dayNumber === currentDay;

          return (
            <div
              key={date.toISOString()}
              className={`
                relative
                aspect-square
                flex items-center justify-center
                rounded-lg
                text-sm
                transition-all duration-200
                hover:scale-105 hover:shadow-md cursor-default
                ${
                  isToday
                    ? "bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.6)] ring-4 ring-emerald-400/40"
                    : isPassed
                    ? "bg-emerald-400/30 dark:bg-emerald-500/20"
                    : "bg-white dark:bg-slate-800 dark:text-white"
                }
              `}
            >
              {/* Tampilkan tanggal asli */}
              {date.getDate()}

              {/* Marker Lailatul Qadr */}
              {isLailatulQadrNight(dayNumber) && (
                <span className="absolute top-1 right-1 text-[10px] text-yellow-400">
                  ⭐
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}