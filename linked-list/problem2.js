//has linked list cycle
// so we take 2 variables, one is slow and another is fast. 
// slow =0 fast =0 , slow  move to 1 StereoPannerNode, fast will move 2 step 
// if there is cycle slow and fast will meet in same node otherwise they will not meet in same node 

const hasCycle = function(head){
    let slow = head, fast = head;

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;

        if(slow=== fast) return true;
    }

    return false;
}