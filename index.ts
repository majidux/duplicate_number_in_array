function DistinctList(arr) {
  const result: number[] = Object.values(
    arr.reduce((accumulator: number, currentValue: number) => {
      accumulator[currentValue] = accumulator[currentValue] || [currentValue, 0];
      accumulator[currentValue][1]++;
      return accumulator;
    }, {})
  ).map((counter) => counter[1]);
  const biggestNumber: number = Math.max(...result);
  return biggestNumber >  1 ? biggestNumber : 0;
}
