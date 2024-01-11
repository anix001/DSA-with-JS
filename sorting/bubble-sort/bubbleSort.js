const bubbleSort = (arr)=>{
    for(let i =0; i<arr.length; i++){
        let temp = arr[0];
        for(let j=0; j<arr.length-i; j++){
            if(temp === arr[j]){
                temp = arr[j];
            }
            else if(temp > arr[j]){
                arr[j-1] = arr[j];
                arr[j] = temp;
            }else{
                temp = arr[j];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([7,8,2,12,5]));