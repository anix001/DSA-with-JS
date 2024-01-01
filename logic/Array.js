//find item is present in an arrqy or not?

function checkItemInAnArray(arr, item){
   for(let x of arr){
    if(x=== item) return true;
   }
   return false;
}

// console.log(checkItemInAnArray([1,2,3], 1));
// console.log(checkItemInAnArray([1,2,3], 14));

//we can also use arr.includes(1);
// console.log(([1,2,3].includes(1)));

// Qno.2 Find element of index 

function findIndexOfElement(arr, item){
    for(let i =0; i< arr.length; i++){
        if(arr[i] === item) return i;
    }
    return false;
}


// console.log(findIndexOfElement([2,5,9,8,22,3],9));
// console.log(findIndexOfElement([2,5,9,8,22,3],6));
//inbuilt function => arr.indexOf(9);


//splice vs slice
// splice => addEventListener, delete, update
// slice => gives subArray


// deep copy vs shallow copy 
// shallow copy => two arr are same and if you change in one arr it will get changed into another also. 
// deep copy => copies the reference from parent array


//Qno3. Add two array
// 1 const a = [...arr1, ...arr2];
//2 const b = arr1.concat(arr2);


// Qno. 4 check two arr are same or not?

const isArrEqual = (arr1, arr2) =>{
    // if(arr1.length !== arr2.length) return false;

    // if(arr1.length === arr2.length){
    //    const sortarr1 = arr1.sort((a,b)=>  a>b ? 1: -1);
    //    const sortarr2 = arr1.sort((a,b)=>  a>b ? 1: -1);
      
    //    for(let i = 0; i< sortarr1.length; i++){
    //         if(sortarr1[i] !== sortarr2[i]) return false;
    //    }
    //    return true;
    // }

    // optimized sol 
    return (arr1.length === arr2.length) && arr1.every((elem, index)=> arr1[index] === arr2[index]);
}


console.log( isArrEqual([1,2,3], [1,2,3]));

//flat method = to make nested array to flat array

const arr = [1, 2,[3,4,[5,6,[7,8]]]];
// console.log(arr.flat(3)); //3 => indicates the depth 

//reverse an array
const reverseArray = (arr)=>{
    let reverseArr = [];

    for(let i = arr.length -1 ; i >=0 ; i--){
        reverseArr.push(arr[i]);
    }
    return reverseArr;  
}

// console.log(reverseArray([1,2,3]));

// find unique element from an array 

const findUniqueElement =(arr)=>{
    const uniqueElemArr = [];

    for(let i=0; i< arr.length ; i++){
        if(!uniqueElemArr.includes(arr[i])) uniqueElemArr.push(arr[i]);
    }
    return uniqueElemArr;
}

console.log(findUniqueElement([1,2,3,1,8,9,9,8,45,4,3]));