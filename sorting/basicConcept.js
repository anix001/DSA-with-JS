const arr = [-2, -7, 1000, 5];
console.log(arr.sort()); //[-2,-7,1000,5] the reason is arr.sort() first convert elements of object to string then sorts.
//how to make this sort as we want
console.log(arr.sort((a,b)=>a-b));//ascending
console.log(arr.sort((a,b)=>b-a));//descending


const strArr = ["mango", "apple", "banana"];
console.log(strArr.sort()); // ["apple","banana", "mango"];

//sort a string
const str = "Vishal";

// ascill value of V=86 and a =97
console.log(str.split('').sort().join("")); //Vahils