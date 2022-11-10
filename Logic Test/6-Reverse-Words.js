const reverseWords = (string) => {
  const reversed = string
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  const join = reversed.join(" ");
  return join;
};

console.log(reverseWords("I am A Great human"));
