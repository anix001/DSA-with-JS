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
