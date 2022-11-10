function mapArrayData(nums) {
  let numIncrementEachIndex = 1;
  const output = Array(nums.length).fill(1);
  // console.log(output);
  for (let i = 0; i < nums.length; i++) {
    output[i] *= numIncrementEachIndex;
    numIncrementEachIndex *= nums[i];
  }
  // console.log(output);
  numIncrementEachIndex = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= numIncrementEachIndex;
    numIncrementEachIndex *= nums[i];
  }
  return output;
}
console.log(mapArrayData([12, 20]));
console.log(mapArrayData([12, 20]));
console.log(mapArrayData([3, 27, 4, 2]));
console.log(mapArrayData([13, 10, 5, 2, 9]));
console.log(mapArrayData([16, 17, 4, 3, 5, 2]));
