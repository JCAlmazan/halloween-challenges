function countSheep(letters: string): number {
  const SHEEP_LETTERS = new Set(['s', 'h', 'e', 'p']);

  const count = new Map<string, number>();

  for (const letter of letters.toLowerCase()) {
    if (SHEEP_LETTERS.has(letter)) {
      count.set(letter, (count.get(letter) ?? 0) + 1);
    }
  }

  return Math.min(
    count.get('s') ?? 0,
    count.get('h') ?? 0,
    Math.floor((count.get('e') ?? 0) / 2),
    count.get('p') ?? 0
  );
}
