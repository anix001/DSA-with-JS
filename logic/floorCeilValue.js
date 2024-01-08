function findFloorCeilValue(floatNum){
  const floorValue  = parseInt(floatNum.toString().split('.')[0]);
  const ceil = floorValue + 1;

  return [floorValue, ceil]
};

// console.log(findFloorCeilValue(8.7));

// Qno.2 same problem but need to find floor and ceil in array 
const findFloorCeil = (arr, num)=>{
   const sortarr = arr.sort((a,b)=>a-b);
   
   let startIndex = 0, lastIndex = arr.length - 1;
   let mid = floor((startIndex + lastIndex)/2);

   while((arr[mid] < num <arr[mid + 1]) ||(arr[mid -1] < num <arr[mid])){
    if((arr[mid] < num <arr[mid + 1])) return [arr[mid], arr[mid+1]];
    else if((arr[mid -1] < num <arr[mid])) return [arr[mid -1], arr[mid]];
    else if(arr[mid]> num){
      
    }
   }
   
}

// console.log(findFloorCeil([5,9,1,3,7,],7));