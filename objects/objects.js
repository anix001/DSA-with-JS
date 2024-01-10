//Concept 1: freeze() vs seal()

// Object.seal() allows changes to the existing properties of an object. It prevents from deletion of existing properties but cannot prevent them from external changes. 
// Object.freeze() does not allow so. It makes an object immune to everything even little changes cannot be made. 



//Concept 2: What is object.prototype? 

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
// The chain ends when we reach a prototype that has null for its own prototype.


//Concept 3: Object.assign() vs Spread Operator

// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. 
// It returns the modified target object.

// Syntax: Object.assign(target, source1, source2, /* …, */ sourceN) 

// one big difference between the spread operator and Object.assign that is the spread operator will not copy the the source object’s prototype to the target object.
//  If you want to add properties to an object and you don't want to change what instance it is of, then you will have to use Object.assign.

//Concept 4: key, value, entries
// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

// const object1 = {
//     a: 'somestring',
//     b: 42,
//   };
  
//   for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);

// concept 5: Object.is(obj1, obj2) => to check two objects are same or not. 

//concept 6: prototype and Inheritance
//tricky question: find the count of all player
const data = {
    id: 1,
    name: ["p1", "p5"],
    next: {
        id: 2,
        name:["p3"],
        next:{
            id:3,
            name:["p3", "p4", "p5"],
            next:{
                id:4,
                name: ["p1", "p2", "p4"],
                next:{
                    id:5,
                    name:["p2", "p3","p5"],
                    next: null
                }
            }
        }
    }
};

// output: {p1:2, p4: 3, p3: 3, p2:2, p5:2}

const playerCount = (data) => {

    if(data === null) return {};
    
    //to hold the count for every object
    let countPlayerObj = {};

    for(let player of data.name){
        countPlayerObj[player] = (countPlayerObj[player]  || 0 ) + 1;
    }

    //counting data.next object player count
    let nextPlayerCount = playerCount(data.next);
    console.log("🚀 ~ playerCount ~ nextPlayerCount:", nextPlayerCount);

    for(let player in nextPlayerCount){
        countPlayerObj[player] = (countPlayerObj[player] || 0) + nextPlayerCount[player];
    }
    
    return countPlayerObj;

}

const countPlayer = playerCount(data);
console.log("🚀 ~ countPlayer:", countPlayer);

