//implementation of queue using stack

class QueueUsingStack{
    constructor(){
        this.items= [];
    }
    

    //add
    enqueue(element){
      this.items.push(element);
      return element + ` inserted !!`;
    }

    //dequeue=> who inserted first must be inserted out first
    dequeue(){
        this.items.shift();
    }

    //peek() => must be first element that is inserted
    peek(){
        return [...this.items].shift();
    }

    size(){
        return this.items.length;
    }

    print(){
        return this.items;
    }
    
    clear(){
        this.items=[];
    }
}

const queue = new QueueUsingStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.size());
console.log(queue.print());
console.log(queue.peek());
queue.dequeue();
console.log(queue.print());
console.log(queue.peek());




