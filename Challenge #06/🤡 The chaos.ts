function surviveRoulette(n: number, k: number): number {
  // Base case: if only one victim, they survive at position 0
  if (n === 1) {
    return 0;
  }
  
  // Josephus problem recursive formula
  // J(n, k) = (J(n-1, k) + k) % n
  // where n is number of people and k is the count
  return (surviveRoulette(n - 1, k) + k) % n;
}
