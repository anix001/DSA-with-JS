const mergeSort =(arr)=>{

   if(arr.length < 2){
     return arr;
   }

   let mid = Math.floor(arr.length/2);
   let left = mergeSort(arr.slice(0, mid));
   let right = mergeSort(arr.slice(mid));
   
   return merge(left, right);
}

const merge = (left, right)=>{
    let result =[];
    
    let leftindex =0; rightIndex = 0;

    while(leftindex < left.length && rightIndex < right.length){
        if(left[leftindex] < right[rightIndex]){
            result.push(left[leftindex]);
            leftindex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    //if left  has some remaining but right array becomes empty
    while(leftindex < left.length){
        result.push(left[leftindex]);
        leftindex++;
    }
    //if right  has some remaining but left array becomes empty
    while(rightIndex< right.length){
        result.push(right[rightIndex]);
        rightIndex++;
    }
    
    return result;
}

console.log(mergeSort([6,1,4,3,99,55555,40]));