function reverseWords(str) {
  let WordHasRevers = str.split(" ").map((word) => word.split("").reverse().join(""));
  let join = WordHasRevers.join(" ");
  return join;
}
console.log(reverseWords("I am A Great human"));
