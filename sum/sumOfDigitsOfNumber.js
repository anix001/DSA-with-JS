
function sumOfDigitsOfNumber(digitNumber){
    // let tempArr = digitNumber.toString().split("");
    // let sum = 0;
    // for(let i =0 ; i< tempArr.length ; i++){
    //   sum += parseInt(tempArr[i]);
    // }
    // return sum;

    // short way 
    let sum =0;
    while(digitNumber > 0){
      debugger
      sum += digitNumber % 10;
      digitNumber = Math.floor(digitNumber/10);
    }
    return sum;
}

let sum = sumOfDigitsOfNumber(187);
console.log("🚀 ~ file: sumOfDigitsOfNumber.js:11 ~ sum:", sum);

