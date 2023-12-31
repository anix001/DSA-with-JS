//Definition: The Fibonacci Numbers, denoted by F(n) form a sequence, called fibonacci sequence, such that each number is the sum of two preceding ones,
//starting from 0 and 1. 
//f(n) = f(n-1) + f(n-2);

function fibonacciSquence(num){
    let arr = [0 , 1];
    if(num === 0) return 0;
    else if(num === 1) return arr;
    else{
        for(let i =2 ; i< num ; i++){
            arr.push(arr[i-1] + arr[i-2]);
        }
       return arr;
    }
}


console.log(fibonacciSquence(0));
console.log(fibonacciSquence(1));
console.log(fibonacciSquence(5));
