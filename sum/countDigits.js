function countDigits(num){
//   return num.toString().split("").length;
//   another way 
    let count = 0;
    do{
    count++;
    num = Math.floor(num / 10);
    }while(num > 0);
    return count;
};

console.log(countDigits(12345));