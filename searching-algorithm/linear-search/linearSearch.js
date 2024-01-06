//example for linear search
const searchElement = (arr, ele) =>{
   for(let i = 0; i< arr.length; i++){
    if(arr[i] === ele) return i;
   }
   return -1;
}

console.log(searchElement([1,5,6],10));