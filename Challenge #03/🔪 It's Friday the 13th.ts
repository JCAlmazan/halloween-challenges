function myersCalendar(year: number): string[] {
  // Validate year is a positive integer
  if (!Number.isInteger(year) || year <= 0) {
    return [];
  }

  // Constants for Michael Myers' terror nights
  const DAY_OF_WEEK_FRIDAY = 5; // JavaScript Date.getDay() value for Friday
  const HALLOWEEN_MONTH = 10; // October
  const HALLOWEEN_DAY = 31;
  const FRIDAY_13TH_DAY = 13;

  // Initialize result with Halloween (October 31st)
  const result: string[] = [`${year}-${HALLOWEEN_MONTH}-${HALLOWEEN_DAY}`];

  // Find all Friday the 13th dates
  for (let month = 1; month <= 12; month++) {
    const date = new Date(year, month - 1, FRIDAY_13TH_DAY);
    
    if (date.getDay() === DAY_OF_WEEK_FRIDAY) {
      const monthStr = String(month).padStart(2, '0');
      result.push(`${year}-${monthStr}-${FRIDAY_13TH_DAY}`);
    }
  }

  // Return result sorted chronologically
  return result.sort();
}
