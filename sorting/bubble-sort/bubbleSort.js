const bubbleSort = (arr)=>{
    // for(let i =0; i<arr.length; i++){
    //     let temp = arr[0];
    //     for(let j=0; j<arr.length-i; j++){
    //         if(temp === arr[j]){
    //             temp = arr[j];
    //         }
    //         else if(temp > arr[j]){
    //             arr[j-1] = arr[j];
    //             arr[j] = temp;
    //         }else{
    //             temp = arr[j];
    //         }
    //     }
    // }

    // optimized version
     
    let swapped;
    do{
        for(let i =0; i < arr.length -1 ; i++){
            swapped = false;
            if(arr[i]> arr[i + 1]){ 
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        }
    }while(swapped);

    return arr;
}

console.log(bubbleSort([7,8,2,12,5]));