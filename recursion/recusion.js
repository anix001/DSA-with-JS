// Qno1. fibonacci sequence 

function fibonacciSquence(num){
    if(num < 2){
        return num;
    }
    return fibonacciSquence(num -1) + fibonacciSquence (num -2);
}

// console.log(fibonacciSquence(2));

// Qno2. sum of n natural numbers 

function sumOfNNaturalNumber(num){
    if(num === 0) return 0;
    return num +  sumOfNNaturalNumber(num - 1);
}

// console.log(sumOfNNaturalNumber(3));

// Qno.3 Sum of arr of elements 

function sumOfArrOfElements(arr){
    if(arr.length === 0) return 0;
    let num = arr.pop();
    return num + sumOfArrOfElements(arr);
}

// console.log(sumOfArrOfElements([1,2,3]));