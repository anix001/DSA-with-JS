//implementation of Queue

class Queue{
    constructor(){
        this.items = {};
        this.frontIndex = 0; // to remove element
        this.backIndex = 0; // to add the element
    }
    

    // to add element
    enqueue(element){
       this.items[this.backIndex] = element;
       this.backIndex++;
       return element+ ' inserted';
    }

    dequeue() {
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++
        return item;
    }

    peek() {
        return this.items[this.frontIndex];
    }

    get printQueue() {
        return this.items;
    }
}