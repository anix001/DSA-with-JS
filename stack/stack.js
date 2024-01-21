// implentation of stack
class Stack{
    constructor(){
      this.items = [];
    }

    //add
    add(element){
        return this.items.push(element);
    }

    //remove()
    remove(){
        return this.items.pop();
    }

    //peek()
    peek(){
        return this.items[this.items.length -1];
    }

    //size()
    size(){
        return this.items.length;
    }

    //isEmpty()
    isEmpty(){
        return this.items.length === 0;
    }

    //clear()
    clear(){
        this.items = [];
    }

}


const stack = new Stack();
stack.add(4);
stack.add(6);
stack.add(9);

console.log(stack.size());
console.log(stack.isEmpty());
stack.remove();
console.log(stack.peek());
// console.log(stack.clear());
console.log(stack.size());