const productArray = (number) => {
  let numberIndex = 1;
  const output = Array(number.length).fill(1);

  for (let i = 0; i < number.length; i++) {
    output[i] *= numberIndex;
    numberIndex *= number[i];
  }

  numberIndex = 1;
  for (let i = number.length - 1; i >= 0; i--) {
    output[i] *= numberIndex;
    numberIndex *= number[i];
  }
  return output;
};

console.log(productArray([12, 20]));
console.log(productArray([12, 20]));
console.log(productArray([3, 27, 4, 2]));
console.log(productArray([13, 10, 5, 2, 9]));
console.log(productArray([16, 17, 4, 3, 5, 2]));
