const insertionSort= (arr)=>{
    // for(let i =0; i<arr.length-1;i++){
    //     if(arr[i]> arr[i+1]){
    //         [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    //     }

    //     //again check if every element in front is sorted
    //     for(let j=0; j< i; j++){
    //         if(arr[j]> arr[i]){
    //             [arr[j], arr[i]] = [arr[i], arr[j]]
    //         }
    //     }
    // }


    //optimized version
    for(let i = 1; i<arr.length; i++){
        let curEle  = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]> curEle){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curEle;
    }

    return arr;
}

console.log(insertionSort([7,3,5,4, 2]));