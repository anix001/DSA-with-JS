class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class StackUsingLinkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    //insert at head (On the top)
    push(element){
      const node = new Node(element);
      node.next = this.head;
      this.head = node;
      this.size++;
    }

    //remove from top (from the Top)
    pop(){
     if(this.isEmpty()) return "Stack is empty";
     this.head = this.head.next;
     this.size--;
    }

    peek(){
     if(this.isEmpty()) return "Stack is empty";
      return this.head.data;
    }

    print(){
     if(this.isEmpty()) return "Stack is empty";
      let result ="";
      let temp = this.head;

      while(temp){
        result += `${temp.data} ->`;
        temp = temp.next;
      }
      return result;
    }

    isEmpty(){
        return this.size === 0;
    }
}

const stack = new StackUsingLinkedlist();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.peek());
console.log(stack.print());