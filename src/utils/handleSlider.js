export const handleSlider = (start, end, number) => {
  const limit = start > end ? number : end;
  let output = [];
  for (let i = start; i <= limit; i++) {
    output.push(i);
  }
  if (start > end) {
    for (let i = 0; i <= end; i++) {
      output.push(i);
    }
  }
  return output;
};
export const handleNumber = (number) => {
  if (number > Math.pow(10, 6)) {
    return `${Math.floor((number * 10) / Math.pow(10, 6)) / 10}M`;
  } else {
    return `${Math.floor((number * 10) / Math.pow(10, 6)) / 10}K`;
  }
};
