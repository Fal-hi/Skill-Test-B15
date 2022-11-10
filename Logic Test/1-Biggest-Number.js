const maxRedigit = (number) => {
  if (number < 100 || number > 999) return null;
  return +number
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
};

console.log(maxRedigit(123));
console.log(maxRedigit(231));
console.log(maxRedigit(321));
console.log(maxRedigit(-1));
console.log(maxRedigit(0));
console.log(maxRedigit(99));
console.log(maxRedigit(1000));
