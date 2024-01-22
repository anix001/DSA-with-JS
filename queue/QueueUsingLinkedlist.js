class Node{
    constructor(data){
        this.data = data;
        this.next =  null;
    }
}

class QueueUsingLinkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(item){
       const newNode = new Node(item);
       newNode.next = this.head;
       this.head = newNode;

       if(this.isEmpty()){
         this.tail = this.head;
       }else{
         let temp = this.head;
        
         while(temp.next !== null){
            this.tail = temp.next;
            temp = temp.next;
         }
         
       }

       this.size++;  
    }

    dequeue(){
        let temp = this.head;
        while(temp.next !== this.tail){
            temp = temp.next;
        };

        this.tail = temp;
        this.tail.next = null;
    }

    peek(){
       return this.tail.data;
    }

    print(){
        let result = "";
        let temp = this.head;

        while(temp){
            result += `${temp.data } ->`;
            temp = temp.next;
        }

        return result;
    }

    isEmpty(){
        return this.size === 0;
    }
}


const queue = new QueueUsingLinkedlist();
queue.enqueue(18);
queue.enqueue(17);
queue.enqueue(16);

console.log(queue.print());
console.log(queue.tail);
console.log(queue.tail.data);

queue.dequeue();
console.log(queue.print());


