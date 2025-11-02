function searchPhone(phones: number[], target: number): number {
  let left = 0;
  let right = phones.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // Calculate the middle index

    if (phones[mid] === target) {
      return mid; // Target found, return its index
    } else if (phones[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found in the array
}
