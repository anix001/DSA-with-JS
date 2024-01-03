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
console.log(findStringOcc("butsad","sad"));