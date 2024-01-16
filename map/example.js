//sort character by frequency
const sortCharByFrequency = (str) => {
    //count the no of frequency for every character in string
    const map = new Map();
    //let set key-value pair where  key is character and value is count of frequency
    for(let x of str){
        map.set(x, (map.get(x)  || 0)+ 1)
    }

    //sort the map descending value
    const sortedMaps = [...map.keys()].sort((a, b)=>  map.get(b)- map.get(a));
    //now generate string according to sorted maps
    let returnStr='';
    for(let x of sortedMaps){
        returnStr += x.repeat(map.get(x));
    }
    return returnStr;
}

console.log(sortCharByFrequency('tree'))