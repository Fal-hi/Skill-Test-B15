function maxNumber(num) {
  if (num < 100 || num > 999) return "Number doesn't match";
  return +num
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
console.log(maxNumber(123));
console.log(maxNumber(231));
console.log(maxNumber(321));
console.log(maxNumber(-1));
console.log(maxNumber(0));
console.log(maxNumber(99));
console.log(maxNumber(1000));
