
function sumOfNNaturalNumbers(inputNumber){
   
    let sumOfNNumbers = 0;
    
    //using for loop
    for(let i = 1 ; i <= inputNumber ; i++){
       sumOfNNumbers += i;
    };
    
    //using while loop
    let i = 1;
    while(i <= inputNumber){
       sumOfNNumbers += i;
       i++;
    };

    return sumOfNNumbers;

    //better and simple way
    return inputNumber * (inputNumber + 1)/2;
};

let sumNumber = sumOfNNaturalNumbers(6);
console.log("Sum of N Numbers: ", sumNumber);