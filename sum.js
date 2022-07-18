// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...nums) => {
  let args = nums;
  let argsSum = 0;
  for (let i = 0; i < args.length; i++) {
    argsSum += args[i];
  }
  return argsSum;
};

console.log(sum()); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
