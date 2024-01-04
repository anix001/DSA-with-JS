// Qno1. find first occurance index of string in another string

function findStringOcc(heyStack, needle){
    //super soln
   //  return heyStack.indexOf(needle);

   //doing myself
   for(let i = 0; i <= heyStack.length - needle.length ; i++){
    let j;

    for(j=0; j< needle.length ; j++){
        if(heyStack[i + j] !== needle[j]) break;
    }

    if(j === needle.length) return i;
   }

   return -1;
}
// console.log(findStringOcc("butsad","sad"));


// Qno.2 Valid anagrams
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the origibal letters exactly once. 

function isAnagram(str1, str2){
   return str1.split("").sort().join() === str2.split("").sort().join();
};

// console.log(isAnagram("abc", "badc"))



// Qno.3 longest common prefix 

function findLongestCommonprefix(arr){
    let result = arr[0];
    //looping through arr
   for(let i = 0; i< arr.length; i++){
    //checking one-one element
    let j = 0;

    while (j < result.length && j < arr[i].length && result[j] === arr[i][j]) {
        j++;
    }

    result = result.substring(0,j);
   }
   return result;
}

// console.log(findLongestCommonprefix(["anish", "anllljdd","ani"]));

// Qno 4 merge string alternatively 

const mergeStringAlternatively = (str1, str2) =>{
    const l = Math.max(str1.length , str2.length );
    const arr = [];
    for(let i = 0; i<l; i++){
       if(str1[i] !== undefined) arr.push(str1[i]);
       if(str2[i] !== undefined) arr.push(str2[i])
    }
    return arr.join('');
}


console.log(mergeStringAlternatively("hjj","jkjk"))
