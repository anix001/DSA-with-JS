//Explanation
//nums = [0,1,3] here n = 3 so in [0,3]  2 is missing.
//nums = [0,1] here n = 2 so in [0,2] 2 is missing.

function findMissingnumber(numArr){
  let sum = numArr.reduce((acc, curr)=> acc + curr, 0);
  return numArr.length*(numArr.length + 1)/2 - sum;
};

console.log(findMissingnumber([0, 1]));
console.log(findMissingnumber([0, 1, 2,3]));
