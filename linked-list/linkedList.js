class Node{
    constructor(data){
        this.data= data;
        this.next = null;
    }
}

// This simple class does just as described above. 
// It holds on to our data (which could be strings, integers, objects, arrays, or even other nodes),
//  and it has a reference to the next node.

// let node1 = new node(1);
// let node2 = new node(2);
// node1.next = node2;

// console.log(node1); 

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //insert At Head
    insertAtHead(data){
        const newNode = new Node(data);
        newNode.next = this.head; //making older head to new node next
        this.head =  newNode;  //making new inserted data to current head
        this.size++; //increasing the size of node
    }

    //insert at index
    insertAtIndex(index, data){
      //checking index to ensure we can insert at that index
      if(index<0 && index> this.size){
        return "Invalid Index";
      }

      //insert at Head
      if(index === 0){ 
        this.insertAtHead(data);
        return;
    }

      const newNode = new Node(data); //Step 1: Create Node Object
      const temp = this.head; // step 2: setting head value to temp variable

      //making temp variable store value one step small value than index
      for(let i=0; i< index -1; i++){
        temp = temp.next;
      }
      
      newNode.next = temp.next; //Step 3: making temp.next as newNode.next
      temp.next = newNode; //Step 4: making newNode as temp.next 

      this.size++; //step 5: increase the size of list

    }

    //print
    print(){
        let result = "";
        let temp = this.head;

        while(temp){
            result += `${temp.data} -> `;
            temp = temp.next;
        }

        return result;
    }

    //remove at head
    removeAtHead(){
      if(this.isEmpty()) return "List is already empty !!";
      this.head = this.head.next;
      this.size--;
    }

    //check list is empty or not
    isEmpty(){
      return this.size === 0;
    }

    //remove element at nth index
    removeElement(index){
      if(this.isEmpty()) return "List is already empty !!";

      if(index<0 && index> this.size-1) return "Index is not valid";

      if(index === 0) this.removeAtHead();

      let temp = this.head; //step 1 : storing head in temp variable
      let prev = null;
      
      //reaching at index and storing index value as temp
      for(let i=0; i< index  ; i++){
         prev = temp;
         temp= temp.next
      }

      if(index === this.size -1){
        prev.next = null;
      }else{
        //making prev node next  = temp.next
        prev.next = temp.next;
      }

      this.size--;
    }

    //search element
    search(data){
      let curr = this.head;
      let index = 0;
      let flag = true;

      while(flag && curr !== null){
        if(curr.data === data){
          flag = false;
          return index;
        }
        curr = curr.next;
        index++;
      }

      return -1;
    }

    //clear the list
    clear(){
      this.head = null;
      this.size = 0;
    }

    //middle of linked list 
    // if size is odd return mid , if there are two mid return the second one
    midElement(){
      if(this.isEmpty()) return "List is empty";
      const mid = Math.floor(this.size /2);
      let temp = this.head;

      for(let i =0; i< mid ; i++){
        temp = temp.next;
      }

      return temp.data;
    }
}


const list = new LinkedList();
list.insertAtHead(40);
list.insertAtHead(50);
list.insertAtHead(30);
list.insertAtHead(20);
list.insertAtHead(10);


list.insertAtIndex(1,35);
// list.removeAtHead();
// list.removeElement(2);
// list.removeElement(2);

// console.log(list.search(35))
// console.log(list.search(55))
console.log("Linkedlist items", list.print());

console.log(list.midElement());


console.log("🚀 ~ list:", list);

