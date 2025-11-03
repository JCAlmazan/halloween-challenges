function changeLock(current: string, target: string): number {
  const WHEEL_COUNT = 4;
  const MAX_DIGIT = 10;
  
  // Validate input lengths match expected wheel count
  if (current.length !== WHEEL_COUNT || target.length !== WHEEL_COUNT) {
    return 0;
  }

  const currentArray = current.split("");
  const targetArray = target.split("");
  
  let movements = 0;
  
  for (let i = 0; i < WHEEL_COUNT; i++) {
    // Calculate direct distance between current and target digit
    const directDistance = Math.abs(Number(currentArray[i]) - Number(targetArray[i]));
    
    // Calculate circular distance (going the other way around)
    // For circular wheels, the shortest path is either direct or (10 - direct)
    const circularDistance = MAX_DIGIT - directDistance;
    
    // Take the minimum of both paths
    movements += Math.min(directDistance, circularDistance);
  }
  
  return movements;
}
