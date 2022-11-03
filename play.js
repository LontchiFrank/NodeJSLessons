const toArray = (...args) => {
  return args;
};
// console.log(toArray(1, 2, 3, 4, 5, 6));

const sumNumbers = (...nums) => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return nums;
};
console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
