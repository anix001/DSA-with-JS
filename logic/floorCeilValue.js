function findFloorCeilValue(floatNum){
  const floorValue  = parseInt(floatNum.toString().split('.')[0]);
  const ceil = floorValue + 1;

  return [floorValue, ceil]
};

console.log(findFloorCeilValue(8.7));