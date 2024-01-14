const selectionSort = (arr) => {
    // for(let j=0; j<arr.length-1; j++){
    //     let temp = arr[j]; // 7
    //     let smallElement = arr[j], smallElementIndex =j;
    //     for(let i=j; i<arr.length-1; i++){
    //         if(smallElement > arr[i+1]){
    //             smallElement = arr[i+1];
    //             smallElementIndex = i+1;
    //         }
    //     }
    //     arr[smallElementIndex] = temp;
    //     arr[j] = smallElement;
    // }

    //optimized version
    for(let i = 0; i<arr.length -1 ; i++){
        let minIndex = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){ minIndex = j;}
        }
        if(minIndex !== i){
         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
};

console.log(selectionSort([7,5,2,6,9,1]));
