const quickSort = (arr) => {
    if(arr.length < 2) return arr;
    
   const pivotIndex = Math.floor(Math.random() * arr.length); //choosing pivot element
   const left=[], right=[];

   for(let i=0; i< arr.length; i++){
    if( i === pivotIndex){
        continue;
    }
    if(arr[i] < arr[pivotIndex]){
        left.push(arr[i]);
    }else{
        right.push(arr[i]);
    }
   }

   return [...quickSort(left), arr[pivotIndex], ... quickSort(right)];
}

console.log(quickSort([22,5,1,6,44,55,60]));