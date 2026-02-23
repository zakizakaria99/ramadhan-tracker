import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import CalendarGrid from "@/components/CalendarGrid";
import { getCurrentRamadanDay } from "@/lib/ramadan";

export default function Home() {
  const currentDay = getCurrentRamadanDay();

  return (
    <main className="min-h-screen bg-emerald-50 dark:bg-slate-900 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-8 space-y-10 animate-popIn">
          
          <Header />

          <div className="text-center text-xl dark:text-slate-300">
            Hari ke-{currentDay} dari 30
          </div>

          <ProgressBar currentDay={currentDay} totalDays={30} />

          <CalendarGrid currentDay={currentDay} />

        </div>
      </div>
    </main>
  );
}