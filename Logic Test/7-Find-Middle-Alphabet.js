function findMiddleAlphabet(str) {
  var position;
  var length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }

  return str.substring(position, position + length);
}

console.log(findMiddleAlphabet("QRSTU"));
console.log(findMiddleAlphabet("RSTU"));
console.log(findMiddleAlphabet("TUVWXYZ"));
console.log(findMiddleAlphabet("QRSTUVWXYZ"));
