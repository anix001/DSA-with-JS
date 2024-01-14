const insertionSort= (arr)=>{
    for(let i =0; i<arr.length-1;i++){
        if(arr[i]> arr[i+1]){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        }

        //again check if every element in front is sorted
        for(let j=0; j< i; j++){
            if(arr[j]> arr[i]){
                [arr[j], arr[i]] = [arr[i], arr[j]]
            }
        }
    }

    return arr;
}

console.log(insertionSort([7,3,5,4, 2]));