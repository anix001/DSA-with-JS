
function isPalindrome(num){
  let reverseNum = num.toString().split('').reverse().join('');
  return num === parseInt(reverseNum);
}

console.log(isPalindrome(123));
console.log(isPalindrome(121));