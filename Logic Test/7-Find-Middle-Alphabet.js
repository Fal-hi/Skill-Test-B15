const findMiddleAlphabet = (string) => {
  let position;
  let length;
  if (string.length % 2 == 1) {
    position = string.length / 2;
    length = 1;
  } else {
    position = string.length / 2 - 1;
    length = 2;
  }
  return string.substring(position, position + length);
};

console.log(findMiddleAlphabet("QRSTU"));
console.log(findMiddleAlphabet("RSTU"));
console.log(findMiddleAlphabet("TUVWXYZ"));
console.log(findMiddleAlphabet("QRSTUVWXYZ"));
