function binarySearch(arr, target){
    const sortArr = arr.sort((a, b)=> a-b);
    let startIndex= 0 ; lastIndex = sortArr.length-1;

    while(startIndex <= lastIndex){
        const mid = Math.floor((startIndex + lastIndex)/2);
        if(sortArr[mid] === target) return mid;
        else if(sortArr[mid] < target){
            startIndex = mid + 1;
        }else{
            lastIndex = mid -1;
        }
    }
}

console.log(binarySearch([1,9,5,8,7,2,5,6,22],22));

