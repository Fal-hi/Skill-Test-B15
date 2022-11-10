const alternateCase = (string) => {
  const isUpperCase = (char) =>
    char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
  const isLowerCase = (char) =>
    char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;

  let newString = "";
  let margin = 32;

  for (let i = 0; i < string.length; i++) {
    const curr = string[i];

    if (isLowerCase(curr)) {
      newString += String.fromCharCode(curr.charCodeAt(0) - margin);
    } else if (isUpperCase(curr)) {
      newString += String.fromCharCode(curr.charCodeAt(0) + margin);
    } else {
      newString += curr;
    }
  }
  return newString;
};

console.log(alternateCase("abc"));
console.log(alternateCase("ABC"));
console.log(alternateCase("Hello World"));
