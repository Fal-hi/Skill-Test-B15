let arr = [15, 1, 3];
let number1 = 0,
  number2 = 1,
  nextNumber,
  largerNumber,
  smallerNumber,
  nearestNumber,
  target,
  diffTargetToLarger,
  diffTargetToSmaller;

target = arr.reduce((a, b) => a + b, 0);
nextNumber = number1 + number2;

// console.log(target);
// console.log(nextNumber);
while (nextNumber <= target) {
  // console.log(nextNumber);

  smallerNumber = nextNumber;

  number1 = number2;
  number2 = nextNumber;
  nextNumber = number1 + number2;

  largerNumber = nextNumber;
}

diffTargetToSmaller = target - smallerNumber;
diffTargetToLarger = largerNumber - target;

// hasil
nearestNumber = diffTargetToLarger <= diffTargetToSmaller ? diffTargetToLarger : diffTargetToSmaller;

console.log(nearestNumber);
console.log("target : ", target);
console.log("nearest: ", nearestNumber);
console.log("larger number: ", largerNumber);
console.log("smaller number : ", smallerNumber);
