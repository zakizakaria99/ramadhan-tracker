export const RAMADAN_START = new Date(2026, 1, 19);
export const TOTAL_DAYS = 30;

export function getCurrentRamadanDay(): number {
  const now = new Date();

  const diffTime = now.getTime() - RAMADAN_START.getTime();
  let day = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

  if (now.getHours() >= 18) {
    day += 1;
  }

  if (day < 1) return 0;
  if (day > TOTAL_DAYS) return TOTAL_DAYS;

  return day;
}

export function generateRamadanDates(): Date[] {
  const dates: Date[] = [];

  for (let i = 0; i < TOTAL_DAYS; i++) {
    const date = new Date(RAMADAN_START);
    date.setDate(RAMADAN_START.getDate() + i);
    dates.push(date);
  }

  return dates;
}

export function isLailatulQadrNight(day: number): boolean {
  return day >= 21 && day <= 29 && day % 2 !== 0;
}