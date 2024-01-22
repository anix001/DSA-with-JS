//implementation of circular queue using linked list

// defn :
// A circular queue is the extended version of a regular queue where the last element is connected to the first element. Thus forming a circle-like structure. 

// implemantation 

class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class circularQueue{
    constructor(k){
        this.capacity = k;
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //methods
    enqueue(data){
       if(this.isFull()) return false;

       const newNode = new Node(data);

       if(this.head === null){
        this.head = newNode;
       }else{
        this.tail.next = newNode;
       }

       this.tail = newNode;
       this.tail.next = this.head;
       this.size++;
       return true;
    }

    dequeue(){
      if(this.isEmpty()) return false;
      if(this.head===this.tail){
        this.head = null;
        this.tail = null;
      }else{
        this.head = this.head.next;
        this.tail.next = this.head;
      }

      this.size--;
      return true;


    }

    front(){
        return this.isEmpty() ? -1 : this.head.data;
    }

    rear(){
      return this.isEmpty() ? -1 : this.tail.data;
   }

    isEmpty(){
        return this.size === 0;
    }

    isFull(){
        return this.size === this.capacity;
    }
}