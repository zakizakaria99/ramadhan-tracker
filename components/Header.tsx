"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = now.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = now.toLocaleTimeString("id-ID");

  return (
    <div className="text-center space-y-2">
      <h1 className="text-3xl font-bold dark:text-white">
        🌙 Ramadan Tracker 2026
      </h1>

      <p className="text-sm text-slate-600 dark:text-slate-300">
        {formattedDate} | {formattedTime}
      </p>
    </div>
  );
}