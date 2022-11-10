let array = [15, 1, 3];
let number1 = 0,
  number2 = 1,
  nextNumber,
  largerNumber,
  smallerNumber,
  nearestNumber,
  target,
  diffTargetToLarger,
  diffTargetToSmaller;

target = array.reduce((a, b) => a + b, 0);
nextNumber = number1 + number2;

while (nextNumber <= target) {
  smallerNumber = nextNumber;
  number1 = number2;
  number2 = nextNumber;
  nextNumber = number1 + number2;
  largerNumber = nextNumber;
}

diffTargetToSmaller = target - smallerNumber;
diffTargetToLarger = largerNumber - target;

nearestNumber =
  diffTargetToLarger <= diffTargetToSmaller
    ? diffTargetToLarger
    : diffTargetToSmaller;

console.log(nearestNumber);
console.log(`Target = ${target}`);
console.log(`Nearest =  ${nearestNumber}`);
console.log(`Larger Number = ${largerNumber}`);
console.log(`Smaller Number = ${smallerNumber}`);
