//intersection of two array

const intersectionArray = (arr1, arr2) => {
    //the simplest way
    // const uniqueArr = new Set([...arr1, ...arr2]);

    //own way
    let arr=[];
    
   for(let i =0 ; i< arr1.length; i++){
    for(let j =0 ; j<arr2.length; j++){
        if(arr1[i] === arr2[j] && !arr.includes(arr1[i])) arr.push(arr1[i]);
    }
   }

   return arr;
}

console.log(intersectionArray([1,5,9,7,8],[2,8]));